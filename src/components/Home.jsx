import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Box, Button, TextField, Paper } from '@mui/material';
import { styled } from '@mui/system';
import sunset from '../assets/sunset.jpg';

const BackgroundContainer = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  minHeight: "100vh",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: `url(${sunset})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  flexDirection: "column",
  backgroundRepeat: 'no-repeat',
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme?.spacing(4) || '16px', 
  maxWidth: '400px',
  width: '100%',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  borderRadius: theme?.shape?.borderRadius || '4px', 
  boxShadow: theme?.shadows?.[5] || '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)', // Fallback to a default shadow if theme is undefined
}));

const Home = () => {
  const [message, setMessage] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [view, setView] = useState('login'); // 'login' or 'register'
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3000/api/auth/verify-token', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMessage(`Welcome, ${response.data.user.username}`);
        setIsAuthenticated(true);
      } catch (error) {
        setMessage('You are not logged in');
      }
    };

    fetchData();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', { username, password });
      setNotification('Login successful');
      localStorage.setItem('token', response.data.token);
      setMessage(`Welcome, ${username}`);
      setIsAuthenticated(true);
    } catch (error) {
      setNotification('Login failed: ' + error.response.data.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/auth/register', { username, password });
      setNotification('Registration successful. Please log in.');
      setView('login');
    } catch (error) {
      setNotification('Registration failed: ' + error.response.data.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setMessage('You have logged out');
    setIsAuthenticated(false);
    setView('login');
  };

  return (
    <BackgroundContainer>
    <Container component="main" maxWidth="xs">
    <StyledPaper>
      <Box
      >
        {isAuthenticated ? (
          <>
            <Typography component="h1" variant="h5">
              {message}
            </Typography>
            <Button
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Typography component="h1" variant="h5">
              {view === 'login' ? 'Login' : 'Register'}
            </Typography>
            <form noValidate> {/* <form onSubmit={view === 'login' ? handleLogin : handleRegister}> */}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {view === 'login' ? (
              <>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  color="primary"
                  onClick={handleLogin}
                >
                  Login
                </Button>
                <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }} > 
                  Dont have an account? <Button onClick={() => setView('register')}>Register</Button>
                </Typography>
              </>
            ) : (
              <>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleRegister}
                >
                  Register
                </Button>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  Already have an account? <Button onClick={() => setView('login')}>Login</Button>
                </Typography>
              </>
            )}
            {notification && <Typography color="error">{notification}</Typography>}
          </form>
          </>
        )}
      </Box>
      </StyledPaper>
    </Container>
    </BackgroundContainer>
  );
};

export default Home;
