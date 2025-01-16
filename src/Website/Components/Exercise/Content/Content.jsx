import { SwiperSlide } from "swiper/react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Link } from "react-router-dom";
export default function Content({ data }) {
  return (
    <SwiperSlide>
      <Card sx={{ display: 'flex' , maxWidth:'400px' , height:'100%' , justifyContent:'space-between' , borderRadius:'12px' , background:'#fff' , boxShadow: 'inset 0px 0px 2px #000000b5'}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" color="#000" variant="h5">
          {data && data.title}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: 'text.secondary' }}
          >
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <Link to={`/exerciseDetails/${data.exercise?.id}`} style={{color:'#000' , display:'flex' , alignItems:'center' , fontSize:'1.2rem'}} aria-label="previous">
            show Details <KeyboardDoubleArrowRightIcon sx={{fontSize:'1.8rem'}} />
          </Link>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={data.media &&
          data.media[0].original_url}
        alt="Live from space album cover"
      />
    </Card>
    </SwiperSlide>
  );
}
