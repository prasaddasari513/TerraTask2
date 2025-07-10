import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function useCopyToClipboard() {
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      toast({
        title: "Success",
        description: "Code copied to clipboard!",
        variant: "default",
      });
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy text: ", error);
      toast({
        title: "Error",
        description: "Failed to copy to clipboard",
        variant: "destructive",
      });
    }
  };

  return { copy, isCopied };
}
