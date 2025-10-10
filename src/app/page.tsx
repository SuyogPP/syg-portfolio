import Skills from "@/components/home/skills";
import Designation from "@/components/home/designation";
import HeroSection from "@/components/home/hero";
import { Card } from "@/components/ui/card";
import Projects from "@/components/home/projects";
import CalltoAction from "@/components/home/cta";
import Contact from "@/components/home/contact";
import Footer from "@/components/home/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col max-w-xl w-full mx-auto pt-30 pb-10 px-4 md:px-0">
      <Card className="p-2 rounded-lg pt-8 gap-2" >
        <section id="designation" className="px-6">
          <Designation />
        </section>

        <section id="hero-section" className="mt-6 px-6">
          <HeroSection />
        </section>

        <section id="skills-section">
          <Skills />
        </section>

        <section id="projects-section">
          <Projects />
        </section>

        <section id="cta-section">
          <CalltoAction />
        </section>
        <section id="share-section">
          <Contact />
        </section>
        <section id="share-section">
          <Footer />
        </section>
      </Card>
    </div>
  );
}
