"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";

export const ToastSection = () => {
  const { toast } = useToast();

  return (
    <section>
      <h2>Toastコンポーネント</h2>
      <Button
        onClick={() => {
          toast({
            title: "Scheduled: Catch up",
            description: "Friday, February 10, 2024 at 5:57 PM",
          });
        }}
      >
        Show Toast
      </Button>

      <Button
        onClick={() => {
          toast({
            variant: "destructive",
            title: "Error",
            description: "Something went wrong.",
          });
        }}
      >
        Show Error Toast
      </Button>
    </section>
  );
}
