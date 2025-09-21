import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PortfolioHero from '@/components/portfolio/PortfolioHero';
import WorksGallery from '@/components/portfolio/WorksGallery';
import ClientReviews from '@/components/portfolio/ClientReviews';

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PortfolioHero />
      <WorksGallery />
      <ClientReviews />
      <Footer />
    </main>
  );
}