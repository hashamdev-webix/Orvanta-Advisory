import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  BriefcaseBusiness,
  Building2,
  CheckCircle,
  ChevronRight,
  FileCheck2,
  FileText,
  Globe2,
  GraduationCap,
  Handshake,
  LockKeyhole,
  ReceiptText,
  Scale,
  ShieldAlert,
  ShieldCheck,
  Target,
  TrendingUp,
  UserCheck,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { getCountryPage } from "./CanadaServices";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45 },
  }),
};

const serviceDetails = {
  immigration: {
    icon: FileText,
    pill: "Immigration Services",
    breadcrumb: "Immigration",
    title: "Immigration Services",
    description:
      "Expert immigration and visa solutions tailored to help you achieve your global goals.",
    backgroundTone: "from-[#F7FAFE] via-[#F7FAFE]/95 to-white",
    services: [
      {
        slug: "visa-services",
        icon: Globe2,
        category: "VISA SERVICES",
        title: "Visa Services",
        description:
          "Assistance with visitor visas, business visas, family visas, and more.",
      },
      {
        slug: "pr-services",
        icon: UserCheck,
        category: "PR SERVICES",
        title: "PR Services",
        description:
          "End-to-end support for permanent residency applications.",
      },
      {
        slug: "work-permits",
        icon: Briefcase,
        category: "WORK PERMITS",
        title: "Work Permits",
        description:
          "Guidance and support for securing work permits and employment pathways.",
      },
      {
        slug: "study-abroad",
        icon: GraduationCap,
        category: "STUDY ABROAD",
        title: "Study Abroad",
        description:
          "Support for study permits, university applications, and student guidance.",
      },
    ],
  },
  investments: {
    icon: BarChart3,
    pill: "Investment Services",
    breadcrumb: "Investments",
    title: "Investment Services",
    description:
      "Explore smart investment solutions tailored to help you grow, protect, and diversify your financial opportunities.",
    backgroundTone: "from-[#F7FAFE] via-white to-[#F7FAFE]",
    services: [
      {
        slug: "real-estate-investments",
        icon: Building2,
        category: "REAL ESTATE INVESTMENTS",
        title: "Real Estate Investments",
        description:
          "Explore property investment opportunities with strategic guidance for long-term value and growth.",
      },
      {
        slug: "stock-investments",
        icon: TrendingUp,
        category: "STOCK INVESTMENTS",
        title: "Stock Investments",
        description:
          "Receive support for building and managing stock investment strategies aligned with your goals.",
      },
      {
        slug: "tax-planning",
        icon: ReceiptText,
        category: "TAX PLANNING",
        title: "Tax Planning",
        description:
          "Plan efficiently with advisory support designed to optimize tax outcomes and investment returns.",
      },
      {
        slug: "nri-investments",
        icon: Globe2,
        category: "NRI INVESTMENTS",
        title: "NRI Investments",
        description:
          "Access tailored investment options and guidance for global and domestic opportunities.",
      },
      {
        slug: "business-investments",
        icon: BriefcaseBusiness,
        category: "BUSINESS INVESTMENTS",
        title: "Business Investments",
        description:
          "Evaluate business investment opportunities with market, compliance, and growth guidance.",
      },
    ],
  },
  consultation: {
    icon: Users,
    pill: "Consultation Services",
    breadcrumb: "Consultation",
    title: "Consultation Services",
    description:
      "Strategic advisory and consultation services to help your business grow and expand globally.",
    backgroundTone: "from-white via-[#F7FAFE] to-white",
    services: [
      {
        slug: "global-market-guidance",
        icon: Globe2,
        category: "GLOBAL MARKET GUIDANCE",
        title: "Global Market Guidance",
        description:
          "In-depth market research and insights to help you make informed and profitable business decisions.",
      },
      {
        slug: "expansion-optimization",
        icon: BarChart3,
        category: "EXPANSION AND OPTIMIZATION SUPPORT",
        title: "Expansion and Optimization Support",
        description:
          "Optimize operations and expand your footprint with expert advisory support.",
      },
      {
        slug: "strategic-growth-planning",
        icon: Target,
        category: "STRATEGIC GROWTH PLANNING",
        title: "Strategic Growth Planning",
        description:
          "Build future-ready strategies and sustainable growth plans for long-term business success.",
      },
    ],
  },
  "legal-services": {
    icon: Scale,
    pill: "Legal Services",
    breadcrumb: "Legal Services",
    title: "Legal Services",
    description:
      "Professional legal support and advisory services to help protect your interests, reduce risk, and support compliant business decisions.",
    backgroundTone: "from-[#F7FAFE] via-white to-[#F7FAFE]",
    services: [
      {
        slug: "legal-documentation",
        icon: FileCheck2,
        category: "LEGAL DOCUMENTATION",
        title: "Legal Documentation and Verification",
        description:
          "Support for legal documentation review, verification, and structured compliance guidance.",
      },
      {
        slug: "risk-management",
        icon: ShieldAlert,
        category: "RISK MANAGEMENT",
        title: "Risk Management",
        description:
          "Identify legal and operational risks early and receive guidance to support secure decisions.",
      },
      {
        slug: "dispute-prevention",
        icon: Scale,
        category: "DISPUTE PREVENTION",
        title: "Dispute Prevention",
        description:
          "Reduce the likelihood of disputes through proactive advisory support and preventive planning.",
      },
    ],
  },
};

const trustFeatures = [
  {
    icon: ShieldCheck,
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
    text: "Personalized strategies designed to meet your unique goals.",
  },
  {
    icon: LockKeyhole,
    title: "Trust & Transparency",
    text: "Committed to integrity, clarity, and client success.",
  },
];

type ServiceSlug = keyof typeof serviceDetails;

const CanadaServiceDetail = () => {
  const { countrySlug, service = "immigration", serviceItem } = useParams();
  const country = getCountryPage(countrySlug);
  const detail =
    serviceDetails[service as ServiceSlug] ?? serviceDetails.immigration;
  const selectedItem =
    detail.services.find((item) => item.slug === serviceItem) ??
    detail.services[0];
  const isItemPage = Boolean(serviceItem);

  if (isItemPage) {
    return (
      <Layout>
        <section className="relative overflow-hidden bg-[#F7FAFE] py-16 lg:py-20">
          <div className="absolute inset-0 pointer-events-none">
            <img
              src={country.heroImage}
              alt=""
              className="absolute left-0 top-0 h-full w-full object-cover opacity-[0.08]"
            />
            <div className="absolute inset-0 bg-white/82" />
          </div>
          <div className="container relative mx-auto max-w-5xl px-5 lg:px-10">
            <BreadcrumbTrail
              countryBase={country.routeBase}
              category={detail.breadcrumb}
              categoryPath={`${country.routeBase}/${service}`}
              current={selectedItem.title}
            />

            <motion.div
              initial="hidden"
              animate="visible"
              className="mt-10 rounded-lg border border-slate-200 bg-white p-7 shadow-xl shadow-[#001B52]/8 md:p-10"
            >
              <motion.div
                variants={fadeUp}
                custom={0}
                className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF4FB] text-[#011741]"
              >
                <selectedItem.icon size={34} />
              </motion.div>
              <motion.p
                variants={fadeUp}
                custom={1}
                className="text-xs font-extrabold tracking-[0.14em] text-[#F4A000]"
              >
                {selectedItem.category}
              </motion.p>
              <motion.h1
                variants={fadeUp}
                custom={2}
                className="mt-3 font-heading text-4xl font-extrabold leading-tight text-[#011741] md:text-5xl"
              >
                {country.name} {selectedItem.title}
              </motion.h1>
              <motion.p
                variants={fadeUp}
                custom={3}
                className="mt-5 max-w-3xl text-lg leading-8 text-[#405578]"
              >
                {selectedItem.description} Our advisors tailor this service for
                your goals in {country.name}.
              </motion.p>
              <motion.div
                variants={fadeUp}
                custom={4}
                className="mt-8 grid gap-4 sm:grid-cols-2"
              >
                {[
                  "Personalized requirement review",
                  "Documentation and eligibility guidance",
                  "Step-by-step advisory support",
                  "Clear follow-up and consultation planning",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-md border border-slate-200 bg-[#fbfcfd] p-4"
                  >
                    <CheckCircle
                      size={19}
                      className="mt-0.5 shrink-0 text-[#011741]"
                    />
                    <span className="text-sm font-semibold text-[#263B61]">
                      {item}
                    </span>
                  </div>
                ))}
              </motion.div>
              <Link to="/contact">
                <Button className="mt-9 bg-[#011741] text-white hover:bg-[#011741]/90">
                  Request Consultation
                  <ArrowRight size={17} className="ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className={`relative min-h-[calc(100vh-5rem)] overflow-hidden bg-gradient-to-br ${detail.backgroundTone}`}>
        <div className="absolute inset-0 pointer-events-none">
          <img
            src={country.heroImage}
            alt=""
            className="absolute left-0 top-0 h-[58%] w-[45%] object-cover opacity-[0.14]"
          />
          <div className="absolute left-0 top-0 h-[64%] w-[60%] bg-gradient-to-r from-[#F7FAFE]/10 via-[#F7FAFE]/70 to-[#F7FAFE]" />
          <img
            src={country.heroImage}
            alt=""
            className="absolute right-0 top-10 h-[48%] w-[34%] object-cover opacity-[0.07]"
          />
          <div className="absolute right-0 top-0 h-[60%] w-[48%] bg-gradient-to-l from-[#F7FAFE]/10 via-[#F7FAFE]/75 to-transparent" />
        </div>

        <div className="container relative mx-auto max-w-[1480px] px-5 py-8 lg:px-10">
          <BreadcrumbTrail
            countryBase={country.routeBase}
            category={detail.breadcrumb}
          />

          <motion.div
            initial="hidden"
            animate="visible"
            className="mx-auto mt-3 max-w-3xl text-center"
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#0B73CE]/20 bg-white/70 px-5 py-2 text-sm font-bold text-[#0B73CE] shadow-sm"
            >
              <detail.icon size={17} />
              {detail.pill}
            </motion.div>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="font-heading text-4xl font-extrabold leading-tight text-[#011741] md:text-5xl lg:text-6xl"
            >
              {detail.title}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#405578] md:text-lg"
            >
              {detail.description}
            </motion.p>
            <motion.div
              variants={fadeUp}
              custom={3}
              className="mx-auto mt-4 h-1 w-10 rounded-full bg-[#F4A000]"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={4}
            className={`mx-auto mt-9 grid max-w-[1160px] gap-6 ${
              detail.services.length === 4
                ? "md:grid-cols-2 xl:grid-cols-4"
                : "md:grid-cols-3"
            }`}
          >
            {detail.services.map((item) => (
              <article
                key={item.slug}
                className="flex min-h-[300px] flex-col items-center rounded-lg border border-slate-200/80 bg-white p-7 text-center shadow-xl shadow-[#001B52]/8"
              >
                <div className="flex h-[76px] w-[76px] items-center justify-center rounded-2xl bg-[#EEF4FB] text-[#011741]">
                  <item.icon size={36} />
                </div>
                <p className="mt-5 text-xs font-extrabold tracking-[0.05em] text-[#F4A000]">
                  {item.category}
                </p>
                <h2 className="mt-2 min-h-[58px] font-heading text-xl font-extrabold leading-tight text-[#011741]">
                  {item.title}
                </h2>
                <div className="my-3 h-0.5 w-9 rounded-full bg-[#F4A000]" />
                <p className="min-h-[78px] text-sm leading-6 text-[#405578]">
                  {item.description}
                </p>
                <Link
                  to={`${country.routeBase}/${service}/${item.slug}`}
                  className="mt-auto w-full"
                >
                  <Button className="mt-5 h-11 w-full bg-[#011741] font-semibold text-white hover:bg-[#011741]/90">
                    Explore Service
                    <ChevronRight size={17} className="ml-2" />
                  </Button>
                </Link>
              </article>
            ))}
          </motion.div>

          <div className="mt-6 flex justify-center gap-3">
            {detail.services.slice(0, 4).map((item, index) => (
              <span
                key={item.slug}
                className={`h-2.5 w-2.5 rounded-full ${
                  index === 0 ? "bg-[#011741]" : "bg-[#B8C6D9]"
                }`}
              />
            ))}
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={5}
            className="mx-auto mt-8 grid max-w-[1100px] gap-0 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg shadow-[#001B52]/6 md:grid-cols-4"
          >
            {trustFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={`flex gap-4 p-6 ${
                  index > 0 ? "border-t border-slate-200 md:border-l md:border-t-0" : ""
                }`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#EEF4FB] text-[#011741]">
                  <feature.icon size={25} />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-[#011741]">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-[#405578]">
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

const BreadcrumbTrail = ({
  countryBase,
  category,
  categoryPath,
  current,
}: {
  countryBase: string;
  category: string;
  categoryPath?: string;
  current?: string;
}) => (
  <nav aria-label="breadcrumb" className="flex flex-wrap items-center gap-2 text-sm font-medium text-[#7B8BA8]">
    <Link to="/" className="hover:text-[#011741]">
      Home
    </Link>
    <ChevronRight size={15} />
    <Link to={countryBase} className="hover:text-[#011741]">
      Services
    </Link>
    <ChevronRight size={15} />
    {current && categoryPath ? (
      <>
        <Link to={categoryPath} className="hover:text-[#011741]">
          {category}
        </Link>
        <ChevronRight size={15} />
        <span className="text-[#011741]">{current}</span>
      </>
    ) : (
      <span className="text-[#011741]">{category}</span>
    )}
  </nav>
);

export default CanadaServiceDetail;
