import './App.css';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="https://media.istockphoto.com/id/1806296436/photo/a-portrait-of-fatherly-love-with-a-smiling-infant-enjoying-the-comfort-and-assurance-of-her.jpg?s=1024x1024&w=is&k=20&c=QqdSucpOTaecregTTb_vqocHKEXdEs3tjrOn4ICFeQ8="
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Love and Affection
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Love and Affection
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default App;
