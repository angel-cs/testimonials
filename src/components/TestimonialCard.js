import { Avatar, Card, CardContent, CardHeader, IconButton, Stack, Typography } from "@mui/material";
import { TrashSimple, MapPin, Quotes } from "phosphor-react";
import { useContext } from "react";
import testimonialsContext from "../context/testimonialsContext";

function TestimonialCard({ cardData }) {
    const { id, name, location, avatar, message, rating } = cardData
    const { setCardsData } = useContext(testimonialsContext)

    const handleDeleteCard = () => {
        setCardsData(cardsData => cardsData.filter(cardData => cardData.id !== id))
    }

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardHeader
                avatar={
                <Avatar sx={{ width: 56, height: 56, marginRight: '-6px' }} aria-label="recipe" alt={name} src={avatar} />
                }
                action={
                    <Quotes size={32} weight='fill' />
                }
                title={name}
                subheader={<Stack direction="row" justifyContent="start" alignItems="center"><MapPin style={{ marginLeft: '-3px' }} size={18} weight='fill' color="rgba(0, 0, 0, 0.87)" /> {location}</Stack>}
            />

            <CardContent style={{ padding: '0 16px' }}>
                <Typography variant="body2">
                    {message.slice(0, 120)}...
                </Typography>
            </CardContent>

            <Stack direction="row" justifyContent="space-between" alignItems="center" padding="16px">
                <Typography variant="body2">
                    Rating: <b>{rating}</b>
                </Typography>
                <IconButton onClick={handleDeleteCard} aria-label="settings">
                    <TrashSimple size={24} weight='fill' />
                </IconButton>
            </Stack>
        </Card>
    );
  }
  
  export default TestimonialCard;
  