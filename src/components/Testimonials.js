import TestimonialCard from "./TestimonialCard";
import Grid from '@mui/material/Unstable_Grid2';
import { useContext } from "react";
import TestimonialsContext from "../context/testimonialsContext";
import { useRatingSort } from "../hooks/useRatingSort";

function Testimonials() {
  const { cardsData } = useContext(TestimonialsContext)
  const sortedByRatingData = useRatingSort(cardsData)

  return (
      <Grid
        container
        rowSpacing={{ xs: 1, sm: 2 }}
        columnSpacing={{ xs: 1, sm: 2 }}
        justifyContent="center"
      >
        {sortedByRatingData.map(cardData => (
                <Grid key={cardData.id} item xs={12} md={6} lg={4} xl={3}>
                    <TestimonialCard cardData={cardData} />
                </Grid>
            )
        )}
      </Grid>
  );
}

export default Testimonials;
