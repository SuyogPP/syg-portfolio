import Contact from "@/components/home/contact";
import CalltoAction from "@/components/home/cta";
import Footer from "@/components/home/footer";
import { Experience } from "@/components/profile/experience";
import Skills from "@/components/profile/skills";
import Summary from "@/components/profile/summary";
import { Card } from "@/components/ui/card";
import Education from "@/components/profile/education";

export default function Home() {
  
  return (
    <div className="flex min-h-screen flex-col max-w-xl w-full mx-auto pt-4 md:pt-30 pb-10 px-4 md:px-0">
      <Card className="p-2 rounded-lg gap-2" >
        <section id="share-section">
          <Summary />
        </section>
        <section id="experience-section">
          <Experience />
        </section>
        <section id="skills-prof-section">
          <Skills />
        </section>
        <section id="education-section">
          <Education />
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
