import Benefit from '@/components/Benefit';
import Career from '@/components/CareerHeader';
import Container from '@/components/Container';
import Positions from '@/components/Position';

const career = () => {
  return (
    <Container>
      <Career id="position" />
      <Benefit />
      {/* <Positions /> */}
    </Container>
  );
};

export default career;
