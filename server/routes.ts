import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertSubscriberSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Add subscriber
  app.post("/api/subscribe", async (req, res) => {
    try {
      const validatedData = insertSubscriberSchema.parse(req.body);
      
      // Add created timestamp
      const subscriber = {
        ...validatedData,
        createdAt: new Date().toISOString(),
      };
      
      const createdSubscriber = await storage.createSubscriber(subscriber);
      res.status(201).json(createdSubscriber);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Invalid data provided", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          message: "Error creating subscriber" 
        });
      }
    }
  });
  
  // Get all subscribers
  app.get("/api/subscribers", async (req, res) => {
    try {
      const subscribers = await storage.getAllSubscribers();
      res.status(200).json(subscribers);
    } catch (error) {
      res.status(500).json({ 
        message: "Error retrieving subscribers" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
