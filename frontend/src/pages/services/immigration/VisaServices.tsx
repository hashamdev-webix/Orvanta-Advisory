import { motion } from "framer-motion";
import { CheckCircle, Globe, FileText, Users, Shield, Clock, Award, ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const visaTypes = [
  {
    title: "Tourist Visa",
    description: "Short-term travel visas for tourism and leisure activities worldwide",
    features: ["Quick processing within 5-7 days", "Multiple entry options available", "Travel insurance guidance", "Itinerary planning support"],
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop"
  },
  {
    title: "Business Visa",
    description: "For business meetings, conferences, and international trade activities",
    features: ["Fast-track processing", "Multiple country support", "Documentation assistance", "Invitation letter guidance"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
  },
  {
    title: "Student Visa",
    description: "Study abroad visa for international education and academic pursuits",
    features: ["University liaison services", "Financial documentation", "Interview preparation", "Post-arrival support"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop"
  },
  {
    title: "Family Visa",
    description: "Reunite with family members abroad through sponsorship programs",
    features: ["Sponsorship guidance", "Relationship documentation", "Complete support", "Priority processing"],
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=600&fit=crop"
  },
  {
    title: "Transit Visa",
    description: "For travelers passing through a country en route to their destination",
    features: ["Quick approval", "Airport transit support", "Layover assistance", "Documentation help"],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop"
  },
  {
    title: "Medical Visa",
    description: "For individuals seeking medical treatment abroad",
    features: ["Hospital coordination", "Medical documentation", "Attendant visa support", "Emergency processing"],
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=600&fit=crop"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    description: "Free consultation to understand your travel needs and visa requirements",
    icon: Users
  },
  {
    step: "02",
    title: "Document Collection",
    description: "We guide you through collecting all necessary documents and forms",
    icon: FileText
  },
  {
    step: "03",
    title: "Application Preparation",
    description: "Our experts prepare and review your complete visa application",
    icon: CheckCircle
  },
  {
    step: "04",
    title: "Submission & Tracking",
    description: "We submit your application and track it until approval",
    icon: Globe
  }
];

const countries = [
  { 
    name: "UK", 
    flag: "🇬🇧", 
    processing: "15-20 days",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop",
    description: "Expert visa services for the United Kingdom including tourist, business, student, and work visas with comprehensive documentation support."
  },
  { 
    name: "Hong Kong", 
    flag: "🇭🇰", 
    processing: "10-15 days",
    image: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=800&h=600&fit=crop",
    description: "Fast-track visa processing for Hong Kong SAR with employment, investment, and dependent visa services for seamless relocation."
  },
  { 
    name: "India", 
    flag: "🇮🇳", 
    processing: "10-15 days",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop",
    description: "Comprehensive visa assistance for India including e-visa, tourist visa, business visa, and OCI card services with quick processing."
  }
];

const benefits = [
  {
    icon: Clock,
    title: "Fast Processing",
    description: "Quick turnaround times with priority handling options"
  },
  {
    icon: Shield,
    title: "High Success Rate",
    description: "98% visa approval rate with expert guidance"
  },
  {
    icon: Award,
    title: "Expert Team",
    description: "Experienced visa consultants with 10+ years expertise"
  },
  {
    icon: Phone,
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your queries"
  }
];

const faqs = [
  {
    question: "How long does visa processing take?",
    answer: "Processing times vary by country, typically ranging from 5-30 days. We offer expedited services for urgent travel needs."
  },
  {
    question: "What documents do I need?",
    answer: "Basic requirements include passport, photographs, application forms, and supporting documents based on visa type. We provide a complete checklist."
  },
  {
    question: "Can you guarantee visa approval?",
    answer: "While we cannot guarantee approval (final decision rests with embassies), our 98% success rate reflects our expertise in application preparation."
  },
  {
    question: "Do you handle visa rejections?",
    answer: "Yes, we offer reapplication services and appeal assistance for rejected cases with detailed analysis of rejection reasons."
  }
];

const VisaServices = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&h=1080&fit=crop" 
            alt="Visa Services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl mx-auto text-center">
            <motion.h1 
              variants={fadeUp} 
              custom={0} 
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground mb-6"
            >
              Visa <span className="text-accent">Services</span>
            </motion.h1>
            <motion.p 
              variants={fadeUp} 
              custom={1} 
              className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8"
            >
              Expert visa consultation and application services for all your international travel needs. We handle everything from tourist visas to complex business and family visas.
            </motion.p>
            <motion.div variants={fadeUp} custom={2}>
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-accent to-amber-500 text-accent-foreground hover:from-accent/90 hover:to-amber-500/90">
                  Get Started <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Visa Types */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Types of Visas We Handle
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive visa services for every travel purpose
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visaTypes.map((visa, i) => (
              <motion.div
                key={visa.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-xl overflow-hidden card-elevated border border-border group hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={visa.image} 
                    alt={visa.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 font-heading font-bold text-xl text-white">
                    {visa.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">
                    {visa.description}
                  </p>
                  <ul className="space-y-2">
                    {visa.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-secondary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Process Steps */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Our Simple 4-Step Process
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From consultation to visa approval, we handle everything
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="relative"
              >
                <div className="bg-card rounded-xl p-6 card-elevated border border-border h-full">
                  <div className="text-6xl font-bold text-secondary/20 mb-4">{step.step}</div>
                  <step.icon className="text-secondary mb-4" size={32} />
                  <h3 className="font-heading font-bold text-xl mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="text-secondary" size={24} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Countries We Serve */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Countries We Serve
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Visa services for popular destinations worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {countries.map((country, i) => (
              <motion.div
                key={country.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-xl overflow-hidden card-elevated border border-border hover:shadow-2xl transition-all group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={country.image} 
                    alt={country.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="text-5xl mb-2">{country.flag}</div>
                    <h3 className="font-heading font-bold text-2xl text-white">
                      {country.name}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {country.description}
                  </p>
                  <div className="flex items-center gap-2 text-secondary">
                    <Clock size={18} />
                    <span className="font-semibold">Processing: {country.processing}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Why Choose Us */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Why Choose Our Visa Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience the difference with our professional visa assistance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-xl p-6 card-elevated border border-border text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
                  <benefit.icon className="text-secondary" size={32} />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Document Requirements */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                General Document Requirements
              </h2>
              <p className="text-muted-foreground text-lg">
                Basic documents needed for most visa applications
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Valid Passport", desc: "Minimum 6 months validity from travel date" },
                { title: "Photographs", desc: "Recent passport-size photos as per specifications" },
                { title: "Application Form", desc: "Completed and signed visa application form" },
                { title: "Travel Itinerary", desc: "Flight bookings and accommodation details" },
                { title: "Financial Proof", desc: "Bank statements showing sufficient funds" },
                { title: "Travel Insurance", desc: "Valid travel insurance coverage" },
                { title: "Supporting Documents", desc: "Employment letter, invitation letter, etc." },
                { title: "Previous Visas", desc: "Copies of previous travel visas if applicable" }
              ].map((doc, i) => (
                <motion.div
                  key={doc.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                  className="flex gap-4 p-4 bg-card rounded-lg border border-border"
                >
                  <CheckCircle className="text-secondary shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{doc.title}</h4>
                    <p className="text-sm text-muted-foreground">{doc.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: FAQs */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-lg">
                Common questions about our visa services
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <motion.div
                  key={faq.question}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                  className="bg-card rounded-xl p-6 card-elevated border border-border"
                >
                  <h3 className="font-heading font-bold text-lg text-foreground mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 
              variants={fadeUp} 
              custom={0} 
              className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6"
            >
              Ready to Start Your Visa Application?
            </motion.h2>
            <motion.p 
              variants={fadeUp} 
              custom={1} 
              className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg"
            >
              Book a free consultation with our visa experts and get personalized guidance for your travel plans.
            </motion.p>
            <motion.div variants={fadeUp} custom={2} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-accent to-amber-500 text-accent-foreground hover:from-accent/90 hover:to-amber-500/90">
                  <Phone className="mr-2" size={20} />
                  Book Free Consultation
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
                  <Mail className="mr-2" size={20} />
                  Email Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default VisaServices;
