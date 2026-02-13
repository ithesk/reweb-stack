import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Quote } from "@/components/Quote";
import { Events } from "@/components/Events";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Quote />
      <Events />
      <CTA />
      <Footer />
    </main>
  );
}
