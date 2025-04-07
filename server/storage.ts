import { users, type User, type InsertUser, type Subscriber, type InsertSubscriber, subscribers } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createSubscriber(subscriber: InsertSubscriber & { createdAt: string }): Promise<Subscriber>;
  getAllSubscribers(): Promise<Subscriber[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }
  
  async createSubscriber(subscriberData: InsertSubscriber & { createdAt: string }): Promise<Subscriber> {
    // Ensure stylePreferences is never undefined
    const data = {
      ...subscriberData,
      stylePreferences: subscriberData.stylePreferences || null
    };
    
    const [subscriber] = await db
      .insert(subscribers)
      .values(data)
      .returning();
    return subscriber;
  }
  
  async getAllSubscribers(): Promise<Subscriber[]> {
    const result = await db.select().from(subscribers);
    return result.map(subscriber => ({
      ...subscriber,
      stylePreferences: subscriber.stylePreferences || null
    }));
  }
}

// Use the DatabaseStorage implementation since we have a database available
export const storage = new DatabaseStorage();
