import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  Globe2,
  Handshake,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45 },
  }),
};

const countries = [
  {
    name: "India",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=720&h=460&fit=crop",
    text: "Immigration, investments, consultation, and legal support for India-related needs.",
    cta: "Explore India",
    link: "/locations/india",
  },
  {
    name: "Canada",
    image:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=720&h=460&fit=crop",
    text: "Immigration, business setup, consultation, and legal support across Canada.",
    cta: "Explore Canada",
    link: "/canada",
  },
  {
    name: "United Kingdom",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=720&h=460&fit=crop",
    text: "Business, immigration, and advisory support tailored for the UK market.",
    cta: "Explore UK",
    link: "/locations/uk",
  },
  {
    name: "Hong Kong",
    image:
      "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=720&h=460&fit=crop",
    text: "Business expansion, investment advisory, and immigration support in Hong Kong.",
    cta: "Explore Hong Kong",
    link: "/locations/hong-kong",
  },
  {
    name: "Belize",
    image:
      "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=720&h=460&fit=crop",
    text: "Residency and investment solutions in a tax-friendly and secure environment.",
    cta: "Explore Belize",
    link: "/locations/belize",
  },
];

const trustFeatures = [
  {
    icon: Lightbulb,
    title: "Expert Guidance",
    text: "Experienced professionals providing end-to-end support.",
  },
  {
    icon: Globe2,
    title: "Global Network",
    text: "Strong presence and partnerships across key countries.",
  },
  {
    icon: Handshake,
    title: "Tailored Solutions",
    text: "Customized strategies designed to meet your unique goals.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Transparency",
    text: "Committed to integrity, clarity, and client success.",
  },
];

const getCardPosition = (index: number, activeIndex: number) => {
  const total = countries.length;
  const rawOffset = (index - activeIndex + total) % total;
  return rawOffset > total / 2 ? rawOffset - total : rawOffset;
};

const Index = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const goToPrevious = () => {
    setActiveIndex(
      (current) => (current - 1 + countries.length) % countries.length,
    );
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % countries.length);
  };

  return (
    <Layout hideFooter>
      <section className="relative overflow-hidden bg-[#F1F5FC]">
        <div className="absolute inset-0 opacity-[0.18]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(14,90,92,0.18),transparent_28%),radial-gradient(circle_at_78%_14%,rgba(242,143,44,0.18),transparent_24%),linear-gradient(120deg,transparent_0_20%,rgba(14,90,92,0.09)_20%_21%,transparent_21%_42%,rgba(242,143,44,0.09)_42%_43%,transparent_43%)]" />
          <div className="absolute left-[8%] top-[12%] h-72 w-72 rounded-full border border-primary/20" />
          <div className="absolute right-[10%] bottom-[8%] h-96 w-96 rounded-full border border-accent/20" />
        </div>
        <p className=" text-xl ml-64 mt-10 leading-8 text-muted-foreground">
          <span>**The Website is still Under Construction.</span>
        </p>
        <div className="container relative mx-auto grid min-h-[620px] max-w-[1500px] items-start gap-8 px-5 pt-4 pb-0 lg:grid-cols-[0.86fr_1.14fr] lg:px-10 lg:pt-6">
          <motion.div initial="hidden" animate="visible" className="max-w-xl">
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="font-heading text-4xl font-extrabold leading-tight text-foreground md:text-5xl lg:text-6xl"
            >
              Choose Your Country
            </motion.h1>
            <motion.div
              variants={fadeUp}
              custom={2}
              className="mt-5 h-1.5 w-20 rounded-full bg-accent"
            />
            <motion.p
              variants={fadeUp}
              custom={3}
              className="mt-7 text-lg leading-8 text-muted-foreground"
            >
              Select your country to explore tailored immigration, investment,
              consultation, and legal support services. Our expert team is here
              to support your global journey.
            </motion.p>
            <motion.div
              variants={fadeUp}
              custom={4}
              className="mt-8 flex gap-4 rounded-lg border border-secondary/15 bg-white/82 p-5 shadow-lg shadow-primary/5 backdrop-blur"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                <Globe2 size={24} />
              </div>
              <p className="text-base leading-7 text-foreground/78">
                Trusted by clients across multiple countries with reliable and
                personalized advisory support.
              </p>
            </motion.div>
          </motion.div>

          <div className="relative">
            <div className="relative mx-auto h-[560px] max-w-[780px] overflow-hidden md:h-[600px]">
              <div className="absolute inset-x-0 top-[82px] h-[420px] [perspective:1100px]">
                {countries.map((country, index) => {
                  const offset = getCardPosition(index, activeIndex);
                  const isVisible = Math.abs(offset) <= 1;
                  const isActive = offset === 0;

                  return (
                    <motion.article
                      key={country.name}
                      className={`absolute left-1/2 top-2 w-[82%] max-w-[330px] -translate-x-1/2 overflow-hidden rounded-lg border border-white/80 bg-[#F1F5FC] shadow-2xl shadow-primary/16 transition-all duration-500 md:w-[330px] ${
                        isVisible
                          ? "pointer-events-auto"
                          : "pointer-events-none"
                      }`}
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: `translateX(calc(-50% + ${offset * 230}px)) translateZ(${isActive ? 72 : -70}px) rotateY(${offset * -22}deg) scale(${isActive ? 1.05 : 0.88})`,
                        zIndex: 20 - Math.abs(offset),
                      }}
                      aria-hidden={!isVisible}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={country.image}
                          alt={`${country.name} landmark`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h2 className="font-heading text-2xl font-bold text-[#001B52]">
                          {country.name}
                        </h2>
                        <div className="mb-4 mt-3 h-1 w-14 rounded-full bg-accent" />
                        <p className="min-h-[88px] text-sm leading-6 text-muted-foreground">
                          {country.text}
                        </p>
                        <Link to={country.link}>
                          <Button className="mt-5 h-11 w-full bg-[#001B52] text-white hover:bg-[#001B52]/90">
                            {country.cta}
                            <ArrowRight size={17} className="ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </motion.article>
                  );
                })}
              </div>

              <div className="absolute inset-x-0  bottom-20 flex items-center justify-center  gap-12">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="h-11 w-11 rounded-full border-secondary/20 bg-white/90 text-secondary shadow-md hover:bg-secondary hover:text-white"
                  onClick={goToPrevious}
                  aria-label="Previous country"
                >
                  <ChevronLeft size={22} />
                </Button>
                <div className="flex items-center gap-2">
                  {countries.map((country, index) => (
                    <button
                      key={country.name}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`h-2.5 rounded-full transition-all ${
                        index === activeIndex
                          ? "w-8 bg-accent"
                          : "w-2.5 bg-secondary/25 hover:bg-secondary/45"
                      }`}
                      aria-label={`Show ${country.name}`}
                    />
                  ))}
                </div>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="h-11 w-11 rounded-full border-secondary/20 bg-white/90 text-secondary shadow-md hover:bg-secondary hover:text-white"
                  onClick={goToNext}
                  aria-label="Next country"
                >
                  <ChevronRight size={22} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F1F5FC] py-0">
        <div className="container mx-auto max-w-[1400px] px-5 lg:px-10">
          <div className="rounded-xl bg-white px-6 py-6 shadow-sm">
            <div className="grid items-center gap-6 lg:grid-cols-[1.1fr_repeat(4,1fr)]">
              <div>
                <h2 className="font-heading text-2xl font-bold leading-tight text-[#001B52]">
                  Why Choose <br /> Orvanta Advisory
                </h2>
                <p className="mt-1 text-sm leading-5 text-muted-foreground">
                  Trusted by clients worldwide for reliable and personalized
                  solutions.
                </p>
                <div className="mt-4 h-1 w-10 bg-[#F4A000]" />
              </div>

              {trustFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-center gap-4 border-t border-gray-200 pt-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#001B52] text-white">
                    <feature.icon size={28} />
                  </div>

                  <div>
                    <h3 className="font-heading text-sm font-bold text-[#001B52]">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm leading-5 text-muted-foreground">
                      {feature.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
