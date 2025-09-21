import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import LocationInfo from '@/components/contact/LocationInfo';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ContactHero />
      <div className="grid lg:grid-cols-2 gap-0">
        <ContactForm />
        <LocationInfo />
      </div>
      <Footer />
    </main>
  );
}