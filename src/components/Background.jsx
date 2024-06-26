/* //import React from 'react';
import PropTypes from 'prop-types';
import { createTheme, ThemeProvider } from "@mui/material/styles"; // Import ThemeProvider from Material-UI
import backgroundImage from '../assets/sunset.jpg'; // Ensure the image path is correct

const theme = createTheme(); // Create a theme instance

const useStyles = createTheme(theme => ({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: '#fff',
  },
}));

const Background = ({ children }) => {
  const classes = useStyles(theme);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        {children}
      </div>
    </ThemeProvider>
  );
};

Background.propTypes = {
  children: PropTypes.node.isRequired, // Ensure children is required and can be any renderable node
};

export default Background;
 */