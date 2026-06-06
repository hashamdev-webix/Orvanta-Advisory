import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const serviceDetails = {
  immigration: {
    title: "Canada Immigration",
    description:
      "Visa services, PR services, work permits, and study abroad guidance for Canada.",
    items: ["Visa Services", "PR Services", "Work Permits", "Study Abroad"],
  },
  investments: {
    title: "Canada Investments",
    description:
      "Real estate, stock, tax, NRI, and business investment advisory for Canada.",
    items: [
      "Real Estate Investments",
      "Stock Investments",
      "Tax Planning",
      "NRI Investments",
      "Business Investments",
    ],
  },
  consultation: {
    title: "Canada Consultation",
    description:
      "Strategic advisory for market guidance, expansion, optimization, and growth planning.",
    items: [
      "Global Market Guidance",
      "Expansion and Optimization Support",
      "Strategic Growth Planning",
    ],
  },
  "legal-services": {
    title: "Canada Legal Services",
    description:
      "Legal documentation, verification, risk management, and dispute prevention support.",
    items: [
      "Legal Documentation and Verification",
      "Risk Management",
      "Dispute Prevention",
    ],
  },
};

type ServiceSlug = keyof typeof serviceDetails;

const CanadaServiceDetail = () => {
  const { service = "immigration" } = useParams();
  const detail =
    serviceDetails[service as ServiceSlug] ?? serviceDetails.immigration;

  return (
    <Layout>
      <section className="bg-[#fbfcfd] py-20 lg:py-28">
        <div className="container mx-auto max-w-4xl px-5 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="rounded-lg border border-border bg-white p-8 shadow-lg shadow-primary/6 md:p-10"
          >
            <Link
              to="/canada"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-secondary/80"
            >
              <ArrowLeft size={18} />
              Back to Canada services
            </Link>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-accent">
              Canada Service Detail
            </p>
            <h1 className="font-heading text-4xl font-extrabold text-foreground md:text-5xl">
              {detail.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              {detail.description}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {detail.items.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-md border border-border bg-[#fbfcfd] p-4"
                >
                  <CheckCircle size={20} className="mt-0.5 text-secondary" />
                  <span className="text-sm font-medium text-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <Link to="/contact">
              <Button className="mt-9 bg-secondary text-white hover:bg-secondary/90">
                Request Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CanadaServiceDetail;
