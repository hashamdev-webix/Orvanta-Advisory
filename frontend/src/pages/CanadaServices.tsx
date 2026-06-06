import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  FileText,
  Leaf,
  Scale,
  Users,
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

const services = [
  {
    icon: FileText,
    category: "IMMIGRATION",
    title: "Immigration",
    items: ["Visa Services", "PR Services", "Work Permits", "Study Abroad"],
    description:
      "Expert immigration solutions to help you build your future in Canada.",
    link: "/canada/immigration",
    color: "blue",
    iconClass: "bg-[#004A92] text-white",
    categoryClass: "text-[#004A92]",
    borderClass: "border-[#0B5EA8]/55",
    activeClass: "ring-[#0B5EA8]/18",
    checkClass: "text-[#004A92]",
    buttonClass: "bg-[#004A92] hover:bg-[#003E7A]",
    background:
      "bg-[radial-gradient(circle_at_80%_4%,rgba(0,74,146,0.09),transparent_42%)]",
  },
  {
    icon: BarChart3,
    category: "INVESTMENTS",
    title: "Investments",
    items: [
      "Real Estate Investments",
      "Stock Investments",
      "Tax Planning",
      "NRI Investments",
      "Business Investments",
    ],
    description:
      "Smart investment strategies for sustainable growth and long-term wealth.",
    link: "/canada/investments",
    color: "teal",
    iconClass: "bg-[#008A8A] text-white",
    categoryClass: "text-[#008A8A]",
    borderClass: "border-[#008A8A]/70",
    activeClass: "ring-[#008A8A]/18",
    checkClass: "text-[#008A8A]",
    buttonClass: "bg-[#008A8A] hover:bg-[#007272]",
    background:
      "bg-[linear-gradient(135deg,rgba(0,138,138,0.11),transparent_58%),radial-gradient(circle_at_88%_2%,rgba(0,138,138,0.12),transparent_36%)]",
  },
  {
    icon: Users,
    category: "CONSULTATION",
    title: "Consultation",
    items: [
      "Global Market Guidance",
      "Expansion and Optimization Support",
      "Strategic Growth Planning",
    ],
    description:
      "Strategic advisory to help your business expand and thrive in global markets.",
    link: "/canada/consultation",
    color: "royal",
    iconClass: "bg-[#2464D8] text-white",
    categoryClass: "text-[#2464D8]",
    borderClass: "border-[#2464D8]/45",
    activeClass: "ring-[#2464D8]/14",
    checkClass: "text-[#2464D8]",
    buttonClass: "bg-[#2464D8] hover:bg-[#1D55B8]",
    background:
      "bg-[radial-gradient(circle_at_76%_12%,rgba(36,100,216,0.09),transparent_42%)]",
  },
  {
    icon: Scale,
    category: "LEGAL SERVICES",
    title: "Legal Services",
    items: [
      "Legal Documentation and Verification",
      "Risk Management",
      "Dispute Prevention",
    ],
    description:
      "Reliable legal support to protect you and your business in Canada.",
    link: "/canada/legal-services",
    color: "purple",
    iconClass: "bg-[#6B4BB3] text-white",
    categoryClass: "text-[#6B4BB3]",
    borderClass: "border-[#6B4BB3]/35",
    activeClass: "ring-[#6B4BB3]/14",
    checkClass: "text-[#6B4BB3]",
    buttonClass: "bg-[#6B4BB3] hover:bg-[#593C9B]",
    background:
      "bg-[radial-gradient(circle_at_88%_2%,rgba(107,75,179,0.10),transparent_42%)]",
  },
];

const CanadaServices = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + services.length) % services.length);
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % services.length);
  };

  return (
    <Layout hideFooter>
      <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-[#F7FAFE]">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1517090504586-fde19ea6066f?w=1400&h=720&fit=crop"
            alt=""
            className="absolute left-0 top-0 h-[58%] w-[54%] object-cover opacity-[0.22]"
          />
          <div className="absolute left-0 top-0 h-[62%] w-[64%] bg-gradient-to-r from-[#F7FAFE]/15 via-[#F7FAFE]/58 to-[#F7FAFE]" />
          <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-white/80 to-transparent" />
          <Leaf className="absolute right-8 top-8 h-80 w-80 rotate-12 text-red-600/7 md:right-24 md:h-[30rem] md:w-[30rem]" />
          <Leaf className="absolute right-40 top-44 h-36 w-36 -rotate-12 text-red-600/6 max-md:hidden" />
        </div>

        <div className="container relative mx-auto max-w-[1560px] px-5 py-8 lg:px-10 lg:py-10">
          <motion.div
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-4xl text-center"
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-bold text-[#263B61] shadow-md shadow-slate-200/70"
            >
              <Leaf size={17} className="fill-red-600 text-red-600" />
              Canada Selected
            </motion.div>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="font-heading text-4xl font-extrabold leading-tight text-[#001B52] md:text-5xl lg:text-6xl"
            >
              Select Your Service in{" "}
              <span className="text-[#C93432]">Canada</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#405578] md:text-lg"
            >
              Choose the advisory service you need to explore tailored support
              options in Canada.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
            className="relative mx-auto mt-8 max-w-[1450px]"
          >
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 z-10 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-slate-200 bg-white text-[#001B52] shadow-xl shadow-slate-300/60 hover:bg-[#001B52] hover:text-white max-sm:left-5"
              aria-label="Previous service"
            >
              <ChevronLeft size={22} />
            </Button>

            <div className="overflow-hidden px-2 py-5 md:px-6">
              <div className="flex gap-5 transition-transform duration-500 lg:gap-6">
                {services.map((service, index) => {
                  const isActive = index === activeIndex;
                  return (
                  <article
                    key={service.title}
                    className={`min-w-[86%] overflow-hidden rounded-2xl border bg-white p-6 shadow-xl shadow-[#001B52]/10 transition-all duration-300 sm:min-w-[46%] md:min-w-[31.33%] lg:min-w-[calc(25%_-_18px)] ${
                      service.background
                    } ${
                      isActive
                        ? `${service.borderClass} ${service.activeClass} ring-2 lg:scale-[1.055]`
                        : "border-slate-200/80"
                    }`}
                  >
                    <div
                      className={`mb-5 flex h-16 w-16 items-center justify-center rounded-full shadow-lg ${service.iconClass}`}
                    >
                      <service.icon size={28} />
                    </div>
                    <p
                      className={`text-xs font-extrabold tracking-[0.08em] ${service.categoryClass}`}
                    >
                      {service.category}
                    </p>
                    <h2 className="mt-2 font-heading text-2xl font-extrabold text-[#001B52] lg:text-3xl">
                      {service.title}
                    </h2>
                    <ul className="mt-5 min-h-[116px] space-y-2.5">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm font-medium leading-5 text-[#263B61]"
                        >
                          <CheckCircle
                            size={15}
                            className={`mt-0.5 shrink-0 fill-current text-white ${service.checkClass}`}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 border-t border-slate-200 pt-4" />
                    <p className="min-h-[72px] text-sm leading-6 text-[#405578]">
                      {service.description}
                    </p>
                    <Link to={service.link}>
                      <Button
                        className={`mt-6 h-12 w-full text-base font-bold text-white shadow-lg ${service.buttonClass}`}
                      >
                        Explore Service
                        <ArrowRight size={17} className="ml-2" />
                      </Button>
                    </Link>
                  </article>
                  );
                })}
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="absolute right-0 top-1/2 z-10 h-12 w-12 -translate-y-1/2 translate-x-1/2 rounded-full border-slate-200 bg-white text-[#001B52] shadow-xl shadow-slate-300/60 hover:bg-[#001B52] hover:text-white max-sm:right-5"
              aria-label="Next service"
            >
              <ChevronRight size={22} />
            </Button>

            <div className="mt-5 flex justify-center gap-2">
              {services.map((service, index) => (
                <button
                  key={service.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeIndex
                      ? "w-8 bg-[#004A92]"
                      : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Show ${service.title}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CanadaServices;
