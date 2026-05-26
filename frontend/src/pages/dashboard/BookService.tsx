import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Briefcase, CreditCard } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const BookingForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const { user } = useUser();
  const { toast } = useToast();

  const [hours, setHours] = useState(1);
  const [companyName, setCompanyName] = useState("");
  const [jobPosition, setJobPosition] = useState("");
  const [notes, setNotes] = useState("");
  const [showPayment, setShowPayment] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  const ratePerHour = 850;
  const totalAmount = hours * ratePerHour;

  const handleProceedToPayment = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Step 1: Button clicked");
    console.log("API URL:", import.meta.env.VITE_API_URL);

    if (!companyName || !jobPosition) {
      console.log("Step 2: Validation failed");
      toast({
        title: "Missing Information",
        description: "Please fill in company name and job position",
        variant: "destructive",
      });
      return;
    }

    console.log("Step 3: Validation passed, calling API");
    setLoading(true);

    try {
      const url = `${import.meta.env.VITE_API_URL}/api/payments/create-booking-intent`;
      console.log("Step 4: Making fetch call to:", url);

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          hours,
          clerkUserId: user?.id,
        }),
      });

      console.log("Step 5: Response status:", response.status);
      const data = await response.json();
      console.log("Step 6: Response data:", data);

      setClientSecret(data.clientSecret);
      setShowPayment(true);

      toast({
        title: "Ready for Payment",
        description: "Please enter your card details below",
      });
    } catch (error) {
      console.error("Step 7: ERROR caught:", error);
      toast({
        title: "Error",
        description: "Failed to initialize payment",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmPayment = async () => {
    if (!stripe || !elements) return;

    setLoading(true);

    try {
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement)!,
            billing_details: {
              email: user?.primaryEmailAddress?.emailAddress,
              name: `${user?.firstName} ${user?.lastName}`,
            },
          },
        },
      );

      if (error) {
        toast({
          title: "Payment Failed",
          description: error.message,
          variant: "destructive",
        });
        setLoading(false);
        return;
      }

      if (paymentIntent.status === "succeeded") {
        await fetch(`${import.meta.env.VITE_API_URL}/api/bookings/create`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            clerkUserId: user?.id,
            userEmail: user?.primaryEmailAddress?.emailAddress,
            companyName,
            jobPosition,
            hours,
            amountGBP: totalAmount,
            notes,
            stripePaymentId: paymentIntent.id,
          }),
        });

        toast({
          title: "Booking Confirmed! 🎉",
          description: `Your LMIA service booking for ${hours} hour(s) has been confirmed.`,
        });

        navigate("/dashboard/bookings");
      }
    } catch (error) {
      console.error("Payment error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleProceedToPayment} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="hours">Number of Hours *</Label>
        <Input
          id="hours"
          type="number"
          min="1"
          max="100"
          value={hours}
          onChange={(e) => setHours(parseInt(e.target.value) || 1)}
          required
        />
        <p className="text-sm text-muted-foreground">
          Minimum 1 hour, Maximum 100 hours
        </p>
      </div>

      <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
        <p className="text-sm text-muted-foreground mb-1">Total Amount</p>
        <p className="text-3xl font-bold text-primary">
          £{totalAmount.toLocaleString()}
        </p>
        <p className="text-sm text-muted-foreground mt-1">
          {hours} hour{hours > 1 ? "s" : ""} × £{ratePerHour}
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="companyName">Company Name *</Label>
        <Input
          id="companyName"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="Enter your company name"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="jobPosition">Job Position *</Label>
        <Input
          id="jobPosition"
          value={jobPosition}
          onChange={(e) => setJobPosition(e.target.value)}
          placeholder="e.g. Software Engineer, Marketing Manager"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">Notes / Requirements</Label>
        <Textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Any specific requirements or additional information..."
          rows={4}
        />
      </div>

      {showPayment && (
        <div className="space-y-4 p-4 border-2 border-accent/20 rounded-lg bg-accent/5">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <CreditCard className="text-accent" />
            Payment Details
          </h3>
          <div className="p-4 border border-border rounded-lg bg-background">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": { color: "#aab7c4" },
                  },
                  invalid: { color: "#9e2146" },
                },
              }}
            />
          </div>
          <Button
            type="button"
            onClick={handleConfirmPayment}
            disabled={!stripe || loading}
            size="lg"
            className="w-full bg-gradient-to-r from-accent to-amber-500 text-accent-foreground hover:from-accent/90 hover:to-amber-500/90 font-semibold"
          >
            {loading
              ? "Processing..."
              : `Pay £${totalAmount.toLocaleString()} & Confirm Booking`}
          </Button>
          <p className="text-xs text-center text-muted-foreground">
            Secure payment powered by Stripe
          </p>
        </div>
      )}

      {!showPayment && (
        <Button
          type="submit"
          disabled={loading}
          size="lg"
          className="w-full bg-gradient-to-r from-accent to-amber-500 text-accent-foreground hover:from-accent/90 hover:to-amber-500/90 font-semibold"
        >
          {loading
            ? "Processing..."
            : `Proceed to Payment - £${totalAmount.toLocaleString()}`}
        </Button>
      )}
    </form>
  );
};

const BookService = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-heading font-bold mb-2">
          Book LMIA Service
        </h1>
        <p className="text-muted-foreground">
          Labour Market Impact Assessment - Professional immigration service
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="text-accent" />
            LMIA Service
          </CardTitle>
          <CardDescription className="text-base">
            End-to-end LMIA process including initial screening, interview
            preparation, application filing, and follow-up until approval
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6 p-4 bg-accent/5 border border-accent/20 rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">Rate</p>
            <p className="text-2xl font-bold text-accent">£850/hour</p>
          </div>

          <Elements stripe={stripePromise}>
            <BookingForm />
          </Elements>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookService;
