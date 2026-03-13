import { useState } from "react";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

export default function FeedbackDialog() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = () => {
    if (!message.trim()) {
      toast({
        title: "Please enter a message",
        variant: "destructive",
      });
      return;
    }

    const subject = encodeURIComponent("Physiotherapy Portal Feedback");
    const body = encodeURIComponent(
      `${name ? `From: ${name}\n\n` : ""}${message}`
    );
    window.open(
      `mailto:info@gdanskichiropractic.com?subject=${subject}&body=${body}`,
      "_blank"
    );

    setName("");
    setMessage("");
    setOpen(false);
    toast({
      title: "Email client opened",
      description: "Please send the email from your mail app to submit your feedback.",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <MessageSquare className="w-4 h-4" />
          <span className="hidden sm:inline">Feedback</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-serif">Send Feedback</DialogTitle>
          <DialogDescription>
            Let us know how we can improve your experience.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 mt-2">
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">
              Your Name (optional)
            </label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">
              Message
            </label>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us what you think..."
              rows={4}
            />
          </div>
          <Button onClick={handleSubmit} className="w-full gap-2">
            <MessageSquare className="w-4 h-4" />
            Open Email to Send Feedback
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
