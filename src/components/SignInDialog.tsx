import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock, User } from "lucide-react";
import { toast } from "sonner";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SignInDialog = ({ open, onOpenChange }: Props) => {
  const [mode, setMode] = useState<"signin" | "signup">("signin");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(mode === "signin" ? "Signed in successfully!" : "Account created!");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            <span className="text-gradient-gold">{mode === "signin" ? "Welcome Back" : "Create Account"}</span>
          </DialogTitle>
          <DialogDescription>
            {mode === "signin" ? "Sign in to access your dashboard." : "Join HR Webdeveloper today."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={onSubmit} className="space-y-4 mt-2">
          {mode === "signup" && (
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input id="name" required placeholder="Your name" className="pl-9" />
              </div>
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input id="email" type="email" required placeholder="you@example.com" className="pl-9" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input id="password" type="password" required placeholder="••••••••" className="pl-9" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            {mode === "signin" ? "Sign In" : "Sign Up"}
          </button>

          <p className="text-center text-sm text-muted-foreground">
            {mode === "signin" ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
              className="text-primary font-semibold hover:underline"
            >
              {mode === "signin" ? "Sign Up" : "Sign In"}
            </button>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SignInDialog;
