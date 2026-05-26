import { motion } from "framer-motion";
import { CheckCircle, Clock, Shield, TrendingUp, HeartHandshake } from "lucide-react";
import { FaGraduationCap, FaBriefcase, FaPlane, FaFileAlt, FaUsers, FaGlobe, FaTrophy, FaUserTie } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const mainServices = [
  {
    id: "study-visa",
    icon: FaGraduationCap,
    title: "Study Visa Services",
    desc: "Complete guidance for international education",
    features: [
      "University selection and application",
      "Document preparation and verification",
      "Visa interview preparation",
      "Scholarship assistance",
      "Pre-departure orientation",
      "Post-arrival support"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "work-visa",
    icon: FaBriefcase,
    title: "Work Visa Services",
    desc: "Professional immigration for career growth",
    features: [
      "Job search assistance",
      "Employer sponsorship guidance",
      "Work permit processing",
      "Skills assessment support",
      "Resume and profile optimization",
      "Settlement services"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "immigrant-visa",
    icon: FaPlane,
    title: "Immigrant Visa Services",
    desc: "Permanent residency and immigration solutions",
    features: [
      "Immigration pathway assessment",
      "Permanent residency applications",
      "Family sponsorship programs",
      "Document preparation and verification",
      "Settlement and integration support",
      "Post-arrival assistance"
    ],
    color: "from-orange-500 to-red-500"
  }
];

const additionalServices = [
  { 
    id: "business-consultation",
    title: "Business Consultation", 
    desc: "Expert guidance for starting and growing your business internationally. We help you navigate market entry, business setup, and expansion strategies. Our consultants provide comprehensive support in business planning, market research, and operational optimization to ensure your success in global markets.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop"
  },
  { 
    id: "business-investment",
    title: "Business Investment", 
    desc: "Explore lucrative investment opportunities in global markets with our expert guidance. Our team provides detailed market analysis, risk assessment, and investment planning services. We help you identify profitable ventures, structure investments, and maximize returns while ensuring compliance with international regulations.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
  },
  { 
    id: "stock-investment",
    title: "Stock Investment", 
    desc: "Professional stock market advisory and portfolio management services tailored to your financial goals. Get expert insights on market trends, investment strategies, and risk management. Our financial analysts help you build a diversified portfolio and make informed decisions for better returns and long-term wealth creation.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop"
  },
  { 
    id: "financial-advisors",
    title: "Financial Advisors", 
    desc: "Comprehensive financial planning and wealth management solutions for individuals and businesses. From retirement planning to tax optimization and asset allocation, our experienced advisors help you achieve financial security. We provide personalized strategies to grow, protect, and preserve your wealth for future generations.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop"
  },
  { 
    id: "legal",
    title: "Legal", 
    desc: "Professional legal consultation for immigration, business contracts, and documentation needs. Our legal team provides expert support for visa applications, business agreements, and compliance matters. We ensure all your legal requirements are met with accuracy and efficiency. Please note: Legal services are not available for Canada.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop"
  },
  { 
    id: "education-career",
    title: "Education Career Online Course", 
    desc: "Access premium online courses and career development programs designed for global professionals. Enhance your skills with industry-recognized certifications, language training, and specialized courses. Our educational programs help you stay competitive in the international job market and advance your career with confidence.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop"
  },
  { 
    id: "document-translation",
    title: "Document Translation Services", 
    desc: "Professional translation and certification of documents for visa and immigration purposes. Our certified translators ensure accuracy and compliance with embassy requirements. We handle birth certificates, academic transcripts, employment letters, and all official documents needed for your application process.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop"
  }
];

const processSteps = [
  { icon: FaUsers, title: "Free Consultation", desc: "Discuss your goals with our experts" },
  { icon: FaFileAlt, title: "Documentation", desc: "We prepare all required documents" },
  { icon: CheckCircle, title: "Application", desc: "Submit your application with confidence" },
  { icon: Shield, title: "Follow-up", desc: "Track progress until approval" }
];

const whyChoose = [
  { icon: Clock, title: "Fast Processing", desc: "Quick turnaround times" },
  { icon: Shield, title: "100% Legal", desc: "Fully compliant services" },
  { icon: TrendingUp, title: "98% Success Rate", desc: "Proven track record" },
  { icon: HeartHandshake, title: "Personalized Care", desc: "Dedicated support team" }
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&h=1080&fit=crop" 
            alt="Immigration Services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl mx-auto text-center">
            <motion.h1 
              variants={fadeUp} 
              custom={0} 
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground mb-6"
            >
              Our Immigration <span className="text-accent">Services</span>
            </motion.h1>
            <motion.p 
              variants={fadeUp} 
              custom={1} 
              className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed"
            >
              Comprehensive visa and immigration solutions tailored to your unique needs. From study to work to immigration, we've got you covered.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Core Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Expert guidance for every stage of your immigration journey
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {mainServices.map((service, i) => (
              <motion.div
                key={service.title}
                id={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-2xl p-8 card-elevated border border-border"
              >
                <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="font-heading font-bold text-2xl mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-base">
                  {service.desc}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-secondary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section id="additional-services" className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Additional Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Complete immigration support beyond visa applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, i) => (
              <motion.div
                key={service.title}
                id={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-xl overflow-hidden card-elevated border border-border group hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Our Simple Process
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Four easy steps to your visa approval
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="relative text-center"
              >
                <div className="relative inline-block mb-6">
                  <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto shadow-xl">
                    <step.icon size={36} className="text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-accent flex items-center justify-center font-bold text-accent-foreground text-sm shadow-lg">
                    {i + 1}
                  </div>
                </div>
                <h3 className="font-heading font-bold text-xl mb-2 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Why Choose Orvanta Advisory?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-xl p-6 card-elevated border border-border text-center"
              >
                <div className="h-14 w-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={28} className="text-secondary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 hero-bg">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 
              variants={fadeUp} 
              custom={0} 
              className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6"
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p 
              variants={fadeUp} 
              custom={1} 
              className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg"
            >
              Book a free consultation with our immigration experts and take the first step towards your dream destination.
            </motion.p>
            <motion.div variants={fadeUp} custom={2}>
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-accent to-amber-500 text-accent-foreground hover:from-accent/90 hover:to-amber-500/90 font-semibold text-base xl:text-lg px-10 xl:px-12 shadow-xl hover:shadow-2xl transition-all duration-200 h-12 xl:h-14">
                  Book Free Consultation
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
