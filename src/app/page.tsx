import Footer from '@/components/Footer';
import AvailableProductSection from '@/components/HomePageSection/AvailableProductSection';
import LatestProductSection from '@/components/HomePageSection/LatestProductSection';
import PromoSection from '@/components/HomePageSection/PromoSection';
import Navbar from '@/components/Navbar';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <section className="pt-16 container lg:px-32">
        <PromoSection />
        <LatestProductSection />
        <AvailableProductSection />
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
