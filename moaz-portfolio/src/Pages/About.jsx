// src/pages/About.jsx
import React from "react";
import profilePic from "../assets/image.jpg"; // your image path

export default function About() {
  return (
    <div style={styles.wrapper}>
      {/* Left side: profile picture + Facebook button */}
      <div style={styles.left}>
        <img src={profilePic} alt="Muhammad Moaz" style={styles.profilePic} />

        <a
          href="https://www.facebook.com/share/17eWj1djSJ/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.fbButton}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
            alt="Facebook"
            style={styles.fbIcon}
          />
          Visit Facebook
        </a>
      </div>

      {/* Right side: Story */}
      <div style={styles.right}>
        <h1>My Story</h1>
        <p>
          I’m <strong>Muhammad Moaz</strong>, a passionate{" "}
          <strong>Front-End Developer</strong> with solid experience in{" "}
          <strong>React, JSX, JavaScript, HTML, and CSS</strong>. I enjoy
          creating responsive and visually appealing applications that provide
          seamless user experiences.
        </p>
        <p>
          I also have hands-on expertise in <strong>Advanced Python</strong>,
          which allows me to automate tasks, integrate APIs, and bring
          back-end-level logic into my projects. Combining front-end and Python
          gives me a unique edge in full-stack problem-solving.
        </p>
        <p>
          I constantly learn new technologies, frameworks, and best practices to
          improve as a developer. My focus is on writing clean, efficient code
          while crafting modern, creative, and functional interfaces.
        </p>
        <p>
          Outside of programming, I enjoy fitness, reading finance books, and
          exploring the world of stock trading. I also love music — my guitar
          has been my friend for over 3 years. Balancing skills, creativity, and
          learning keeps me inspired to grow both personally and professionally.
        </p>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "center",
    color: "white",
    padding: "40px 20px",
    maxWidth: "1000px",
    margin: "0 auto",
    gap: "40px",
  },
  left: {
    flex: "1 1 250px",
    textAlign: "center",
  },
  profilePic: {
    width: "200px",
    height: "250px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "3px solid #00bcd4",
    boxShadow: "0 0 15px rgba(0, 188, 212, 0.6)",
  },
  fbButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    marginTop: "15px",
    padding: "10px 15px",
    backgroundColor: "#1877f2", // Facebook blue
    color: "white",
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  fbIcon: {
    width: "24px",
    height: "24px",
  },
  fbButtonHover: {
    transform: "scale(1.05)",
    boxShadow: "0 0 15px #1877f2",
  },
  right: {
    flex: "2 1 500px",
    lineHeight: "1.7",
    fontSize: "1rem",
  },
};
