import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const footerStyle: React.CSSProperties = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px 0',
  textAlign: 'center',
  width: '100%',
  position: 'fixed',
  bottom: 0,
  left: 0,
};

const containerStyle: React.CSSProperties = {
  maxWidth: '960px',
  margin: '0 auto',
  padding: '0 20px', // Added padding
};

const iconStyle: React.CSSProperties = {
  fontSize: '2rem',
  margin: '0 10px',
  color: 'yellow',
};

const linkStyle: React.CSSProperties = {
  color: 'white',
  textDecoration: 'none',
  margin: '0 10px',
  padding: '5px 10px', // Added padding
};

function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p>
          &copy; 2024 <span style={{ color: 'yellow' }}>Dynamics101</span>
        </p>
        <div>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><InstagramIcon style={iconStyle} /></a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><YouTubeIcon style={iconStyle} /></a>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer"><WhatsAppIcon style={iconStyle} /></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><LinkedInIcon style={iconStyle} /></a>
        </div>
        <div>
          <a href="/refund-cancellation" style={linkStyle}>Refund and Cancellation Policy</a>
          <a href="/terms-of-use" style={linkStyle}>Terms of Use</a>
          <a href="/privacy-policy" style={linkStyle}>Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
