import { motion } from "framer-motion";
import { CheckCircle, Briefcase, Globe2, TrendingUp, Users, Building2, Award, ArrowRight, Phone, Mail, FileCheck } from "lucide-react";
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

const workPermitTypes = [
  {
    title: "UK Skilled Worker Visa",
    country: "United Kingdom",
    description: "For professionals with job offers from UK licensed sponsors with competitive salaries",
    features: ["Employer sponsorship required", "Long-term validity up to 5 years", "Family inclusion possible", "Path to permanent residency", "Minimum salary threshold", "English language requirement"],
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop",
    processing: "3-8 weeks",
    validity: "Up to 5 years"
  },
  {
    title: "Hong Kong Employment Visa",
    country: "Hong Kong SAR",
    description: "For professionals and skilled workers with job offers from Hong Kong companies",
    features: ["No labor market test", "Fast processing time", "Dependent visas available", "Renewable visa", "Path to permanent residency", "No quota restrictions"],
    image: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=800&h=600&fit=crop",
    processing: "4-6 weeks",
    validity: "1-3 years"
  },
  {
    title: "India Employment Visa",
    country: "India",
    description: "For foreign nationals employed by Indian companies or foreign companies with Indian operations",
    features: ["Minimum salary requirement", "Multiple entry visa", "Long-term validity", "Dependent visas", "Extension possible", "PAN card eligibility"],
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop",
    processing: "2-4 weeks",
    validity: "Up to 5 years"
  }
];

const benefits = [
  {
    icon: Briefcase,
    title: "Career Growth",
    description: "Access to international job markets and career advancement opportunities"
  },
  {
    icon: Globe2,
    title: "Global Experience",
    description: "Gain valuable international work experience and cultural exposure"
  },
  {
    icon: TrendingUp,
    title: "Higher Earnings",
    description: "Competitive salaries and better compensation packages abroad"
  },
  {
    icon: Users,
    title: "Family Benefits",
    description: "Bring your family with dependent visas and access to quality education"
  },
  {
    icon: Building2,
    title: "Professional Network",
    description: "Build global professional connections and expand your network"
  },
  {
    icon: Award,
    title: "PR Pathway",
    description: "Many work permits lead to permanent residency after qualifying period"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Job Offer",
    description: "Secure a job offer from an employer in your target country",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop"
  },
  {
    step: "02",
    title: "Employer Sponsorship",
    description: "Employer initiates sponsorship process and obtains necessary approvals",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop"
  },
  {
    step: "03",
    title: "Document Preparation",
    description: "Gather and prepare all required documents for work permit application",
    icon: FileCheck,
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop"
  },
  {
    step: "04",
    title: "Application & Approval",
    description: "Submit application and receive work permit approval",
    icon: CheckCircle,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop"
  }
];

const industries = [
  { name: "Information Technology", icon: "💻", demand: "High" },
  { name: "Healthcare & Medical", icon: "🏥", demand: "Very High" },
  { name: "Engineering", icon: "⚙️", demand: "High" },
  { name: "Finance & Banking", icon: "💰", demand: "High" },
  { name: "Education & Teaching", icon: "📚", demand: "Medium" },
  { name: "Hospitality & Tourism", icon: "🏨", demand: "Medium" }
];

const faqs = [
  {
    question: "Do I need a job offer before applying for a work permit?",
    answer: "Yes, most work permits require a valid job offer from an employer in the destination country. The employer typically needs to sponsor your application and prove they couldn't find a suitable local candidate."
  },
  {
    question: "Can my family accompany me on a work permit?",
    answer: "Yes, most countries allow dependent visas for spouses and children. Dependents can usually study and, in some cases, work with additional permissions."
  },
  {
    question: "How long does work permit processing take?",
    answer: "Processing times vary by country: UK (3-8 weeks), Hong Kong (4-6 weeks), India (2-4 weeks). Premium processing options may be available for faster approval."
  },
  {
    question: "Can a work permit lead to permanent residency?",
    answer: "Yes, many work permits provide a pathway to permanent residency after meeting certain requirements like continuous employment, minimum salary, and residency duration."
  }
];

const WorkPermits = () => {
  return (
    <Layout>
      {/* Hero Section with Background Image */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=1080&fit=crop" 
            alt="Work Permits" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/75" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.h1 
              variants={fadeUp} 
              custom={0} 
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground mb-6"
            >
              Work <span className="text-accent">Permits</span>
            </motion.h1>
            <motion.p 
              variants={fadeUp} 
              custom={1} 
              className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8"
            >
              Secure your work authorization and advance your international career with our expert guidance for UK, Hong Kong, and India work permits.
            </motion.p>
            <motion.div variants={fadeUp} custom={2}>
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-accent to-amber-500 text-accent-foreground hover:from-accent/90 hover:to-amber-500/90">
                  Apply Now <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Work Permit Types */}
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
              Work Permit Options
            </motion.h2>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Explore work permit programs for UK, Hong Kong, and India
            </motion.p>
          </div>

          <div className="space-y-12">
            {workPermitTypes.map((permit, i) => (
              <motion.div
                key={permit.title}
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
                      src={permit.image} 
                      alt={permit.country}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <p className="text-accent font-semibold mb-2">{permit.country}</p>
                      <h3 className="font-heading font-bold text-3xl text-white">
                        {permit.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                      {permit.description}
                    </p>
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <CheckCircle size={20} className="text-secondary" />
                        Key Features:
                      </h4>
                      <ul className="grid grid-cols-1 gap-3">
                        {permit.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle size={16} className="text-secondary shrink-0 mt-1" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-1">Processing Time</p>
                        <p className="text-secondary font-bold">{permit.processing}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-1">Validity</p>
                        <p className="text-secondary font-bold">{permit.validity}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Benefits */}
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
              Benefits of International Work Permits
            </motion.h2>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Why professionals choose to work abroad
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-xl p-6 card-elevated border border-border"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/10 mb-4">
                  <benefit.icon className="text-secondary" size={28} />
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

      {/* Section 3: Process Steps with Images */}
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
              Work Permit Application Process
            </motion.h2>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Four simple steps to your international work permit
            </motion.p>
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
                className="relative group"
              >
                <div className="bg-card rounded-xl overflow-hidden card-elevated border border-border hover:shadow-2xl transition-all">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-accent flex items-center justify-center font-bold text-accent-foreground text-lg shadow-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="p-6">
                    <step.icon className="text-secondary mb-3" size={28} />
                    <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: In-Demand Industries */}
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
              In-Demand Industries
            </motion.h2>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Sectors with high demand for international workers
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
                    <p className="text-sm text-muted-foreground">Demand: {industry.demand}</p>
                  </div>
                </div>
                <CheckCircle className="text-secondary" size={24} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: FAQs */}
      <section className="py-20 lg:py-28 bg-background">
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
                Common questions about work permits
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

      {/* Section 6: CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 
              variants={fadeUp} 
              custom={0} 
              className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6"
            >
              Ready to Start Your International Career?
            </motion.h2>
            <motion.p 
              variants={fadeUp} 
              custom={1} 
              className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg"
            >
              Get expert guidance on work permits and take the next step in your global career journey.
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

export default WorkPermits;
