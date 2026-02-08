import HeroSection from '@/components/home/HeroSection';
import EditorialSection from '@/components/home/EditorialSection';
import TimelineSection from '@/components/home/TimelineSection';
import BestSellers from '@/components/home/BestSellers';
import LocationsSection from '@/components/home/LocationsSection';
import ReviewsSection from '@/components/home/ReviewsSection';
import PartnersSection from '@/components/home/PartnersSection';

const Index = () => {
  return (
    <main>
      <HeroSection />
      <EditorialSection />
      <TimelineSection />
      <BestSellers />
      <LocationsSection />
      <ReviewsSection />
      <PartnersSection />
    </main>
  );
};

export default Index;
