import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';

// Define the Styled Components

// Container component with a gradient background
const NotFoundContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100vh',
  background: 'linear-gradient(135deg, #ff0066, #ff6600)',
  backgroundSize: '400% 400%',
  animation: 'gradient 3s ease infinite',
  padding: '3rem',
  borderRadius: '2rem',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
  position: 'relative',
  overflow: 'hidden',
  fontFamily: '"Comic Sans MS", cursive, sans-serif',
  textAlign: 'center',
  '@keyframes gradient': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
  },
}));

// Title with bounce effect
const Title = styled(Typography)(({ theme }) => ({
  fontSize: '6rem',
  color: 'white',
  textShadow: '0 0 15px rgba(0, 0, 0, 0.3)',
  animation: 'bounce 1.5s infinite alternate',
  transformOrigin: 'center',
  '@keyframes bounce': {
    '0%': { transform: 'scale(1) translateY(0)' },
    '50%': { transform: 'scale(1.1) translateY(-10px)' },
    '100%': { transform: 'scale(1) translateY(0)' },
  },
}));

// Subtitle with floating effect
const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  color: 'white',
  textShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  marginTop: '20px',
  letterSpacing: '2px',
  animation: 'float 2s ease-in-out infinite',
  '@keyframes float': {
    '0%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-10px)' },
    '100%': { transform: 'translateY(0)' },
  },
}));

// Button component styled
const HomeButton = styled(Button)(({ theme }) => ({
  marginTop: '30px',
  fontSize: '1.5rem',
  padding: '10px 20px',
  backgroundColor: '#ff0066',
  color: 'white',
  borderRadius: '50px',
  fontWeight: 'bold',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

export const NotFound = () => {
  return (
    <NotFoundContainer>
      <Title variant="h1">404 - Not Found!</Title>
      <Subtitle variant="h2">Ahan!!! Where to?</Subtitle>
      <HomeButton variant="contained" href="/user">
        Go Back Home
      </HomeButton>
    </NotFoundContainer>
  );
};

