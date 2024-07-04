import CompanyWork from '@/components/CompanyWork';
import DevlopmentCircle from '@/components/DevlopmentCircle';
import Services from '@/components/Services';
import Solutions from '@/components/Solutions';
import Container from '@/components/Container';
import HeroSection from '@/components/HeroSection';

const Home = () => {
  return (
    <Container>
      {/* <Header /> */}
      <HeroSection />
      <CompanyWork />
      <Solutions />
      <DevlopmentCircle />
      <Services />
    </Container>
  );
};
export default Home;
