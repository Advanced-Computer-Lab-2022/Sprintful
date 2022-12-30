import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { shadows } from '@mui/system';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';

export default function ImgMediaCard() {
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate('/api/courses/addPromotion/:courseid');
        navigate(0);
    }

    return (
    <Card sx={{ maxWidth: 400 ,minHeight:280}}  style={{boxShadow: "3"}}>
      <CardContent>

        {/* <Link to='/api/courses/addPromotion/:courseid' gutterBottom variant="h5" component="div">
          Lizard
        </Link> */}
        {/* <a onClick={handleClick}> */}
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        {/* </a> */}
        <ul>
            <li>Reem</li>
        </ul>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
        <Button size="small">test </Button>
      </CardActions>
    </Card>
    
        
      );
}