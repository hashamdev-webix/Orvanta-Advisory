import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Target, Eye, Shield, Award, CheckCircle, MapPin } from "lucide-react";
import Layout from "@/components/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const values = [
  { icon: Shield, title: "Integrity", desc: "Transparent and honest guidance at every step." },
  { icon: Award, title: "Excellence", desc: "Committed to the highest standards of service." },
  { icon: CheckCircle, title: "Reliability", desc: "Consistent results you can count on." },
];

const teamMembers = [
  {
    name: "John Anderson",
    role: "CEO & Founder",
    image: "https://i.pravatar.cc/300?img=12",
    description: "15+ years of experience in global immigration and business consulting"
  },
  {
    name: "Sarah Chen",
    role: "Head of Immigration Services",
    image: "https://i.pravatar.cc/300?img=5",
    description: "Expert in visa processing and immigration law across UK, HK, and India"
  },
  {
    name: "Rajesh Kumar",
    role: "Investment Advisor",
    image: "https://i.pravatar.cc/300?img=33",
    description: "Specializes in real estate and stock market investments"
  },
  {
    name: "Emily Watson",
    role: "Legal Consultant",
    image: "https://i.pravatar.cc/300?img=9",
    description: "International business law and compliance expert"
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=1080&fit=crop" 
            alt="About Orvanta Advisory" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div initial="hidden" animate="visible" className="max-w-2xl mx-auto text-center">
            <motion.h1 variants={fadeUp} custom={0} className="text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground mb-6">
              About Orvanta Advisory
            </motion.h1>
            <motion.p variants={fadeUp} custom={1} className="text-lg text-primary-foreground/80 leading-relaxed">
              A trusted name in immigration consultancy, helping thousands achieve their global dreams since 2014.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-heading font-bold text-foreground mb-6">
                Who We Are
              </motion.h2>
              <motion.p variants={fadeUp} custom={1} className="text-muted-foreground leading-relaxed mb-4">
                Orvanta Advisory is a leading immigration and visa consultancy firm dedicated to helping individuals and families navigate the complex world of international migration. With over a decade of experience, we've successfully guided thousands of clients to their dream destinations.
              </motion.p>
              <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed">
                Our team of certified consultants specializes in study visas, work permits, immigrant visas, and permanent residency applications for countries across the globe. We pride ourselves on our personalized approach, ensuring every client receives tailored guidance.
              </motion.p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { num: "10+", label: "Years Experience" },
                { num: "5000+", label: "Successful Cases" },
                { num: "98%", label: "Success Rate" },
                { num: "25+", label: "Countries Covered" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  custom={i}
                  className="bg-card rounded-xl p-6 card-elevated border border-border text-center"
                >
                  <p className="text-3xl font-heading font-bold text-secondary mb-1">{stat.num}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="bg-card rounded-xl p-10 card-elevated border border-border"
            >
              <div className="h-14 w-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-5">
                <Target size={28} className="text-secondary" />
              </div>
              <h3 className="font-heading font-bold text-2xl mb-4 text-foreground">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To simplify immigration by providing expert, transparent, and personalized consultancy services that empower individuals to achieve their international goals with confidence and ease.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="bg-card rounded-xl p-10 card-elevated border border-border"
            >
              <div className="h-14 w-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <Eye size={28} className="text-accent" />
              </div>
              <h3 className="font-heading font-bold text-2xl mb-4 text-foreground">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted immigration consultancy globally, known for excellence, integrity, and a genuine commitment to every client's success and well-being.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Why Clients Trust Us</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="text-center"
              >
                <div className="h-16 w-16 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-5">
                  <v.icon size={30} className="text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2 text-foreground">{v.title}</h3>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Meet Our Expert Team</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Dedicated professionals committed to your success</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-2xl overflow-hidden card-elevated border border-border group cursor-pointer hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-heading font-bold text-xl text-foreground mb-1">{member.name}</h3>
                  <p className="text-secondary font-semibold text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
