import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Layout from "@/components/Layout";
import { Building2, Mail, Lock, User } from "lucide-react";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5 py-12 px-4">
        <div className="w-full max-w-md">
          <div className="bg-card rounded-2xl shadow-2xl border border-border p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-heading font-bold text-foreground mb-2">
                Create Account
              </h1>
              <p className="text-muted-foreground">
                Join Orvanta Advisory for B2B services
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                  <User size={16} />
                  Full Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="h-11"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                  <Mail size={16} />
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="h-11"
                />
              </div>

              <div>
                <Label htmlFor="company" className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                  <Building2 size={16} />
                  Company Name
                </Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                  className="h-11"
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                  <Lock size={16} />
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  className="h-11"
                />
              </div>

              <div>
                <Label htmlFor="confirmPassword" className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                  <Lock size={16} />
                  Confirm Password
                </Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="h-11"
                />
              </div>

              <Button
                type="submit"
                disabled
                className="w-full h-12 bg-gradient-to-r from-accent to-amber-500 text-accent-foreground hover:from-accent/90 hover:to-amber-500/90 font-semibold text-base"
              >
                Create Account
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <span className="text-muted-foreground font-semibold cursor-not-allowed">
                  Sign In
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignUpPage;
