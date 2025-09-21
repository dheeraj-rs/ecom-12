import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CatalogHero from '@/components/catalog/CatalogHero';
import ProductGrid from '@/components/catalog/ProductGrid';
import CustomOrderSection from '@/components/catalog/CustomOrderSection';

export default function CatalogPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <CatalogHero />
      <ProductGrid />
      <CustomOrderSection />
      <Footer />
    </main>
  );
}