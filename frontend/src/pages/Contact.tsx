import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import { submitContactForm } from "@/lib/api";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    desiredCountry: "",
    visaType: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Call the backend API
      const response = await submitContactForm({
        name: form.name,
        email: form.email,
        phone: form.phone,
        address: form.address,
        desiredCountry: form.desiredCountry,
        visaType: form.visaType,
        message: form.message,
      });

      if (response.success) {
        // Success - show green toast
        toast({
          title: "Message Sent! ✅",
          description:
            response.message || "We'll get back to you within 24 hours.",
        });

        // Clear the form
        setForm({
          name: "",
          email: "",
          phone: "",
          address: "",
          desiredCountry: "",
          visaType: "",
          message: "",
        });
      } else {
        // Backend returned success: false
        toast({
          title: "Error ❌",
          description:
            response.message || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      // Network error or other exception
      console.error("Error submitting form:", error);
      toast({
        title: "Error ❌",
        description:
          "Failed to send message. Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=1080&fit=crop"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-2xl mx-auto text-center"
          >
            <motion.h1
              variants={fadeUp}
              custom={0}
              className="text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground mb-6"
            >
              Contact Us
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-lg text-primary-foreground/80 leading-relaxed"
            >
              Have questions? Reach out and our team will be happy to help.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                variants={fadeUp}
                custom={0}
                className="text-3xl font-heading font-bold text-foreground mb-3"
              >
                Book a Free Consultation
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={0}
                className="text-muted-foreground mb-8 text-base"
              >
                Fill out the form below and our team will get back to you within
                24 hours.
              </motion.p>
              <motion.form
                variants={fadeUp}
                custom={1}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="h-12 text-base focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    required
                    className="h-12 text-base focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <Input
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    required
                    className="h-12 text-base focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Address
                  </label>
                  <Input
                    placeholder="Address"
                    value={form.address}
                    onChange={(e) =>
                      setForm({ ...form, address: e.target.value })
                    }
                    className="h-12 text-base focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Desired Country <span className="text-red-500">*</span>
                  </label>
                  <Select
                    value={form.desiredCountry}
                    onValueChange={(value) =>
                      setForm({ ...form, desiredCountry: value })
                    }
                    required
                  >
                    <SelectTrigger className="h-12 text-base [&>span]:text-muted-foreground data-[placeholder]:text-muted-foreground focus:ring-0 focus:ring-offset-0">
                      <SelectValue placeholder="Select Country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="canada" className="text-base">
                        Canada
                      </SelectItem>
                      <SelectItem value="australia" className="text-base">
                        Australia
                      </SelectItem>
                      <SelectItem value="uk" className="text-base">
                        United Kingdom
                      </SelectItem>
                      <SelectItem value="usa" className="text-base">
                        United States
                      </SelectItem>
                      <SelectItem value="germany" className="text-base">
                        Germany
                      </SelectItem>
                      <SelectItem value="newzealand" className="text-base">
                        New Zealand
                      </SelectItem>
                      <SelectItem value="portugal" className="text-base">
                        Portugal
                      </SelectItem>
                      <SelectItem value="uae" className="text-base">
                        UAE / Dubai
                      </SelectItem>
                      <SelectItem value="other" className="text-base">
                        Other
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Visa Type <span className="text-red-500">*</span>
                  </label>
                  <Select
                    value={form.visaType}
                    onValueChange={(value) =>
                      setForm({ ...form, visaType: value })
                    }
                    required
                  >
                    <SelectTrigger className="h-12 text-base [&>span]:text-muted-foreground data-[placeholder]:text-muted-foreground focus:ring-0 focus:ring-offset-0">
                      <SelectValue placeholder="Visa Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="study" className="text-base">
                        Study Visa
                      </SelectItem>
                      <SelectItem value="work" className="text-base">
                        Work Visa
                      </SelectItem>
                      <SelectItem value="immigrant" className="text-base">
                        Immigrant Visa
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Your Message
                  </label>
                  <Textarea
                    placeholder="Tell us about your situation..."
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    rows={4}
                    className="resize-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base"
                >
                  {loading ? "Sending..." : "Submit"}{" "}
                  <Send size={18} className="ml-2" />
                </Button>
              </motion.form>
            </motion.div>

            {/* Image + Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div
                variants={fadeUp}
                custom={0}
                className="rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop"
                  alt="Consultation"
                  className="w-full h-[400px] object-cover"
                />
              </motion.div>

              <motion.div variants={fadeUp} custom={1} className="space-y-6">
                <h3 className="text-2xl font-heading font-bold text-foreground">
                  Get In Touch
                </h3>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                    <MapPin size={22} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-base">Orvanta Advisory</p>
                    <p className="text-muted-foreground text-sm">5th Avenue, Calgary, Alberta, Canada</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                    <MapPin size={22} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-base">Orvanta Advisory</p>
                    <p className="text-muted-foreground text-sm">167-169 Great Portland Street, 5th Floor, London W1W 5PF</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                    <Mail size={22} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-base">
                      Email
                    </p>
                    <p className="text-muted-foreground text-sm">
                      info@orvantaadvisory.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                    <Phone size={22} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-base">
                      Phone
                    </p>
                    <p className="text-muted-foreground text-sm">+91 81969 82305</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
