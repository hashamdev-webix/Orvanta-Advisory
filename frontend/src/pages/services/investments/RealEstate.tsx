import { motion } from "framer-motion";
import { CheckCircle, Building2, TrendingUp, Shield, MapPin, DollarSign, Award, ArrowRight, Phone, Mail, Home, Briefcase } from "lucide-react";
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

const investmentOptions = [
  {
    title: "Residential Properties",
    description: "Invest in residential real estate across UK, Hong Kong, and India with high rental yields and capital appreciation",
    features: ["Prime location properties", "Rental income management", "Property maintenance", "Legal documentation support"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
  },
  {
    title: "Commercial Real Estate",
    description: "High-yield commercial property investments in business districts and growing markets",
    features: ["Market research & analysis", "Tenant screening", "Lease management", "Portfolio diversification"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
  },
  {
    title: "REITs Investment",
    description: "Real Estate Investment Trusts for passive income and diversified property portfolios",
    features: ["Low entry barrier", "Diversified portfolio", "Regular dividends", "High liquidity options"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
  },
  {
    title: "International Properties",
    description: "Global real estate investment opportunities with residency and citizenship benefits",
    features: ["Cross-border transactions", "Currency management", "Tax optimization", "Residency benefits"],
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop"
  }
];

const marketOpportunities = [
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    description: "London and major UK cities offer stable property markets with strong rental demand and capital growth potential. Ideal for long-term investment with excellent infrastructure and legal framework.",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop",
    highlights: ["Stable market", "Strong rental yields", "Capital appreciation", "Transparent legal system"]
  },
  {
    country: "Hong Kong",
    flag: "🇭🇰",
    description: "Asia's financial hub with limited land supply driving property values. Premium locations offer excellent investment returns and gateway to mainland China market opportunities.",
    image: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=800&h=600&fit=crop",
    highlights: ["High demand", "Limited supply", "Asia gateway", "Strong economy"]
  },
  {
    country: "India",
    flag: "🇮🇳",
    description: "Rapidly growing real estate market with emerging cities and infrastructure development. High growth potential in residential and commercial sectors with favorable demographics.",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop",
    highlights: ["High growth", "Emerging markets", "Infrastructure boom", "Young population"]
  }
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Capital Appreciation",
    description: "Long-term property value growth in prime locations"
  },
  {
    icon: DollarSign,
    title: "Rental Income",
    description: "Steady passive income through property rentals"
  },
  {
    icon: Shield,
    title: "Portfolio Diversification",
    description: "Reduce risk with diversified real estate holdings"
  },
  {
    icon: Award,
    title: "Tax Benefits",
    description: "Optimize taxes through strategic property investments"
  }
];

const processSteps = [
  { step: "01", title: "Investment Consultation", description: "Understand your investment goals and budget requirements" },
  { step: "02", title: "Market Analysis", description: "Comprehensive research of target markets and opportunities" },
  { step: "03", title: "Property Selection", description: "Identify and evaluate suitable investment properties" },
  { step: "04", title: "Due Diligence", description: "Legal verification and property inspection" },
  { step: "05", title: "Transaction Support", description: "Complete purchase process and documentation" },
  { step: "06", title: "Property Management", description: "Ongoing management and rental services" }
];

const propertyTypes = [
  {
    title: "Luxury Apartments",
    description: "Premium residential properties in prime city locations",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop"
  },
  {
    title: "Office Spaces",
    description: "Commercial properties in business districts",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop"
  },
  {
    title: "Retail Properties",
    description: "Shopping centers and retail outlets",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop"
  },
  {
    title: "Industrial Units",
    description: "Warehouses and manufacturing facilities",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop"
  }
];

const faqs = [
  {
    question: "What is the minimum investment amount?",
    answer: "Minimum investment varies by property type and location, typically starting from £100,000 for UK properties, HK$2M for Hong Kong, and ₹50 lakhs for India. REIT investments can start from much lower amounts."
  },
  {
    question: "Can foreigners buy property in these countries?",
    answer: "Yes, foreigners can purchase property in UK, Hong Kong, and India with certain conditions. We guide you through all legal requirements and restrictions specific to each country."
  },
  {
    question: "What are the expected returns?",
    answer: "Returns vary by location and property type. Typical rental yields range from 3-6% annually, with capital appreciation of 5-10% in growing markets. We provide detailed projections for each investment."
  },
  {
    question: "Do you provide property management services?",
    answer: "Yes, we offer comprehensive property management including tenant sourcing, rent collection, maintenance, and legal compliance for all your investment properties."
  }
];

const RealEstate = () => {
  return (
    <Layout>
      {/* Hero Section with Background Image */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=1080&fit=crop" 
            alt="Real Estate Investments" 
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
              Real Estate <span className="text-accent">Investments</span>
            </motion.h1>
            <motion.p 
              variants={fadeUp} 
              custom={1} 
              className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8"
            >
              Build wealth through strategic real estate investments in UK, Hong Kong, and India. Expert guidance for residential, commercial, and REIT investments.
            </motion.p>
            <motion.div variants={fadeUp} custom={2}>
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-accent to-amber-500 text-accent-foreground hover:from-accent/90 hover:to-amber-500/90">
                  Start Investing <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Investment Options */}
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
              Investment Opportunities
            </motion.h2>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Diverse real estate investment options tailored to your goals
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {investmentOptions.map((option, i) => (
              <motion.div
                key={option.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-xl overflow-hidden card-elevated border border-border group hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={option.image} 
                    alt={option.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 font-heading font-bold text-2xl text-white">
                    {option.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {option.description}
                  </p>
                  <ul className="space-y-2">
                    {option.features.map((feature, idx) => (
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

      {/* Section 2: Market Opportunities */}
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
              Global Market Opportunities
            </motion.h2>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Prime real estate markets across three continents
            </motion.p>
          </div>

          <div className="space-y-12">
            {marketOpportunities.map((market, i) => (
              <motion.div
                key={market.country}
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
                      src={market.image} 
                      alt={market.country}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <div className="text-5xl mb-2">{market.flag}</div>
                      <h3 className="font-heading font-bold text-3xl text-white">
                        {market.country}
                      </h3>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                      {market.description}
                    </p>
                    <div className="pt-6 border-t border-border">
                      <h4 className="font-semibold text-foreground mb-3">Key Highlights:</h4>
                      <div className="flex flex-wrap gap-2">
                        {market.highlights.map((highlight, idx) => (
                          <span key={idx} className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
                            {highlight}
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

      {/* Section 3: Benefits */}
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
              Why Invest in Real Estate
            </motion.h2>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Key benefits of real estate investment
            </motion.p>
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

      {/* Section 4: Property Types */}
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
              Property Types We Offer
            </motion.h2>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Diverse property portfolio for every investment strategy
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {propertyTypes.map((property, i) => (
              <motion.div
                key={property.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-xl overflow-hidden card-elevated border border-border group hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 font-heading font-bold text-2xl text-white">
                    {property.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground">
                    {property.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Investment Process */}
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
              Our Investment Process
            </motion.h2>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Six-step approach to successful real estate investment
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

      {/* Section 6: FAQs */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={0}
                className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4"
              >
                Frequently Asked Questions
              </motion.h2>
              <motion.p 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={1}
                className="text-muted-foreground text-lg"
              >
                Common questions about real estate investments
              </motion.p>
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
              Ready to Build Your Property Portfolio?
            </motion.h2>
            <motion.p 
              variants={fadeUp} 
              custom={1} 
              className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg"
            >
              Start your real estate investment journey with expert guidance. Contact our investment advisors today.
            </motion.p>
            <motion.div variants={fadeUp} custom={2} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-accent to-amber-500 text-accent-foreground hover:from-accent/90 hover:to-amber-500/90">
                  <Phone className="mr-2" size={20} />
                  Schedule Consultation
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

export default RealEstate;
