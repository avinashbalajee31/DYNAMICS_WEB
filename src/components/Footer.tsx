import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const footerStyle: React.CSSProperties = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px 0', // Reduced padding
  textAlign: 'center',
};

const containerStyle: React.CSSProperties = {
  maxWidth: '500px', // Set maximum width to 500px for mobile responsiveness
  margin: '0 auto',
  padding: '0 20px', // Added padding
  display: 'flex',
  flexDirection: 'column', // Arrange items in a column for mobile
  alignItems: 'center', // Align items to the center horizontally
};

const iconContainerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center', // Center icons horizontally
  marginBottom: '5px', // Reduced space between icons and links
};

const iconStyle: React.CSSProperties = {
  fontSize: '1.5rem', // Reduced icon size
  margin: '0 10px',
  color: '#B40101',
};

const linkStyle: React.CSSProperties = {
  color: 'white',
  textDecoration: 'none',
  margin: '5px 0', // Adjust margin for better spacing
  padding: '5px 10px', // Added padding
};

function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p>
          &copy; 2024      <span className="font-black_ops_one self-center md:text-1xl text-xl whitespace-nowrap text-yellow-300">DYNAMICS 101 MMA</span>
        </p>
        <div style={iconContainerStyle}>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><InstagramIcon style={iconStyle} /></a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><YouTubeIcon style={iconStyle} /></a>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer"><WhatsAppIcon style={iconStyle} /></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><LinkedInIcon style={iconStyle} /></a>
        </div>
        <div>
          <a href="/refund-cancellation" style={linkStyle}>R&C Policy</a>
          <a href="/terms-of-use" style={linkStyle}>Terms of Use</a>
          <a href="/privacy-policy" style={linkStyle}>Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;