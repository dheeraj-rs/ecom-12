import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AboutHero from '@/components/about/AboutHero';
import CompanyStory from '@/components/about/CompanyStory';
import TeamSection from '@/components/about/TeamSection';
import ProcessSection from '@/components/about/ProcessSection';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AboutHero />
      <CompanyStory />
      <TeamSection />
      <ProcessSection />
      <Footer />
    </main>
  );
}