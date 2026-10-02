import Hero from "@/components/sections/Hero";
import ScrollVideo from "@/components/sections/ScrollVideo";
import BrandManifesto from "@/components/sections/BrandManifesto";
import CircularLifecycle from "@/components/sections/CircularLifecycle";
import QualityCraft from "@/components/sections/QualityCraft";
import SchoolPartnership from "@/components/sections/SchoolPartnership";
import ImpactMetrics from "@/components/sections/ImpactMetrics";
import MysuruOrigin from "@/components/sections/MysuruOrigin";
import InstitutionalLeadForm from "@/components/sections/InstitutionalLeadForm";

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollVideo />
      <BrandManifesto />
      <CircularLifecycle />
      <QualityCraft />
      <SchoolPartnership />
      <ImpactMetrics />
      <MysuruOrigin />
      <InstitutionalLeadForm />
    </>
  );
}
