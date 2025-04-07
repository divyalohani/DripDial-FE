import { users, type User, type InsertUser, type Subscriber, type InsertSubscriber, subscribers } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createSubscriber(subscriber: InsertSubscriber & { createdAt: string }): Promise<Subscriber>;
  getAllSubscribers(): Promise<Subscriber[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private subscribers: Map<number, Subscriber>;
  private userCurrentId: number;
  private subscriberCurrentId: number;

  constructor() {
    this.users = new Map();
    this.subscribers = new Map();
    this.userCurrentId = 1;
    this.subscriberCurrentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  async createSubscriber(subscriberData: InsertSubscriber & { createdAt: string }): Promise<Subscriber> {
    const id = this.subscriberCurrentId++;
    const subscriber: Subscriber = { ...subscriberData, id };
    this.subscribers.set(id, subscriber);
    return subscriber;
  }
  
  async getAllSubscribers(): Promise<Subscriber[]> {
    return Array.from(this.subscribers.values());
  }
}

export const storage = new MemStorage();
