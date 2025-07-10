import { useState } from "react";
import Header from "@/components/header";
import OverviewSection from "@/components/overview-section";
import DefinitionsSection from "@/components/definitions-section";
import TerraformCodeSection from "@/components/terraform-code-section";
import InstructionsSection from "@/components/instructions-section";
import ScreenshotsSection from "@/components/screenshots-section";
import Lightbox from "@/components/lightbox";

type Section = "overview" | "definitions" | "terraform-code" | "instructions" | "screenshots";

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>("overview");
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    alt: string;
    title: string;
    description: string;
  } | null>(null);

  const openLightbox = (image: { src: string; alt: string; title: string; description: string }) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const renderSection = () => {
    switch (activeSection) {
      case "overview":
        return <OverviewSection />;
      case "definitions":
        return <DefinitionsSection />;
      case "terraform-code":
        return <TerraformCodeSection />;
      case "instructions":
        return <InstructionsSection />;
      case "screenshots":
        return <ScreenshotsSection onImageClick={openLightbox} />;
      default:
        return <OverviewSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-50">
      <Header activeSection={activeSection} onSectionChange={setActiveSection} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderSection()}
      </main>

      {lightboxImage && (
        <Lightbox
          image={lightboxImage}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
}
