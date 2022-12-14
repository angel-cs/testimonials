import Testimonials from './components/Testimonials';
import testimonialsApi from './api/testimonialsApi';
import { useEffect, useContext } from 'react';
import TestimonialsContext from './context/testimonialsContext';
import { Container } from '@mui/material';

function App() {
  const { setCardsData } = useContext(TestimonialsContext)

  const getTestimonials = () => {
    testimonialsApi()
      .then(response => {
        setCardsData(response.data)
      })
      .catch(e => console.log({e}))
  }

  useEffect(getTestimonials, [setCardsData])

  return (
      <Container maxWidth="xl">
          <Testimonials />
      </Container>
  );
}

export default App;
