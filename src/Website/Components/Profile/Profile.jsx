import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { Home } from '@mui/icons-material';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import Logout from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { ActAuthLogout } from '../../../Redux/Auth/AuthSlice';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ButtonLoading from '../Loading/ButtonLoading/ButtonLoading';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import BedtimeIcon from '@mui/icons-material/Bedtime';
// import { useEffect } from 'react';
// import { ActGetMyGoal } from '../../../Redux/MyGaol/MyGoalSlice';
export default function Profile() {
  const dispatch = useDispatch();
  const { loading , error } = useSelector((state) => state.auth);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const nav = useNavigate()
  // const { myGoals } = useSelector((state) => state.myGoal);
  // useEffect(()=>{
  //   dispatch(ActGetMyGoal())
  // }, [dispatch])
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }
  function HandelLogout(){
    const promise = dispatch(ActAuthLogout()).unwrap().then(()=>{
      nav('/login')
      }).catch(()=>{console.log(error)})
      return () => {
      promise.abort();
    }
  }
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{fontSize: '2rem' , width: '45px' , height: '45px'}}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {/* {
          myGoals.length > 0 &&
          <> */}
        <MenuItem sx={{fontSize: '1.4rem'}} onClick={handleClose}>
          <NavLink style={{display: 'flex' , alignItems: 'center' , width: '100%'}} to='/user'>
            <Avatar><Home style={{fontSize: '2rem'}} /></Avatar> My Plans
          </NavLink>
        </MenuItem>
        <MenuItem sx={{fontSize: '1.4rem'}} onClick={handleClose}>
         <NavLink style={{display: 'flex' , alignItems: 'center' , width: '100%'}} to='/food/1'>
            <Avatar><RestaurantMenuIcon style={{fontSize: '2rem'}} /></Avatar> My Menu
          </NavLink>
        </MenuItem>
        <MenuItem sx={{fontSize: '1.4rem'}} onClick={handleClose}>
         <NavLink style={{display: 'flex' , alignItems: 'center' , width: '100%'}} to='/sleep'>
            <Avatar><BedtimeIcon style={{fontSize: '2rem'}} /></Avatar> Sleep
          </NavLink>
        </MenuItem>
        {/* </>
         } */}
        <MenuItem sx={{fontSize: '1.4rem'}} onClick={handleClose}>
        <NavLink style={{display: 'flex' , alignItems: 'center' , width: '100%'}} to='/gym'>
            <Avatar><FitnessCenterIcon style={{fontSize: '2rem'}} /></Avatar> Gym
          </NavLink>
        </MenuItem>
        <MenuItem sx={{fontSize: '1.4rem'}} onClick={handleClose}>
          <NavLink style={{display: 'flex' , alignItems: 'center' , width: '100%'}} to='/services'>
            <Avatar><AnnouncementIcon style={{fontSize: '2rem'}} /></Avatar> Services
          </NavLink>
        </MenuItem>
        <MenuItem sx={{fontSize: '1.4rem'}} onClick={handleClose}>
        <NavLink style={{display: 'flex' , alignItems: 'center' , width: '100%'}} to='/myProfile'>
          <Avatar /> My profile 
          </NavLink>
        </MenuItem>
        
        <Divider />
        <MenuItem sx={{fontSize: '1.4rem'}} onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem sx={{fontSize: '1.4rem'}} onClick={handleClose}>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem sx={{fontSize: '1.4rem'}} onClick={()=>{
          HandelLogout()
          }}>
          {loading === 'pending' ? <ButtonLoading /> :<ListItemIcon><Logout /></ListItemIcon>}
          Logout 
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
