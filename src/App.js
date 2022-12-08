import Testimonials from './components/Testimonials';
import testimonialsApi from './api/testimonialsApi';
import { useEffect, useState, useContext } from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import TestimonialsContext from './context/testimonialsContext';

function App() {
  const { setCardsData } = useContext(TestimonialsContext)

  useEffect(() => {
    testimonialsApi()
      .then(response => {
        setCardsData(response.data)
      })
      .catch(e => console.log({e}))
  }, [])

  return (
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        >
        <Grid
          item xs={10}
        >
          <Testimonials />
        </Grid>
      </Grid>
  );
}

export default App;
