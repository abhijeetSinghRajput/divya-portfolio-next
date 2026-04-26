import AboutSection from "@/components/sections/AboutSection";
import AwardsHonorsUI from "@/components/sections/AwardsHonorsUI";
import ContactSection from "@/components/sections/ContactSection";
import EducationTimeline from "@/components/sections/EducationTimeline";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import HeroSection from "@/components/sections/HeroSection";
import PoemSection from "@/components/sections/PoemSection";
import ProjectSection from "@/components/sections/ProjectSection";
import ProgressiveBlur from "@/components/ui/progressive-blur";
import GithubCalendar from "@/components/github-calendar";

export default function HomePage() {
  return (
    <div>
      <Header />

      <ProgressiveBlur
        style={{ position: "fixed" }}
        className="z-40"
        height="120px"
        position="top"
        backgroundColor="var(--background)"
      />

      <main className="px-4 mb-40 mx-auto md:max-w-3xl space-y-28">
        <HeroSection />
        <GithubCalendar />
        <AboutSection />
        <ProjectSection />
        <EducationTimeline />
        <PoemSection />
        <AwardsHonorsUI />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
