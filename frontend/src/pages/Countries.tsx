import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const countries = [
  { 
    flag: "🇬🇧", 
    name: "United Kingdom", 
    desc: "Study at world-renowned universities like Oxford, Cambridge, and Imperial College. Work visa options through the Skilled Worker route.",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop",
    buttonText: "Explore UK Visas",
    gradient: "from-blue-600/40 to-red-600/40"
  },
  { 
    flag: "🇨🇦", 
    name: "Canada", 
    desc: "Immigration-friendly policies, Express Entry, and Post-Graduation Work Permits. One of the best countries for permanent residency.",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=600&h=400&fit=crop",
    buttonText: "Discover Canada",
    gradient: "from-red-600/40 to-red-700/40"
  },
  { 
    flag: "🇦🇺", 
    name: "Australia", 
    desc: "Top-tier education system, skilled migration programs, and excellent quality of life. Student and skilled worker visas available.",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=600&h=400&fit=crop",
    buttonText: "Start Your Journey",
    gradient: "from-blue-500/40 to-yellow-500/40"
  },
  { 
    flag: "🇩🇪", 
    name: "Germany", 
    desc: "Tuition-free public universities, strong STEM programs, and Europe's largest economy. Job Seeker and Blue Card visas available.",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&h=400&fit=crop",
    buttonText: "Apply for Germany",
    gradient: "from-yellow-500/40 to-red-600/40"
  },
  { 
    flag: "🇦🇪", 
    name: "UAE", 
    desc: "Thriving job market in Dubai and Abu Dhabi. Work visas, investor visas, and golden visa programs for professionals.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop",
    buttonText: "Explore UAE Options",
    gradient: "from-green-600/40 to-red-600/40"
  },
  { 
    flag: "🇪🇺", 
    name: "Schengen Europe", 
    desc: "Access 27 European countries with a single Schengen visa. Ideal for tourism, business, and short-term stays across Europe.",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&h=400&fit=crop",
    buttonText: "Get Schengen Visa",
    gradient: "from-blue-700/40 to-yellow-500/40"
  },
];

const Countries = () => {
  return (
    <Layout>
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&h=1080&fit=crop" 
            alt="Visa Destinations" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div initial="hidden" animate="visible" className="max-w-2xl mx-auto text-center">
            <motion.h1 variants={fadeUp} custom={0} className="text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground mb-6">
              Visa Destinations
            </motion.h1>
            <motion.p variants={fadeUp} custom={1} className="text-lg text-primary-foreground/80 leading-relaxed">
              Explore the countries we serve and find the right visa pathway for your goals.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
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
                className="bg-card rounded-2xl overflow-hidden card-elevated border border-border flex flex-col group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={c.image} 
                    alt={c.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.gradient}`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <span className="absolute top-4 right-4 text-5xl drop-shadow-2xl filter brightness-110">{c.flag}</span>
                  <h3 className="absolute bottom-4 left-4 font-heading font-bold text-2xl text-white drop-shadow-lg">{c.name}</h3>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <p className="text-muted-foreground text-base leading-relaxed mb-8 flex-1">{c.desc}</p>
                  <Link to="/contact">
                    <Button className="w-full group bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-lg hover:shadow-xl transition-all duration-200 h-12 text-base">
                      {c.buttonText} <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
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
                className="bg-card rounded-2xl overflow-hidden card-elevated border border-border flex flex-col group lg:w-[calc((100vw-8rem)/3)] lg:max-w-[400px]"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={c.image} 
                    alt={c.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.gradient}`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <span className="absolute top-4 right-4 text-5xl drop-shadow-2xl filter brightness-110">{c.flag}</span>
                  <h3 className="absolute bottom-4 left-4 font-heading font-bold text-2xl text-white drop-shadow-lg">{c.name}</h3>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <p className="text-muted-foreground text-base leading-relaxed mb-8 flex-1">{c.desc}</p>
                  <Link to="/contact">
                    <Button className="w-full group bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-lg hover:shadow-xl transition-all duration-200 h-12 text-base">
                      {c.buttonText} <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Countries;
