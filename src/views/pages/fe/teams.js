import React from 'react'
import Header from '../common/header'
import Footer from '../common/footer'
import './Model4.css'
/*import Member1 from './team/p1.jpeg';
import Member2 from './team/p2.jpeg';
import Member3 from './team/p3.jpeg';*/
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import './Model4.css'
import Grid from '@mui/material/Grid';
import { Box,Paper,styled } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Teams = () => {
  return (
    <div className="teams">
      <Header />

      <div className="logo">
        <img alt="log" src="./logo-lg.png" />
      </div>

      return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <div className="divider"></div>
      <div className="members">

        <Grid item xs={6}>
          <Item>
          <div className="member">
            <img width={200} height={200} src={'./team/p1.jpeg'}/>
            <div className="description">
                <h1>Ahmed ALAMI</h1>
                <h2>CEO</h2>
                <p>
                Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet consectet.
                </p>
                <div className="social-media">
                  <InstagramIcon />
                  <LinkedInIcon />
                  <PinterestIcon />
                </div>
            </div>
          </div>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
          <div className="member">
            <img width={200} height={200} src={'./team/p2.jpeg'}/>
            <div className="description">
                <h1>Ahmed ALAMI</h1>
                <h2>CEO</h2>
                <p>
                Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet consectet.
                </p>
                <div className="social-media">
                  <InstagramIcon />
                  <LinkedInIcon />
                  <PinterestIcon />
                </div>
            </div>
          </div>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>3</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>4</Item>
        </Grid>
        </div>
      </Grid>
      
    </Box>
  );
  
      <Footer />
    </div>
  )
}

export default Teams
