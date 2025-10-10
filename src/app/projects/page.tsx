import Contact from "@/components/home/contact";
import CalltoAction from "@/components/home/cta";
import Footer from "@/components/home/footer";
import Projects from "@/components/projects/projects";
import Summary from "@/components/projects/summary";
import { Card } from "@/components/ui/card";

export default function ProjectsPage() {

  return (
    <div className="flex min-h-screen flex-col max-w-xl w-full mx-auto pt-30 pb-10">
      <Card className="p-2 rounded-lg gap-2" >
        <section id="share-section">
          <Summary />
        </section>
        <section id="experience-section">
          <Projects />
        </section>
        
        <section id="cta-section">
          <CalltoAction />
        </section>

        <section id="share-section">
          <Contact />
        </section>
        <section id="footer-section">
          <Footer />
        </section>
      </Card>
    </div>
  );

}
