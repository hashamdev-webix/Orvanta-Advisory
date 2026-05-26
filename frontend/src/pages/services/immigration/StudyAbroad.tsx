import { motion } from "framer-motion";
import { CheckCircle, GraduationCap, BookOpen, Award, Globe2, Users, TrendingUp, ArrowRight, Phone, Mail } from "lucide-react";
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

const studyDestinations = [
  {
    title: "Study in UK",
    country: "United Kingdom",
    description: "World-renowned universities with rich academic heritage and excellent research opportunities",
    features: ["Top-ranked universities", "Post-study work visa (2 years)", "Scholarship opportunities", "Diverse course options", "Cultural experience", "English language environment"],
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop",
    topUniversities: ["Oxford", "Cambridge", "Imperial College", "UCL"],
    processing: "3-4 weeks"
  },
  {
    title: "Study in Hong Kong",
    country: "Hong Kong SAR",
    description: "Gateway to Asia with world-class education and international exposure in a vibrant city",
    features: ["International universities", "English-taught programs", "Work opportunities", "Strategic location", "Multicultural environment", "Quality education"],
    image: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=800&h=600&fit=crop",
    topUniversities: ["HKU", "HKUST", "CUHK", "CityU"],
    processing: "4-6 weeks"
  },
  {
    title: "Study in India",
    country: "India",
    description: "Affordable quality education with diverse programs and rich cultural heritage",
    features: ["Affordable tuition fees", "Diverse programs", "Cultural diversity", "Growing economy", "English-medium courses", "Research opportunities"],
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop",
    topUniversities: ["IITs", "IIMs", "Delhi University", "Mumbai University"],
    processing: "2-3 weeks"
  }
];

const services = [
  {
    icon: BookOpen,
    title: "University Selection",
    description: "Expert guidance in choosing the right university and program based on your goals and profile"
  },
  {
    icon: GraduationCap,
    title: "Application Support",
    description: "Complete assistance with university applications, essays, and documentation"
  },
  {
    icon: Award,
    title: "Scholarship Guidance",
    description: "Help you find and apply for scholarships and financial aid opportunities"
  },
  {
    icon: Users,
    title: "Visa Assistance",
    description: "End-to-end student visa application support with high success rate"
  },
  {
    icon: Globe2,
    title: "Pre-Departure Support",
    description: "Comprehensive guidance on accommodation, travel, and settling abroad"
  },
  {
    icon: TrendingUp,
    title: "Career Counseling",
    description: "Post-study work opportunities and career planning assistance"
  }
];

const benefits = [
  {
    title: "World-Class Education",
    description: "Access to top-ranked universities and cutting-edge research facilities",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop"
  },
  {
    title: "Global Career Opportunities",
    description: "International degree opens doors to global job markets and better prospects",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop"
  },
  {
    title: "Cultural Experience",
    description: "Immerse yourself in diverse cultures and build international networks",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop"
  },
  {
    title: "Personal Growth",
    description: "Develop independence, confidence, and life skills through international exposure",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=400&fit=crop"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Profile Assessment",
    description: "Evaluate your academic background, goals, and preferences"
  },
  {
    step: "02",
    title: "University Shortlisting",
    description: "Select best-fit universities and programs for your profile"
  },
  {
    step: "03",
    title: "Application Preparation",
    description: "Prepare applications, essays, and required documents"
  },
  {
    step: "04",
    title: "Admission & Visa",
    description: "Secure admission and process student visa successfully"
  }
];

const popularCourses = [
  { name: "Business & Management", icon: "💼", demand: "Very High" },
  { name: "Computer Science & IT", icon: "💻", demand: "Very High" },
  { name: "Engineering", icon: "⚙️", demand: "High" },
  { name: "Medicine & Healthcare", icon: "🏥", demand: "High" },
  { name: "Arts & Humanities", icon: "🎨", demand: "Medium" },
  { name: "Law", icon: "⚖️", demand: "Medium" }
];

const faqs = [
  {
    question: "When should I start my study abroad application?",
    answer: "Ideally, start 12-18 months before your intended start date. This gives you enough time for university research, test preparation (IELTS/TOEFL), applications, and visa processing."
  },
  {
    question: "Do I need IELTS/TOEFL for studying abroad?",
    answer: "Most English-speaking countries require English proficiency tests like IELTS or TOEFL. However, some universities may waive this requirement if you've studied in English medium or meet specific criteria."
  },
  {
    question: "Can I work while studying?",
    answer: "Yes, most countries allow part-time work during studies. UK allows 20 hours/week during term time, Hong Kong allows part-time work with restrictions, and India allows limited work for international students."
  },
  {
    question: "What are the scholarship opportunities?",
    answer: "Various scholarships are available including university scholarships, government scholarships (like Chevening for UK), and private scholarships. We help you identify and apply for suitable scholarships."
  }
];

const StudyAbroad = () => {
  return (
    <Layout>
      {/* Hero Section with Background Image */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=1080&fit=crop" 
            alt="Study Abroad" 
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
              Study <span className="text-accent">Abroad</span>
            </motion.h1>
            <motion.p 
              variants={fadeUp} 
              custom={1} 
              className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8"
            >
              Your gateway to world-class international education. Expert guidance for studying in UK, Hong Kong, and India with comprehensive support from application to arrival.
            </motion.p>
            <motion.div variants={fadeUp} custom={2}>
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-accent to-amber-500 text-accent-foreground hover:from-accent/90 hover:to-amber-500/90">
                  Start Your Journey <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Study Destinations */}
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
              Top Study Destinations
            </motion.h2>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Explore world-class education opportunities in UK, Hong Kong, and India
            </motion.p>
          </div>

          <div className="space-y-12">
            {studyDestinations.map((dest, i) => (
              <motion.div
                key={dest.title}
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
                      src={dest.image} 
                      alt={dest.country}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <p className="text-accent font-semibold mb-2">{dest.country}</p>
                      <h3 className="font-heading font-bold text-3xl text-white">
                        {dest.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                      {dest.description}
                    </p>
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <CheckCircle size={20} className="text-secondary" />
                        Why Study Here:
                      </h4>
                      <ul className="grid grid-cols-1 gap-3">
                        {dest.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle size={16} className="text-secondary shrink-0 mt-1" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-2">Top Universities</p>
                        <div className="flex flex-wrap gap-2">
                          {dest.topUniversities.map((uni, idx) => (
                            <span key={idx} className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded">
                              {uni}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-1">Visa Processing</p>
                        <p className="text-secondary font-bold">{dest.processing}</p>
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
              Our Study Abroad Services
            </motion.h2>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              End-to-end support for your international education journey
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
              Benefits of Studying Abroad
            </motion.h2>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Transform your future with international education
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

      {/* Section 4: Application Process */}
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
              Application Process
            </motion.h2>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Simple 4-step process to your dream university
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

      {/* Section 5: Popular Courses */}
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
              Popular Courses
            </motion.h2>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Most sought-after programs by international students
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {popularCourses.map((course, i) => (
              <motion.div
                key={course.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-xl p-6 card-elevated border border-border flex items-center justify-between hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{course.icon}</div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-foreground">
                      {course.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">Demand: {course.demand}</p>
                  </div>
                </div>
                <CheckCircle className="text-secondary" size={24} />
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
                Common questions about studying abroad
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
              Ready to Start Your Study Abroad Journey?
            </motion.h2>
            <motion.p 
              variants={fadeUp} 
              custom={1} 
              className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg"
            >
              Get expert guidance from our education consultants and make your dream of studying abroad a reality.
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

export default StudyAbroad;
