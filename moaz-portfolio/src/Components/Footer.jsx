// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} Muhammad Moaz. All Rights Reserved.</p>
      <p>
        <a href="mailto:eastonexpert@gmail.com" style={styles.link}>Gmail</a> | 
        <a href="tel:03237129229" style={styles.link}> Phone</a>
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: "center",
    padding: "20px",
    marginTop: "50px",
    borderTop: "1px solid #00bcd4",
    color: "white",
    backgroundColor: "#111",
  },
  link: {
    color: "#00bcd4",
    margin: "0 5px",
    textDecoration: "none",
  },
};
