import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

type SubscriberData = {
  name: string;
  email: string;
  stylePreferences?: string[];
};

export function useSubscribe() {
  const [isLoading, setIsLoading] = useState(false);
  
  const mutation = useMutation({
    mutationFn: async (data: SubscriberData) => {
      setIsLoading(true);
      try {
        const response = await apiRequest("POST", "/api/subscribe", data);
        const result = await response.json();
        return result;
      } finally {
        setIsLoading(false);
      }
    }
  });
  
  const subscribe = async (data: SubscriberData) => {
    return mutation.mutateAsync(data);
  };
  
  return {
    subscribe,
    isLoading,
    error: mutation.error
  };
}
