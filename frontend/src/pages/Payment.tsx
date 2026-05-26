import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Layout from "@/components/Layout";
import { CreditCard, Lock, CheckCircle } from "lucide-react";

const Payment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Set payment completed flag in localStorage
    localStorage.setItem("paymentCompleted", "true");
    alert("Payment successful! Welcome to Orvanta Advisory.");
    navigate("/dashboard");
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
        <div className="w-full max-w-2xl">
          <div className="bg-card rounded-2xl shadow-2xl border border-border overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-primary/80 p-8 text-center">
              <h1 className="text-3xl font-heading font-bold text-primary-foreground mb-2">
                Complete Your Payment
              </h1>
              <p className="text-primary-foreground/90">
                Start your business collaboration with Orvanta Advisory
              </p>
            </div>

            {/* Pricing Info */}
            <div className="p-8 border-b border-border">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">B2B Membership Plan</h3>
                  <p className="text-sm text-muted-foreground">Access to all immigration and investment services</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-secondary">$999</p>
                  <p className="text-sm text-muted-foreground">per year</p>
                </div>
              </div>

              <div className="bg-secondary/5 rounded-lg p-4 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle size={16} className="text-secondary" />
                  <span className="text-muted-foreground">Immigration services consultation</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle size={16} className="text-secondary" />
                  <span className="text-muted-foreground">Investment advisory services</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle size={16} className="text-secondary" />
                  <span className="text-muted-foreground">Legal documentation support</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle size={16} className="text-secondary" />
                  <span className="text-muted-foreground">24/7 customer support</span>
                </div>
              </div>
            </div>

            {/* Payment Form */}
            <div className="p-8">
              <div className="flex items-center gap-2 mb-6">
                <Lock size={20} className="text-secondary" />
                <p className="text-sm text-muted-foreground">Your payment information is secure and encrypted</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="cardNumber" className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                    <CreditCard size={16} />
                    Card Number
                  </Label>
                  <Input
                    id="cardNumber"
                    name="cardNumber"
                    type="text"
                    required
                    value={formData.cardNumber}
                    onChange={handleChange}
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                    className="h-11"
                  />
                </div>

                <div>
                  <Label htmlFor="cardName" className="text-sm font-medium text-foreground mb-2">
                    Cardholder Name
                  </Label>
                  <Input
                    id="cardName"
                    name="cardName"
                    type="text"
                    required
                    value={formData.cardName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="h-11"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiryDate" className="text-sm font-medium text-foreground mb-2">
                      Expiry Date
                    </Label>
                    <Input
                      id="expiryDate"
                      name="expiryDate"
                      type="text"
                      required
                      value={formData.expiryDate}
                      onChange={handleChange}
                      placeholder="MM/YY"
                      maxLength={5}
                      className="h-11"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvv" className="text-sm font-medium text-foreground mb-2">
                      CVV
                    </Label>
                    <Input
                      id="cvv"
                      name="cvv"
                      type="text"
                      required
                      value={formData.cvv}
                      onChange={handleChange}
                      placeholder="123"
                      maxLength={3}
                      className="h-11"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-gradient-to-r from-accent to-amber-500 text-accent-foreground hover:from-accent/90 hover:to-amber-500/90 font-semibold text-base"
                >
                  Complete Payment - $999
                </Button>
              </form>

              <p className="text-xs text-muted-foreground text-center mt-4">
                By completing this payment, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Payment;
