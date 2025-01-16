import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useTheme } from '@mui/material';
import { tokens } from '../../theme';

export default function CardContentDetails({img = '' , title = '' , description = ''}) {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Card sx={{ width: 300 , height:'auto' , minHeight:'150px' , margin:'auto' , background:colors.primary[900]  }}>
      <CardActionArea>
       {img && <CardMedia
          component="img"
          sx={{width:'100%' , height:'170px' , objectFit: 'contain'}}
          image={img}
          alt="green iguana"
        />}
        <CardContent >
          {title && <Typography gutterBottom variant="h4" component="div">
            {title}
          </Typography>}
          <Typography variant="body1" sx={{ color: 'text.secondary' , fontSize:'1rem' }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
