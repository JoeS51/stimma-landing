import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  styled,
  keyframes,
} from '@mui/material';
import icon1 from './assets/Icon.png';
import icon2 from './assets/Icon2.png';
import icon3 from './assets/Icon3.png';
import logo from './assets/logo_top.png';
import testimonial from './assets/Testimonials.png';
import logo2 from './assets/logo_bottom.png';
import iphone2 from './assets/iphone2.png';
import banner from './assets/banner.png';
import banner2 from './assets/banner3.png'
import leigh from './assets/Leigh.png';
import bg from './assets/bg.png';
import mark from './assets/Mark.png';
import LeighQuote from './assets/LeighQuote.png';
import MarkQuote from './assets/MarkQuote.png';
import phone from './assets/HalfPhone.png';
import new_logo from './assets/new_logo.png';

import { useState, useRef } from 'react';

const pulseEffect = keyframes`
  0% {
    transform: scale(1);
    text-shadow: 0 0 0 rgba(255, 255, 255, 0);
  }
  50% {
    transform: scale(1.05);
    text-shadow: 0 0 20px rgba(144, 238, 144, 0.7);
  }
  100% {
    transform: scale(1);
    text-shadow: 0 0 0 rgba(255, 255, 255, 0);
  }
`;

const AnimatedTypography = styled(Typography)(({ theme }) => ({
  animation: `${pulseEffect} 2s ease-in-out infinite`,
  display: 'inline-block',
}));

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    backgroundColor: 'white',
  },
  width: '100%',
});

export default function App() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const emailInputRef = useRef(null);

  const handleSubmit = async (emailValue) => {
    if (!emailValue || isSubmitting) return;

    setIsSubmitting(true);
    try {
      await fetch('https://script.google.com/macros/s/AKfycbwrfQaaeyBizYJ8Nce5lVFMDen5U8ESLgbJ8VVFeGZSPgbCsePo6U-JhaB4mzQmJS6JGw/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailValue }),
      });

      alert('Thank you for joining the waitlist!');
      setEmail('');
    } catch (error) {
      alert('Sorry, something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      overflowX: 'hidden',
      position: 'relative',
    }}>
      <Container maxWidth={false} disableGutters sx={{ flex: 1 }}>
        {/* Hero Section with Purple Background */}
        <Box sx={{
          bgcolor: '#4F46E5',
          color: 'white',
          py: { xs: 4, md: 8 },
          mb: 4,
          backgroundImage: `url(${bg})`,
          width: '100%',
          minHeight: '90vh',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          overflow: 'hidden',
        }}>
          <Container maxWidth="xl" sx={{ px: { xs: 2, md: 3 } }}>
            {/* Navbar */}
            <Box sx={{
              mb: { xs: 2, md: 4 },
              mt: { xs: -6, md: -8 },
              ml: { xs: -7, md: -2 }
            }}>
              <img
                src={new_logo}
                alt="Stimma Logo"
                style={{
                  width: '300px',
                  height: 'auto',
                }}
              />
            </Box>

            <Grid container spacing={4} alignItems="center" sx={{
              mt: { xs: 0, md: -15 }  // Added negative margin-top for desktop
            }}>
              <Grid item xs={12} md={6}>
                <Box sx={{ position: 'relative' }}>
                  <AnimatedTypography
                    variant="h1"
                    fontWeight="bold"
                    sx={{
                      fontSize: { xs: '3.5rem', md: '6rem' },
                      lineHeight: 1,
                      mb: { xs: 7, md: 10 },
                      mt: { xs: 2, md: -4 },
                      ml: { xs: 0, md: 5 },
                      color: 'white',
                      position: 'relative',
                    }}
                  >
                    You're paying too much!
                  </AnimatedTypography>
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: { xs: '30px', md: '35px' },
                      left: { xs: 0, md: '40px' },
                      width: '140px',
                      height: '4px',
                      backgroundColor: 'rgb(104, 185, 239)',
                    }}
                  />
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    mb: { xs: 7, md: 10 },
                    ml: { xs: 0, md: 5 },
                    maxWidth: '600px',
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                    lineHeight: 1.5,
                    color: 'white'
                  }}
                >
                  Stimma calls your internet service provider and negotiates a better rate on your monthly bill. You sit back, relax, and enjoy hundreds in annual savings.
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => {
                    emailInputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                  sx={{
                    bgcolor: '#FFD700',
                    color: '#000',
                    borderRadius: '8px',
                    px: 4,
                    ml: { xs: 0, md: 5 },
                    mb: { xs: -4, md: 0 },
                    py: 1.5,
                    fontSize: '1rem',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    '&:hover': {
                      bgcolor: '#FFE44D'
                    }
                  }}
                >
                  GET STARTED
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{
                  position: 'relative',
                  height: 'auto',
                  mt: { xs: 2, md: 0 },
                  px: { xs: 1, md: 0 }
                }}>
                  {/* Mobile View */}
                  <Box sx={{
                    display: { xs: 'flex', md: 'none' },
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2
                  }}>
                    <img
                      src={LeighQuote}
                      alt="Customer Quote"
                      style={{
                        width: '100%',
                        maxWidth: '600px',
                        height: 'auto',
                      }}
                    />
                    <img
                      src={leigh}
                      alt="Customer"
                      style={{
                        width: '150px',
                        height: '150px',
                        borderRadius: '50%',
                        marginTop: '-100px',
                      }}
                    />
                  </Box>

                  {/* Desktop View */}
                  <Box sx={{
                    display: { xs: 'none', md: 'flex' },
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 0
                  }}>
                    <Box sx={{
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0,
                      justifyContent: 'center',
                      mt: 12
                    }}>
                      <img
                        src={leigh}
                        alt="Customer"
                        style={{
                          width: '250px',
                          height: '250px',
                          borderRadius: '50%',
                          marginRight: '-50px',
                          position: 'relative',
                          zIndex: 1,
                          transform: 'translateY(-60px)',
                        }}
                      />
                      <img
                        src={LeighQuote}
                        alt="Customer Quote"
                        style={{
                          width: '600px',
                          height: 'auto',
                        }}
                      />
                    </Box>

                    <Box sx={{
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0,
                      justifyContent: 'center',
                      mt: -8,
                      ml: -24
                    }}>
                      <img
                        src={MarkQuote}
                        alt="Customer Quote"
                        style={{
                          width: '700px',
                          height: 'auto',
                        }}
                      />
                      <img
                        src={mark}
                        alt="Customer"
                        style={{
                          width: '250px',
                          height: '250px',
                          borderRadius: '50%',
                          marginLeft: '-50px',
                          position: 'relative',
                          zIndex: 1,
                          transform: 'translateY(-60px)',
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Main content section */}
        <Container maxWidth="xl" sx={{ mt: 20, mb: 15 }}>
          {/* How It Works section */}
          <Typography
            variant="h2"
            textAlign="center"
            fontWeight="bold"
            sx={{ mb: 2 }}
          >
            How It Works
          </Typography>

          <Typography
            variant="h5"
            textAlign="center"
            sx={{
              mb: 15,
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            Who knew dealing with your internet provider could be SO easy?
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {[
              {
                number: '1',
                title: 'Grab a copy of your bill',
                description: 'Take a picture, take a screenshot, download a PDF—whatever works.'
              },
              {
                number: '2',
                title: 'Upload securely to Stimma',
                description: 'Our system is secure and encrypted, and we\'ll never share your information.'
              },
              {
                number: '3',
                title: 'Stimma calls your provider',
                description: 'Don\'t worry—we never downgrade your service level!'
              },
              {
                number: '4',
                title: 'Enjoy the savings!',
                description: 'Once the negotiation is done, we\'ll text you the good news.'
              }
            ].map((step, index) => (
              <Grid item xs={12} md={3} key={index}>
                <Box
                  sx={{
                    textAlign: 'center',
                    transform: 'translateY(0)',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-10px)'
                    }
                  }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      color: '#4F46E5',
                      fontWeight: 'bold',
                      mb: 2,
                      fontSize: '3.5rem'
                    }}
                  >
                    {step.number}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 'bold',
                      mb: 2
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      maxWidth: '250px',
                      mx: 'auto'
                    }}
                  >
                    {step.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Typography
            variant="h6"
            textAlign="center"
            sx={{
              mt: 15,
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            That's it. Whenever you need help with another bill negotiation, we'll be here.
          </Typography>
        </Container>

        {/* Try it free section */}
        <Container maxWidth="xl" sx={{ mt: 0, mb: 15 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                fontWeight="bold"
                sx={{
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  lineHeight: 1.2,
                  mb: 3,
                  ml: 5,
                }}
              >
                Try it FREE for a limited time
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mb: 4,
                  maxWidth: '500px',
                  color: 'text.secondary',
                  ml: 5,
                }}
              >
                We are offering our service to beta users for free! Enter your email address below to get started.
              </Typography>

              <Box sx={{ display: 'flex', gap: 1, maxWidth: '600px', ml: 5 }}>
                <StyledTextField
                  placeholder="Email Address"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  ref={emailInputRef}
                />
                <Button
                  variant="contained"
                  onClick={() => handleSubmit(email)}
                  disabled={isSubmitting}
                  sx={{
                    borderRadius: '30px',
                    height: '56px',
                    whiteSpace: 'nowrap',
                    px: 4,
                    bgcolor: '#CBD5E1',
                    color: '#1E2A37',
                    '&:hover': {
                      bgcolor: '#94A3B8'
                    },
                    fontWeight: 'bold'
                  }}
                >
                  🚀 TRY IT FREE
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <img
                  src={phone}
                  alt="App Screenshot"
                  style={{
                    maxWidth: '60%',
                    height: 'auto'
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* Features section */}
        <Container maxWidth="xl" sx={{ mt: 0, mb: 15 }}>
          {/* Why Try Stimma section content */}
          <Typography
            variant="h3"
            textAlign="center"
            fontWeight="bold"
            gutterBottom
            sx={{
              fontSize: '2.5rem',
              mb: 2
            }}
          >
            Why Try Stimma
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            color="text.secondary"
            sx={{
              mb: 8,
              maxWidth: '600px',
              mx: 'auto',
              fontSize: '1.1rem'
            }}
          >
          </Typography>

          <Grid container spacing={4}>
            {[
              {
                icon: icon1,
                title: 'Stop overpaying',
                description: 'ISPs are crafty. They raise your bill—sometimes by more than $50 per month—and hope you won\'t notice.',
                bgColor: '#FFE6E6'
              },
              {
                icon: icon2,
                title: 'No more waiting on hold',
                description: 'Calling your ISP usually means waiting on hold for hours and hours. Spare yourself and let us deal with your ISP\'s nightmarish customer service system.',
                bgColor: '#E6F4F1'
              },
              {
                icon: icon3,
                title: 'Your AI Negotiator',
                description: 'We\'re finally leveraging AI to benefit consumers instead of businesses. Our AI agent will do your dirty work.',
                bgColor: '#FFF6E6'
              }
            ].map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{
                  height: '100%',
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                  bgcolor: 'white',
                  textAlign: 'center',
                  borderRadius: '16px',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.03)',
                    boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.15)',
                  }
                }}>
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '16px',
                        bgcolor: feature.bgColor,
                        mb: 3,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto'
                      }}
                    >
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        style={{
                          width: '40px',
                          height: '40px'
                        }}
                      />
                    </Box>
                    <Typography
                      variant="h5"
                      gutterBottom
                      fontWeight="bold"
                      sx={{
                        mb: 2,
                        color: '#1E2A37'
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{
                        fontSize: '1rem',
                        lineHeight: 1.6
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>

      {/* Footer section */}
      <Box sx={{
        bgcolor: '#1E2A37',
        py: 8,
        px: { xs: 2, md: 0 }
      }}>
        <Container maxWidth="xl">
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', md: 'center' },
            width: '100%',
            gap: 4
          }}>
            <img
              src={new_logo}
              alt="Stimma Logo"
              style={{
                width: '300px',
                height: 'auto'
              }}
            />
            <Box display="flex" gap={1} sx={{
              flex: 1,
              justifyContent: 'flex-end',
              flexDirection: { xs: 'column', sm: 'row' },
              width: { xs: '100%', sm: 'auto' }
            }}>
              <StyledTextField
                placeholder="Email Address"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ maxWidth: '700px' }}
              />
              <Button
                variant="contained"
                onClick={() => handleSubmit(email)}
                disabled={isSubmitting}
                sx={{
                  borderRadius: '30px',
                  height: '56px',
                  whiteSpace: 'nowrap',
                  px: 4,
                  bgcolor: '#CBD5E1',
                  color: '#1E2A37',
                  '&:hover': {
                    bgcolor: '#94A3B8'
                  },
                  fontWeight: 'bold',
                  width: { xs: '100%', sm: 'auto' }
                }}
              >
                {isSubmitting ? 'JOINING...' : '🚀 TRY IT FREE'}
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
