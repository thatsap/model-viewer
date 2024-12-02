import { styled } from "@mui/material/styles";

// Sidebar style
export const SideBarStyle = styled("div", {
  shouldForwardProp: (prop) => prop !== "isOpen",
})<{ isOpen: boolean }>(({ isOpen }) => ({
  alignItems: "center",
  backgroundColor: "#34495E",
  boxShadow: "-2px 0px 10px rgba(0, 0, 0, 0.3)",
  color: "white",
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  paddingTop: "20px",
  position: "fixed",
  right: 0, // Sidebar on the right edge
  width: isOpen ? "250px" : "20px",
  top: "70px", // Below the navbar
  transition: "width 0.3s ease",
  zIndex: 999,
}));

// Toggle button style
export const ToggleButton = styled("button", {
  shouldForwardProp: (prop) => prop !== "isOpen",
})<{ isOpen: boolean }>(({ isOpen }) => ({
  border: "none",
  color: "white",
  cursor: "pointer",
  fontSize: "1.5rem",
  position: "absolute",
  top: "10px",
  left: isOpen ? "-15px" : "-15px",
  transform: "translateY(0)",
  height: "40px",
  width: "40px",
  borderRadius: "50%",
  backgroundColor: "#2C3E50",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "left 0.3s ease, transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

// Menu item style
export const MenuItem = styled("div", {
  shouldForwardProp: (prop) => prop !== "isOpen",
})<{ isOpen: boolean }>(({ isOpen }) => ({
  "&:hover": {
    backgroundColor: "#1ABC9C",
    color: "white",
  },
  cursor: "pointer",
  fontSize: "1rem",
  margin: "15px 0",
  padding: isOpen ? "10px 20px" : "10px",
  textAlign: "left",
  width: "100%",
  boxSizing: "border-box",
  borderRadius: "5px",
  transition: "background-color 0.3s ease, color 0.3s ease",
  overflow: "hidden",
  whiteSpace: "nowrap",
}));

// Menu label style
export const MenuLabel = styled("span", {
  shouldForwardProp: (prop) => prop !== "isOpen",
})<{ isOpen: boolean }>(({ isOpen }) => ({
  display: isOpen ? "inline" : "none",
  marginLeft: "10px",
}));
