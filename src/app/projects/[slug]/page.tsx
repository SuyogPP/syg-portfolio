import Contact from "@/components/home/contact";
import CalltoAction from "@/components/home/cta";
import Footer from "@/components/home/footer";
import Summary from "@/components/projects/summary-project";
import { Card } from "@/components/ui/card";

export default function ProjectsPage({ params }: { params: { slug: string } }) {



    return (
        <div className="flex min-h-screen flex-col max-w-xl w-full mx-auto pt-4 md:pt-30 pb-10 px-4 md:px-0">
            <Card className="p-2 rounded-lg gap-2" >
                <section id="share-section">
                    <Summary slug={params?.slug} />
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
