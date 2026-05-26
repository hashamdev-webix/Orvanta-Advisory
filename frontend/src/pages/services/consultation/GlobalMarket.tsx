import { motion } from "framer-motion";
import { CheckCircle, Globe2, TrendingUp, Target, Users, BarChart3, Award, ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: (i: number) => ({ opacity: 1, x: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: (i: number) => ({ opacity: 1, x: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const marketServices = [
  {
    title: "UK Market Entry",
    country: "United Kingdom",
    description: "Strategic guidance for entering the UK market with comprehensive market analysis and regulatory compliance support",
    features: ["Market research & analysis", "Regulatory compliance", "Business registration", "Local partnerships", "Tax optimization", "Market positioning"],
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop",
    opportunities: ["Financial services hub", "Tech innovation center", "Strong legal framework", "Access to EU markets"]
  },
  {
    title: "Hong Kong Market Entry",
    country: "Hong Kong SAR",
    description: "Gateway to Asia Pacific with strategic positioning for mainland China and Asian markets access",
    features: ["Asia Pacific gateway", "Low tax environment", "Free trade policies", "Banking infrastructure", "Business-friendly regulations", "Strategic location"],
    image: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=800&h=600&fit=crop",
    opportunities: ["Financial center", "Trading hub", "China gateway", "International business"]
  },
  {
    title: "India Market Entry",
    country: "India",
    description: "Tap into one of the world's fastest-growing economies with massive consumer base and digital transformation",
    features: ["Growing economy", "Large consumer base", "Digital transformation", "Skilled workforce", "Government incentives", "Diverse sectors"],
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop",
    opportunities: ["1.4B population", "Tech innovation", "Manufacturing hub", "Service sector growth"]
  }
];

const services = [
  {
    icon: Globe2,
    title: "Market Research",
    description: "In-depth analysis of target markets, competitors, and consumer behavior"
  },
  {
    icon: Target,
    title: "Entry Strategy",
    description: "Customized market entry strategies based on your business goals"
  },
  {
    icon: Users,
    title: "Local Partnerships",
    description: "Connect with reliable local partners and distributors"
  },
  {
    icon: BarChart3,
    title: "Risk Assessment",
    description: "Identify and mitigate potential market entry risks"
  },
  {
    icon: TrendingUp,
    title: "Growth Planning",
    description: "Scalable growth strategies for long-term success"
  },
  {
    icon: Award,
    title: "Compliance Support",
    description: "Navigate local regulations and legal requirements"
  }
];

const benefits = [
  {
    title: "Expert Market Insights",
    description: "Access to local market intelligence and industry expertise",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
  },
  {
    title: "Risk Mitigation",
    description: "Minimize entry risks with proven strategies and local knowledge",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop"
  },
  {
    title: "Faster Market Entry",
    description: "Accelerate your market entry with streamlined processes",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop"
  },
  {
    title: "Cost Optimization",
    description: "Optimize costs through strategic planning and local insights",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop"
  }
];

const processSteps = [
  { step: "01", title: "Initial Consultation", description: "Understand your business goals and target markets" },
  { step: "02", title: "Market Analysis", description: "Comprehensive research and feasibility study" },
  { step: "03", title: "Strategy Development", description: "Create customized market entry strategy" },
  { step: "04", title: "Implementation Support", description: "Execute strategy with ongoing guidance" }
];

const industries = [
  { name: "Technology & Software", icon: "💻", potential: "Very High" },
  { name: "Financial Services", icon: "💰", potential: "High" },
  { name: "Healthcare & Pharma", icon: "🏥", potential: "High" },
  { name: "E-commerce & Retail", icon: "🛒", potential: "Very High" },
  { name: "Manufacturing", icon: "🏭", potential: "High" },
  { name: "Professional Services", icon: "💼", potential: "Medium" }
];

const GlobalMarket = () => {
  return (
    <Layout>
      {/* Hero Section with Background Image */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1920&h=1080&fit=crop" 
            alt="Global Market Guidance" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/75" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl mx-auto text-center">
            <motion.h1 
              variants={fadeUp} 
              custom={0} 
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground mb-6"
            >
              Global Market <span className="text-accent">Guidance</span>
            </motion.h1>
            <motion.p 
              variants={fadeUp} 
              custom={1} 
              className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8"
            >
              Expert consultation for entering and expanding in UK, Hong Kong, and India markets. Strategic insights to help your business succeed globally.
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

      {/* Section 1: Market Entry Services */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4"
            >
              Market Entry Services
            </motion.h2>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Strategic guidance for entering UK, Hong Kong, and India markets
            </motion.p>
          </div>

          <div className="space-y-12">
            {marketServices.map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={i % 2 === 0 ? fadeLeft : fadeRight}
                custom={i}
                className="bg-card rounded-2xl overflow-hidden card-elevated border border-border group hover:shadow-2xl transition-all duration-300"
              >
                <div className={`grid md:grid-cols-2 gap-0 ${i % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                  <div className={`relative h-80 md:h-auto overflow-hidden ${i % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    <img 
                      src={service.image} 
                      alt={service.country}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <p className="text-accent font-semibold mb-2">{service.country}</p>
                      <h3 className="font-heading font-bold text-3xl text-white">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                      {service.description}
                    </p>
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <CheckCircle size={20} className="text-secondary" />
                        Our Services:
                      </h4>
                      <ul className="grid grid-cols-1 gap-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle size={16} className="text-secondary shrink-0 mt-1" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-6 border-t border-border">
                      <h4 className="font-semibold text-foreground mb-3">Key Opportunities:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.opportunities.map((opp, idx) => (
                          <span key={idx} className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
                            {opp}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Our Services */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4"
            >
              Comprehensive Market Guidance
            </motion.h2>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              End-to-end support for your global expansion
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-xl p-6 card-elevated border border-border"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/10 mb-4">
                  <service.icon className="text-secondary" size={28} />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Benefits with Images */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4"
            >
              Why Choose Our Market Guidance
            </motion.h2>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Benefits of working with our global market experts
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-xl overflow-hidden card-elevated border border-border group hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={benefit.image} 
                    alt={benefit.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 font-heading font-bold text-2xl text-white">
                    {benefit.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Process Steps */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4"
            >
              Our Consultation Process
            </motion.h2>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Four-step approach to successful market entry
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="relative pl-16 pb-12 last:pb-0"
              >
                {i < processSteps.length - 1 && (
                  <div className="absolute left-[31px] top-16 bottom-0 w-0.5 bg-secondary/30" />
                )}
                <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {step.step}
                </div>
                <div className="bg-card rounded-xl p-6 card-elevated border border-border">
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Industries */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4"
            >
              Industries We Serve
            </motion.h2>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Expertise across diverse sectors and industries
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {industries.map((industry, i) => (
              <motion.div
                key={industry.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-xl p-6 card-elevated border border-border flex items-center justify-between hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{industry.icon}</div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-foreground">
                      {industry.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">Potential: {industry.potential}</p>
                  </div>
                </div>
                <CheckCircle className="text-secondary" size={24} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 
              variants={fadeUp} 
              custom={0} 
              className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6"
            >
              Ready to Expand Globally?
            </motion.h2>
            <motion.p 
              variants={fadeUp} 
              custom={1} 
              className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg"
            >
              Get expert market guidance and strategic insights for your global expansion. Contact our consultants today.
            </motion.p>
            <motion.div variants={fadeUp} custom={2} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-accent to-amber-500 text-accent-foreground hover:from-accent/90 hover:to-amber-500/90">
                  <Phone className="mr-2" size={20} />
                  Book Consultation
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

export default GlobalMarket;
