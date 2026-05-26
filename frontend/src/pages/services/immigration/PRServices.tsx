import { motion } from "framer-motion";
import { CheckCircle, Home, Shield, Award, Users, Globe2, TrendingUp, ArrowRight, Phone, Mail, FileCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const prPrograms = [
  {
    title: "UK Permanent Residency (ILR)",
    country: "United Kingdom",
    description: "Indefinite Leave to Remain in the UK after qualifying period of residence with pathway to British citizenship",
    features: ["5-year pathway typically", "Life in UK test preparation", "Comprehensive documentation support", "Application tracking & updates", "Citizenship pathway guidance", "Family inclusion possible"],
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop",
    eligibility: "Individuals who have lived in UK on qualifying visa (Skilled Worker, Spouse, etc.) for required period",
    processing: "6 months",
    benefits: ["Live and work indefinitely", "Access to NHS", "No visa renewals", "Path to citizenship"]
  },
  {
    title: "Hong Kong Permanent Residency",
    country: "Hong Kong SAR",
    description: "Right of Abode in Hong Kong after 7 years of continuous ordinary residence with full residency rights",
    features: ["7-year continuous residence", "Right of Abode certificate", "No visa restrictions", "HKSAR passport eligibility", "Full employment rights", "Social benefits access"],
    image: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=800&h=600&fit=crop",
    eligibility: "Individuals who have resided in Hong Kong for 7 continuous years on valid visas",
    processing: "6-8 weeks",
    benefits: ["Permanent residence status", "HKSAR passport", "Unrestricted employment", "Social welfare access"]
  },
  {
    title: "India OCI Card",
    country: "India",
    description: "Overseas Citizen of India card providing lifelong visa-free entry and multiple benefits for foreign nationals of Indian origin",
    features: ["Lifelong visa-free entry", "Multiple entry privileges", "Work and study rights", "Property ownership", "Parity with NRIs", "No registration required"],
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop",
    eligibility: "Foreign nationals who were Indian citizens or whose parents/grandparents were Indian citizens",
    processing: "3-6 months",
    benefits: ["Visa-free travel to India", "Work without restrictions", "Educational benefits", "Property rights"]
  }
];

const benefits = [
  {
    icon: Home,
    title: "Permanent Residence",
    description: "Live, work, and study indefinitely in your chosen country"
  },
  {
    icon: Users,
    title: "Family Inclusion",
    description: "Include spouse and dependent children in your application"
  },
  {
    icon: Shield,
    title: "Social Benefits",
    description: "Access to healthcare, education, and social security"
  },
  {
    icon: Globe2,
    title: "Travel Freedom",
    description: "Visa-free travel to many countries with PR status"
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Unlimited job opportunities without work restrictions"
  },
  {
    icon: Award,
    title: "Citizenship Path",
    description: "Pathway to citizenship after meeting residency requirements"
  }
];

const processTimeline = [
  {
    phase: "Assessment",
    duration: "1-2 weeks",
    description: "Eligibility assessment and pathway selection",
    tasks: ["Profile evaluation", "Points calculation", "Document checklist", "Strategy planning"]
  },
  {
    phase: "Preparation",
    duration: "2-3 months",
    description: "Document collection and application preparation",
    tasks: ["Document gathering", "Language tests", "Skills assessment", "Medical exams"]
  },
  {
    phase: "Submission",
    duration: "1-2 weeks",
    description: "Application submission and initial processing",
    tasks: ["Application filing", "Fee payment", "Biometrics", "Acknowledgment receipt"]
  },
  {
    phase: "Processing",
    duration: "6-18 months",
    description: "Government processing and verification",
    tasks: ["Background checks", "Document verification", "Additional requests", "Status updates"]
  },
  {
    phase: "Approval",
    duration: "2-4 weeks",
    description: "Final approval and PR visa issuance",
    tasks: ["Approval notification", "PR visa stamping", "Landing procedures", "Settlement support"]
  }
];

const eligibilityCriteria = [
  {
    category: "Age",
    requirement: "Typically 18-45 years (varies by program)",
    points: "Maximum points for ages 25-32"
  },
  {
    category: "Education",
    requirement: "Minimum bachelor's degree or equivalent",
    points: "Higher education = more points"
  },
  {
    category: "Work Experience",
    requirement: "Minimum 1-3 years in skilled occupation",
    points: "More experience = higher points"
  },
  {
    category: "Language Proficiency",
    requirement: "IELTS/PTE/TOEFL scores required",
    points: "Higher scores = more points"
  },
  {
    category: "Adaptability",
    requirement: "Previous study/work in destination country",
    points: "Bonus points for local experience"
  },
  {
    category: "Job Offer",
    requirement: "Valid job offer (if applicable)",
    points: "Significant points boost"
  }
];

const successStories = [
  {
    name: "Rajesh & Family",
    country: "Canada",
    program: "Express Entry",
    testimonial: "Orvanta made our Canadian PR dream come true! Their expert guidance through Express Entry was invaluable.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=400&fit=crop"
  },
  {
    name: "Priya Sharma",
    country: "Australia",
    program: "Skilled Migration",
    testimonial: "Professional service from start to finish. Got my Australian PR in 10 months with their help!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
  },
  {
    name: "Amit Patel",
    country: "USA",
    program: "EB-2 Green Card",
    testimonial: "Their expertise in US immigration law helped me navigate the complex Green Card process successfully.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
  }
];

const faqs = [
  {
    question: "What is the difference between PR and citizenship?",
    answer: "PR (Permanent Residence) allows you to live and work indefinitely but you remain a citizen of your home country. Citizenship grants you full rights including voting and a passport of that country. PR is typically a step towards citizenship."
  },
  {
    question: "How long does the PR process take?",
    answer: "Processing times vary by country and program: Canada Express Entry (6-12 months), Australia Skilled Migration (8-12 months), USA Green Card (1-3 years), UK ILR (after 5 years residence). We provide realistic timelines during consultation."
  },
  {
    question: "Can I include my family in my PR application?",
    answer: "Yes, most PR programs allow you to include your spouse and dependent children. They will receive PR status along with you. Additional documentation and fees apply for dependents."
  },
  {
    question: "What happens if my PR application is rejected?",
    answer: "We analyze rejection reasons and advise on next steps: reapplication with stronger profile, appeal process (if available), or alternative immigration pathways. Our high success rate minimizes rejection risks."
  },
  {
    question: "Do I need a job offer for PR?",
    answer: "It depends on the program. Some pathways require job offers (employer-sponsored), while others don't (points-based systems like Express Entry or Australian Skilled Migration). We identify the best pathway for your situation."
  }
];

const PRServices = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&h=1080&fit=crop" 
            alt="PR Services" 
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
              Permanent Residency <span className="text-accent">Services</span>
            </motion.h1>
            <motion.p 
              variants={fadeUp} 
              custom={1} 
              className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8"
            >
              Your pathway to permanent residency in your dream country. Expert guidance for UK, Hong Kong, and India with comprehensive support throughout your journey.
            </motion.p>
            <motion.div variants={fadeUp} custom={2}>
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-accent to-amber-500 text-accent-foreground hover:from-accent/90 hover:to-amber-500/90">
                  Start Your PR Journey <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 1: PR Programs */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Permanent Residency Programs
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Achieve permanent residency in UK, Hong Kong, and India
            </p>
          </div>

          <div className="space-y-12">
            {prPrograms.map((program, i) => (
              <motion.div
                key={program.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-2xl overflow-hidden card-elevated border border-border group hover:shadow-2xl transition-all duration-300"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-80 md:h-auto overflow-hidden">
                    <img 
                      src={program.image} 
                      alt={program.country}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <p className="text-accent font-semibold mb-2">{program.country}</p>
                      <h3 className="font-heading font-bold text-3xl text-white">
                        {program.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                      {program.description}
                    </p>
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <CheckCircle size={20} className="text-secondary" />
                        Key Features:
                      </h4>
                      <ul className="grid grid-cols-1 gap-3">
                        {program.features.map((feature, idx) => (
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
                        <p className="text-secondary font-bold">{program.processing}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-1">Eligibility</p>
                        <p className="text-sm text-muted-foreground">{program.eligibility}</p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <h4 className="font-semibold text-foreground mb-3">Benefits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.benefits.map((benefit, idx) => (
                          <span key={idx} className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
                            {benefit}
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

      {/* Section 2: Benefits of PR */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Benefits of Permanent Residency
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Why thousands choose PR as their immigration pathway
            </p>
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

      {/* Section 3: Process Timeline */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              PR Application Timeline
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Step-by-step journey to your permanent residency
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {processTimeline.map((phase, i) => (
              <motion.div
                key={phase.phase}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {i < processTimeline.length - 1 && (
                  <div className="absolute left-[15px] top-8 bottom-0 w-0.5 bg-secondary/30" />
                )}
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white font-bold">
                  {i + 1}
                </div>
                <div className="bg-card rounded-xl p-6 card-elevated border border-border">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-heading font-bold text-xl text-foreground">
                      {phase.phase}
                    </h3>
                    <span className="text-sm font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                      {phase.duration}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">{phase.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {phase.tasks.map((task, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle size={14} className="text-secondary shrink-0" />
                        <span className="text-sm text-muted-foreground">{task}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Eligibility Criteria */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Eligibility Criteria
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Key factors assessed in PR applications
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {eligibilityCriteria.map((criteria, i) => (
              <motion.div
                key={criteria.category}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-xl p-6 card-elevated border border-border"
              >
                <h3 className="font-heading font-bold text-lg text-foreground mb-3">
                  {criteria.category}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  <span className="font-semibold text-foreground">Requirement:</span> {criteria.requirement}
                </p>
                <p className="text-sm text-secondary">
                  <span className="font-semibold">Points:</span> {criteria.points}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Success Stories */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Success Stories
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real people, real success with our PR services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, i) => (
              <motion.div
                key={story.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-xl p-6 card-elevated border border-border"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-heading font-bold text-foreground">{story.name}</h3>
                    <p className="text-sm text-muted-foreground">{story.country} • {story.program}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{story.testimonial}"</p>
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
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-lg">
                Common questions about PR applications
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
              Ready to Start Your PR Application?
            </motion.h2>
            <motion.p 
              variants={fadeUp} 
              custom={1} 
              className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg"
            >
              Get a free eligibility assessment and personalized PR strategy from our immigration experts.
            </motion.p>
            <motion.div variants={fadeUp} custom={2} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-accent to-amber-500 text-accent-foreground hover:from-accent/90 hover:to-amber-500/90">
                  <Phone className="mr-2" size={20} />
                  Book Free Assessment
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

export default PRServices;
