import { motion } from "framer-motion";
import { CheckCircle, TrendingUp, PieChart, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const services = [
  {
    title: "Portfolio Management",
    description: "Professional management of your investment portfolio",
    features: ["Risk assessment", "Asset allocation", "Regular rebalancing", "Performance tracking"]
  },
  {
    title: "Market Analysis",
    description: "In-depth market research and insights",
    features: ["Technical analysis", "Fundamental research", "Sector trends", "Global markets"]
  },
  {
    title: "Trading Advisory",
    description: "Expert guidance for active traders",
    features: ["Entry/exit strategies", "Risk management", "Market timing", "Trade execution"]
  },
  {
    title: "Wealth Building",
    description: "Long-term wealth creation strategies",
    features: ["Growth stocks", "Dividend investing", "Index funds", "Retirement planning"]
  }
];

const Stocks = () => {
  return (
    <Layout>
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl mx-auto text-center">
            <motion.h1 
              variants={fadeUp} 
              custom={0} 
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground mb-6"
            >
              Stock <span className="text-accent">Investments</span>
            </motion.h1>
            <motion.p 
              variants={fadeUp} 
              custom={1} 
              className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed"
            >
              Grow your wealth with expert stock market guidance
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-xl p-8 card-elevated border border-border"
              >
                <h3 className="font-heading font-bold text-2xl mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
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

          <div className="mt-16 text-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-accent to-amber-500 text-accent-foreground hover:from-accent/90 hover:to-amber-500/90">
                Start Investing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Stocks;
