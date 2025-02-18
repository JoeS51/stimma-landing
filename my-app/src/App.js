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
} from '@mui/material';
import icon1 from './assets/Icon.png';
import icon2 from './assets/Icon2.png';
import icon3 from './assets/Icon3.png';
import logo from './assets/logo_top.png';
import testimonial from './assets/Testimonials.png';
import logo2 from './assets/logo_bottom.png';
import iphone2 from './assets/iphone2.png';
import banner from './assets/banner.png';
import { useState } from 'react';

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
      minHeight: '100vh'
    }}>
      <Container maxWidth={false} disableGutters sx={{ flex: 1 }}>
        {/* Main content section */}
        <Container maxWidth="xl">
          <Box display="flex" justifyContent="space-between" alignItems="center" py={2} px={4}>
            <img src={logo} alt="Stimma Logo" style={{ width: '300px', height: 'auto' }} />
            <Box>
              {/* <Button color="inherit">Contact</Button>
                          <Button variant="contained" sx={{ ml: 2, borderRadius: '20px' }}>
                              How it works
                          </Button> */}
            </Box>
          </Box>
        </Container>

        <Container maxWidth="xl" sx={{ mt: -2 }}>
          {/* Hero section */}
          <Grid container spacing={4} alignItems="flex-start">
            <Grid item xs={12} md={6} sx={{ pl: { xs: 2, md: 4 }, pr: { xs: 2 } }}>
              <Typography
                variant="h2"
                fontWeight="bold"
                gutterBottom
                sx={{
                  fontSize: { xs: '2.5rem', md: '4.5rem' },
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  mt: { xs: 2, md: 8 },
                  pl: { xs: 0, md: 4 },
                  color: '#1E2A37'
                }}
              >
                Lower your <br></br>monthly bills <br></br> without lifting a finger
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                paragraph
                sx={{
                  fontSize: '1.25rem',
                  mt: 10,
                  mb: 4,
                  pl: { xs: 0, md: 5 }
                }}
              >
                We'll call your internet service provider and negotiate a better rate.
                You sit back, relax, and enjoy over <Typography component="span" color="primary" sx={{ fontWeight: 'bold' }}>$500</Typography> in annual savings.
              </Typography>

              <Box display="flex" gap={1} mt={4} sx={{
                pl: { xs: 0, md: 4 },
                flexDirection: { xs: 'column', sm: 'row' }
              }}>
                <StyledTextField
                  placeholder="Email Address"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{ width: { xs: '100%', sm: '60%' } }}
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
                    bgcolor: '#1E2A37',
                    '&:hover': {
                      bgcolor: '#2c3e50'
                    },
                    width: { xs: '100%', sm: 'auto' }
                  }}
                >
                  {isSubmitting ? 'JOINING...' : 'JOIN THE WAITLIST'}
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative', mb: -16 }}>
                <img
                  src={iphone2}
                  alt="iPhone App Demo"
                  style={{
                    width: '100%',
                    maxWidth: '500px',
                    height: 'auto',
                    display: 'block',
                    margin: '0 auto'
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>

        <Container maxWidth="xl" sx={{ mt: 0, mb: 15 }}>
          {/* Features section */}
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
            Features
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
            These are just a few features you'll get using Stimma.
          </Typography>

          <Grid container spacing={4}>
            {[
              {
                icon: icon1,
                title: 'Stop overpaying',
                description: 'ISPs are crafty. They raise your bill—sometimes by more than $50 per month—and hope you won\'t notice. You could always to call the customer service line and haggle for a better deal...',
                bgColor: '#FFE6E6'
              },
              {
                icon: icon2,
                title: 'No savings, no fee',
                description: 'Calling your ISP usually means waiting on hold for hours and hours. Spare yourself and let us deal with your ISP\'s nightmarish customer service system.',
                bgColor: '#E6F4F1'
              },
              {
                icon: icon3,
                title: 'Your AI Negotiator',
                description: 'Nope. We\'re finally leveraging AI to benefit consumers instead of businesses. Our AI agent will do your dirty work.',
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

        {/* <Box sx={{
                  width: '100%',
                  mb: 15,
                  bgcolor: '#D7DFFF',
                  py: 12,
                  px: { xs: 2, md: 0 }
              }}>
                  <Container maxWidth="md">
                      <Box sx={{ textAlign: 'left', maxWidth: '600px' }}>
                          <Typography
                              variant="h2"
                              fontWeight="bold"
                              gutterBottom
                              sx={{
                                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                                  color: '#1E2A37',
                                  mb: 3
                              }}
                          >
                              Start Saving with Stimma Today!
                          </Typography>
                          <Typography
                              variant="body1"
                              sx={{
                                  mb: 4,
                                  fontSize: '1.25rem',
                                  color: '#4B5563'
                              }}
                          >
                              Get notified when your bill is reduced and start saving instantly!
                          </Typography>
                          <Box display="flex" gap={1} mt={4} sx={{
                              flexDirection: { xs: 'column', sm: 'row' }
                          }}>
                              <StyledTextField
                                  placeholder="Email Address"
                                  variant="outlined"
                                  sx={{ flex: 1 }}
                              />
                              <Button
                                  variant="contained"
                                  startIcon={<span>🚀</span>}
                                  sx={{
                                      borderRadius: '30px',
                                      height: '56px',
                                      whiteSpace: 'nowrap',
                                      px: 4,
                                      bgcolor: '#1E2A37',
                                      '&:hover': {
                                          bgcolor: '#2c3e50'
                                      },
                                      width: { xs: '100%', sm: 'auto' }
                                  }}
                              >
                                  JOIN THE WAITLIST
                              </Button>
                          </Box>
                      </Box>
                  </Container>
              </Box> */}

        {/* Banner section */}
        <Box sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mb: 15,
          mt: 20
        }}>
          <img
            src={banner}
            alt="Banner"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
          <Box sx={{
            position: 'absolute',
            top: '80%',
            left: '30%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            maxWidth: '800px',
            px: 2
          }}>
            <Box display="flex" gap={1} sx={{
              flexDirection: { xs: 'column', sm: 'row' }
            }}>
              <StyledTextField
                placeholder="Email Address"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ flex: 1 }}
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
                  bgcolor: '#1E2A37',
                  '&:hover': {
                    bgcolor: '#2c3e50'
                  },
                  width: { xs: '100%', sm: 'auto' }
                }}
              >
                {isSubmitting ? 'JOINING...' : 'JOIN THE WAITLIST'}
              </Button>
            </Box>
          </Box>
        </Box>

        <Container maxWidth="xl" sx={{ mb: 15 }}>
          {/* Testimonial section */}
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <img
              src={testimonial}
              alt="Customer Testimonial"
              style={{
                width: '100%',
                maxWidth: '800px',
                height: 'auto',
                borderRadius: '12px',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)'
              }}
            />
          </Box>
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
              src={logo2}
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
                {isSubmitting ? 'JOINING...' : 'JOIN THE WAITLIST'}
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
