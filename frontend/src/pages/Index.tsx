import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, Zap, TrendingUp, Heart, Star, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { FaGraduationCap, FaBriefcase, FaPlane, FaPassport, FaUserTie, FaGlobe } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const services = [
  { 
    icon: FaPlane, 
    title: "Immigration Services", 
    desc: "Visa services, PR applications, work permits, and study abroad programs for UK, Hong Kong, and India.",
    link: "/services/immigration/visa"
  },
  { 
    icon: FaBriefcase, 
    title: "Investment Services", 
    desc: "Real estate investments, stock market guidance, tax planning, and NRI investment solutions.",
    link: "/services/investments/real-estate"
  },
  { 
    icon: FaUserTie, 
    title: "Consultation Services", 
    desc: "Global market guidance, business expansion support, and strategic growth planning.",
    link: "/services/consultation/global-market"
  },
  { 
    icon: FaGraduationCap, 
    title: "Legal Services", 
    desc: "Legal documentation, risk management, and dispute prevention for international business.",
    link: "/services/legal/documentation"
  },
];

const countries = [
  { 
    name: "United Kingdom", 
    desc: "World-class education and career opportunities.",
    details: ["Top-ranked universities like Oxford & Cambridge", "Post-study work visa up to 2 years", "Diverse multicultural environment", "Strong job market across all sectors", "Gateway to Europe and global careers"],
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop",
    gradient: "from-blue-500/30 via-indigo-500/30 to-purple-500/30"
  },
  { 
    name: "Canada", 
    desc: "Immigration-friendly policies and high quality of life.",
    details: ["Express Entry & PNP immigration pathways", "Free healthcare and social benefits for PR", "One of the safest countries in the world", "High demand for skilled workers", "Clear pathway to permanent residency"],
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=400&h=300&fit=crop",
    gradient: "from-red-500/30 via-rose-500/30 to-pink-500/30"
  },
  { 
    name: "Australia", 
    desc: "Excellent study and skilled worker programs.",
    details: ["World-class universities and research institutes", "Skilled Migration & Graduate visa options", "High average salary and living standards", "Beautiful climate and outdoor lifestyle", "Strong demand in healthcare, IT & engineering"],
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400&h=300&fit=crop",
    gradient: "from-blue-400/30 via-cyan-500/30 to-teal-500/30"
  },
  { 
    name: "Germany", 
    desc: "Tuition-free education and strong economy.",
    details: ["No tuition fees at public universities", "EU Blue Card for skilled professionals", "Largest economy in Europe", "High quality of life and work-life balance", "Opportunity to settle permanently after 5 years"],
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=300&fit=crop",
    gradient: "from-amber-500/30 via-orange-500/30 to-red-500/30"
  },
  { 
    name: "UAE", 
    desc: "Thriving job market and business opportunities.",
    details: ["Tax-free income for professionals", "Golden Visa for investors & skilled talent", "Booming sectors: tech, finance & real estate", "World-class infrastructure and lifestyle", "Strategic hub connecting East and West"],
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop",
    gradient: "from-emerald-500/30 via-green-500/30 to-teal-600/30"
  },
];

const features = [
  { icon: Users, title: "Experienced Consultants", desc: "Over 10 years of immigration expertise." },
  { icon: Zap, title: "Fast Processing", desc: "Streamlined procedures for quick results." },
  { icon: TrendingUp, title: "High Success Rate", desc: "98% visa approval rate across all categories." },
  { icon: Heart, title: "Personalized Guidance", desc: "Tailored solutions for every client." },
];

const testimonials = [
  { 
    name: "Sarah Mitchell", 
    role: "Study Visa – UK", 
    text: "Orvanta made my dream of studying in London a reality. Their team was incredibly supportive throughout.",
    image: "https://i.pravatar.cc/150?img=5"
  },
  { 
    name: "Ahmed Hassan", 
    role: "Work Visa – Canada", 
    text: "Professional, efficient, and genuinely caring. Got my work permit approved in record time!",
    image: "https://i.pravatar.cc/150?img=12"
  },
  { 
    name: "Priya Sharma", 
    role: "Immigrant Visa – Australia", 
    text: "Seamless process from start to finish. I highly recommend Orvanta Advisory to anyone.",
    image: "https://i.pravatar.cc/150?img=9"
  },
  { 
    name: "Michael Chen", 
    role: "Study Visa – Germany", 
    text: "The team guided me through every step. Their expertise made the complex process so simple and stress-free.",
    image: "https://i.pravatar.cc/150?img=33"
  },
  { 
    name: "Fatima Al-Rashid", 
    role: "Work Visa – UAE", 
    text: "Outstanding service! They handled everything professionally and kept me informed throughout the entire process.",
    image: "https://i.pravatar.cc/150?img=20"
  },
  { 
    name: "David Thompson", 
    role: "PR Application – Canada", 
    text: "Thanks to Orvanta, my family and I are now permanent residents. Forever grateful for their dedication!",
    image: "https://i.pravatar.cc/150?img=15"
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[75vh] xl:min-h-[65vh] 2xl:min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Global immigration" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              variants={fadeUp}
              custom={0}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground leading-tight mb-6"
            >
              Your Global Business Partner for{" "}
              <span className="text-gradient">Immigration & Investment Solutions</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-3xl mx-auto"
            >
              Expert B2B services for immigration, investments, consultation, and legal support across UK, Hong Kong, and India. We help businesses expand globally with personalized guidance.
            </motion.p>
            <motion.div variants={fadeUp} custom={2} className="flex flex-wrap gap-4 justify-center">
              <Link to="/sign-up">
                <Button size="lg" className="bg-gradient-to-r from-accent to-amber-500 text-accent-foreground hover:from-accent/90 hover:to-amber-500/90 font-semibold text-base xl:text-lg px-8 xl:px-10 shadow-lg hover:shadow-xl transition-all duration-200 h-12 xl:h-14">
                  Get Started
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-white/60 bg-white/10 text-white hover:bg-white hover:text-primary hover:border-white font-semibold text-base xl:text-lg px-8 xl:px-10 backdrop-blur-md transition-all duration-200 h-12 xl:h-14 shadow-lg hover:shadow-xl">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Comprehensive immigration solutions tailored to your needs.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, i) => (
              <Link key={s.title} to={s.link} className="h-full">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                  className="bg-card rounded-xl p-8 card-elevated border border-border text-center cursor-pointer group h-full min-h-[280px] flex flex-col items-center justify-start hover:shadow-2xl transition-all duration-300"
                >
                  <div className="h-14 w-14 rounded-xl bg-secondary/10 group-hover:bg-secondary/20 flex items-center justify-center mb-5 transition-all duration-200">
                    <s.icon size={28} className="text-secondary group-hover:scale-110 transition-transform duration-200" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3 text-foreground group-hover:text-secondary transition-colors">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Countries */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Popular Destinations</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">We help you settle in some of the best countries worldwide.</p>
          </div>
          
          {/* First row - 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {countries.slice(0, 3).map((c, i) => (
              <motion.div
                key={c.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-2xl overflow-hidden card-elevated border border-border group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={c.image} 
                    alt={c.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.gradient} group-hover:opacity-60 transition-opacity duration-300`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-lg mb-1 text-foreground group-hover:text-secondary transition-colors">{c.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{c.desc}</p>
                  <ul className="space-y-1.5">
                    {c.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-secondary font-bold mt-0.5">✓</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Second row - 2 cards centered on desktop, full width on mobile */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full lg:w-auto">
            {countries.slice(3, 5).map((c, i) => (
              <motion.div
                key={c.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i + 3}
                className="bg-card rounded-2xl overflow-hidden card-elevated border border-border group cursor-pointer lg:w-[calc((100vw-8rem)/3)] lg:max-w-[400px]"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={c.image} 
                    alt={c.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.gradient} group-hover:opacity-60 transition-opacity duration-300`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-lg mb-1 text-foreground group-hover:text-secondary transition-colors">{c.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{c.desc}</p>
                  <ul className="space-y-1.5">
                    {c.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-secondary font-bold mt-0.5">✓</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Why Choose Orvanta Advisory?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">We combine expertise with genuine care for your success.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-2xl p-8 card-elevated border border-border text-center group cursor-pointer"
              >
                <div className="h-20 w-20 rounded-2xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center mx-auto mb-6 transition-all duration-200">
                  <f.icon size={36} className="text-accent group-hover:scale-110 transition-transform duration-200" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3 text-foreground group-hover:text-secondary transition-colors">{f.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Real stories from our satisfied clients</p>
          </div>
          <div className="max-w-6xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {testimonials.map((t, i) => (
                  <CarouselItem key={t.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      custom={i}
                      className="bg-card rounded-2xl p-8 card-elevated border border-border h-full flex flex-col"
                    >
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} size={18} className="fill-accent text-accent" />
                        ))}
                      </div>
                      <p className="text-muted-foreground text-base leading-relaxed mb-6 italic flex-grow">"{t.text}"</p>
                      <div className="flex items-center gap-4 mt-auto">
                        <img 
                          src={t.image} 
                          alt={t.name}
                          className="h-14 w-14 rounded-full object-cover border-2 border-secondary/20"
                        />
                        <div>
                          <p className="font-heading font-semibold text-foreground text-lg">{t.name}</p>
                          <p className="text-muted-foreground text-sm">{t.role}</p>
                        </div>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-4 lg:-left-12 h-10 w-10 lg:h-12 lg:w-12 border-2 hover:bg-secondary hover:text-white hover:border-secondary" />
              <CarouselNext className="-right-4 lg:-right-12 h-10 w-10 lg:h-12 lg:w-12 border-2 hover:bg-secondary hover:text-white hover:border-secondary" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Our Global Offices</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Visit us at one of our offices around the world.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                country: "United Kingdom",
                flag: "🇬🇧",
                address: "Unit 1603, 16/F, The L.Plaza, 367-375 Queens Road Central, Sheung Wan, Hong Kong",
                phone: "+44 20 1234 5678",
                email: "uk@orvanta.com",
                image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=300&fit=crop",
                link: "/locations/uk"
              },
              {
                country: "India",
                flag: "🇮🇳",
                address: "SCO 29, First Floor, New Sunny Enclave, Sector 125, Mohali - 140301, Punjab",
                phone: "+91 123 456 7890",
                email: "india@orvanta.com",
                image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&h=300&fit=crop",
                link: "/locations/india"
              },
              {
                country: "Hong Kong",
                flag: "🇭🇰",
                address: "Unit 1603, 16/F, The L.Plaza, 367-375 Queens Road Central, Sheung Wan, Hong Kong",
                phone: "+852 1234 5678",
                email: "hongkong@orvanta.com",
                image: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=600&h=300&fit=crop",
                link: "/locations/hong-kong"
              },
            ].map((office, i) => (
              <Link key={office.country} to={office.link}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                  className="bg-card rounded-2xl overflow-hidden card-elevated border border-border hover:shadow-2xl transition-all duration-300 cursor-pointer group h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={office.image}
                      alt={office.country}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="text-4xl mb-2">{office.flag}</div>
                      <span className="text-white font-heading font-bold text-2xl drop-shadow-lg">{office.country}</span>
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <FaGlobe size={16} className="text-secondary" />
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{office.address}</p>
                    </div>
                    <div className="pt-3 border-t border-border space-y-1">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">Phone:</span> {office.phone}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">Email:</span> {office.email}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 hero-bg">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Ready to Expand Your Business Globally?
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
              Partner with us today and let our experts guide you through immigration, investment, and business expansion opportunities.
            </motion.p>
            <motion.div variants={fadeUp} custom={2}>
              <Link to="/sign-up">
                <Button size="lg" className="bg-gradient-to-r from-accent to-amber-500 text-accent-foreground hover:from-accent/90 hover:to-amber-500/90 font-semibold text-base xl:text-lg px-10 xl:px-12 shadow-xl hover:shadow-2xl transition-all duration-200 h-12 xl:h-14">
                  Get Started <ArrowRight size={20} className="ml-2" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
