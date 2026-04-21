import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, User, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import hrLogo from "@/assets/hr-logo.png";

const SignIn = () => {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(mode === "signin" ? "Signed in successfully!" : "Account created!");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-dark flex items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors">
          <ArrowLeft size={16} />
          <span className="text-sm">Back to Home</span>
        </Link>

        <div className="bg-card border border-border rounded-2xl shadow-xl p-8">
          <div className="flex flex-col items-center text-center mb-6">
            <img src={hrLogo} alt="HR Webdeveloper" className="w-16 h-16 mb-3" />
            <h1 className="text-3xl font-bold">
              <span className="text-gradient-gold">
                {mode === "signin" ? "Welcome Back" : "Create Account"}
              </span>
            </h1>
            <p className="text-sm text-muted-foreground mt-2">
              {mode === "signin"
                ? "Sign in to access your dashboard."
                : "Join HR Webdeveloper today."}
            </p>
          </div>

          <form onSubmit={onSubmit} className="space-y-4">
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
              className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-gold"
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
        </div>
      </motion.div>
    </div>
  );
};

export default SignIn;
