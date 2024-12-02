// Navbar.styles.ts
import { styled } from "@mui/material/styles";

// Styles for the Navbar
export const NavBarStyle = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%", // Ensures it takes up the full width of the screen
  height: "70px",
  padding: "0 20px", // Padding inside the navbar
  background: "linear-gradient(135deg, #00b4d8, #0096c7)", // Gradient background
  color: "#FFFFFF",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  zIndex: 1000,
  boxSizing: "border-box", // Includes padding and border in width/height calculations
  overflow: "hidden", // Prevents any child elements from overflowing
  fontFamily: "'Poppins', sans-serif",
  transition: "background-color 0.3s ease", // Smooth background transition
}));

// Styles for the Logo
export const Logo = styled("div")(() => ({
  fontSize: "1.8rem",
  fontWeight: "700", // Make logo bold
  letterSpacing: "1.5px",
  whiteSpace: "nowrap", // Prevents wrapping of text
  textTransform: "uppercase", // Uppercase letters for a bold look
  cursor: "pointer", // Makes the logo clickable
  transition: "transform 0.2s ease-in-out",
  "&:hover": {
    transform: "scale(1.1)", // Slightly enlarge logo on hover
  },
}));

// Styles for the NavLinks
export const NavLinks = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  fontSize: "1.1rem",
  fontWeight: "500", // Slightly lighter font weight for links
  transition: "transform 0.3s ease", // Smooth transition for scaling
  "& div": {
    cursor: "pointer",
    padding: "8px 15px",
    borderRadius: "5px",
    transition:
      "background-color 0.3s ease, transform 0.2s ease, color 0.3s ease",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      transform: "scale(1.1)",
      color: "#00b4d8", // Change color on hover
    },
  },
}));

// Styles for responsive navbar links (hidden on mobile)
export const ResponsiveNavLinks = styled("div")(() => ({
  display: "flex",
  "@media (max-width: 768px)": {
    display: "none", // Hide navigation links on smaller screens
  },
}));

// Styles for the Mobile Menu Icon (only visible on mobile)
export const MobileMenuIcon = styled("div")(() => ({
  display: "none",
  fontSize: "1.8rem",
  cursor: "pointer",
  color: "#FFFFFF",
  "@media (max-width: 768px)": {
    display: "block", // Show menu icon only on smaller screens
  },
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "rotate(90deg)", // Add some rotation to the icon on hover
  },
}));
