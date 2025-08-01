// src/App.js
import React, { useState, useRef } from "react";
import Navbar from "./components/NavBar";
import emailjs from "@emailjs/browser";
import { FaDatabase, FaGithub } from "react-icons/fa";
import { SlCup } from "react-icons/sl";
import "./App.css";

function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_36807ce", // ✅ Replace with your actual EmailJS Service ID
        "template_o9lftpn", // ✅ Replace with your actual Template ID
        form.current,
        "u7qJIt3--IWo-Z5J5" // ✅ Replace with your actual Public Key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  const [activeTab, setActiveTab] = useState("Web");

  const projects = {
    Software: [
      {
        title: "Secure Chat Application",
        description:
          "End-to-end encrypted chat app built using Java, JavaFX for UI, and AES encryption for secure communication over sockets.",
        tags: ["Java", "JavaFX", "AES Encryption", "Sockets"],
        icons: <FaDatabase />,
        projectLink: "https://github.com/suraja9/java-chat-app",
        GithubIcon: <FaGithub size={30} />,
      },
    ],
    Web: [
      {
        title: "SurajPortfolio.site – Developer Portfolio",
        description:
          "A modern, responsive portfolio site to showcase my projects, resume, and skills in web development, AI, and software engineering. Built with a clean UI and recruiter-focused structure.",
        tags: ["React js", "Tailwind CSS", " GitHub Integration", "Hosting"],
        icons: <FaDatabase size={25} />,
        projectLink: "https://github.com/suraja9/College-Management-System",
        liveLink: "https://surajportfolio.site/",
        GithubIcon: <FaGithub size={30} />,
      },
      {
        title: "SmartCampus: Role-Based College Manager",
        description:
          "A full-stack college management system with role-based dashboards for admins, teachers, and students. It tracks attendance, visualizes subject-wise analytics, and simplifies academic operations.",
        tags: [
          "React js",
          "Node js",
          "Exress",
          "MYSQL",
          "phpmyadmin",
          "Authentication & Authorization",
        ],
        icons: <FaDatabase size={25} />,
        projectLink: "https://github.com/suraja9/College-Management-System",
        liveLink:
          "https://mediumseagreen-caterpillar-399085.hostingersite.com/",
        GithubIcon: <FaGithub size={30} />,
      },
      {
        title: "TheInnerPower.store E-commerce Website",
        description:
          "A fully functional e-commerce store built using WordPress, Elementor, and WooCommerce. Designed for seamless product browsing, secure checkout, and mobile responsiveness. Includes payment integration and inventory management.",
        tags: [
          "WordPress",
          "Elementor",
          "WooCommerce",
          "Payment Integration",
          "Responsive Design",
          "SEO Optimization",
        ],
        icons: <FaDatabase size={25} />,
        liveLink:
          "https://theinnerpower.store/",
      },
      {
        title: "SkyCast: Real-Time Weather App",
        description:
          "A sleek, location-based weather app that fetches real-time temperature, humidity, wind speed, and conditions using the OpenWeatherMap API. Designed for speed, clarity, and responsiveness.",
        tags: [
          "React js",
          "Tailwind CSS",
          "OpenWeatherMap API",
          "Geolocation",
          "Responsive UI",
          "API Integration",
        ],
        icons: <FaDatabase size={25} />,
        // projectLink: "https://github.com/suraja9/College-Management-System",
        // liveLink: "https://suraj-student-mgmt.vercel.app",
        GithubIcon: <FaGithub size={30} />,
      },
      {
        title: "ASIMolfetta Official Website",
        description:
          "Developed a full-featured, multilingual website for an Italian organization using WordPress. The site includes dynamic sections, responsive layouts, and SEO-friendly structure — built from scratch with AI-assisted workflows.",
        tags: [
          "WordPress",
          "Multilingual Setup",
          "UI/UX Design",
          "AI-Assisted Development",
        ],
        icons: <FaDatabase size={25} />,
        liveLink: "https://www.asimolfetta.it/",
      },
    ],
    AI: [
      {
        title: "FaceID AI: Real-Time Face Recognition App",
        description:
          "Built a real-time face detection and recognition system using deep learning models. It uses webcam input to identify known faces with high accuracy through a Python-Flask backend.",
        tags: ["Python", "Flask", " OpenCV", "dlib", "face-recognition"],
        icons: <FaDatabase />,
        projectLink: "https://github.com/suraja9/AI-Face-recognition",
        GithubIcon: <FaGithub size={30} />,
      },
    ],
  };
  return (
    <>
      <Navbar />
      <section className="homesection" id="home">
        <div className="home-1st-sec">
          <p className="home-welcome-p">👋 Welcome to my portfolio</p>
          <h1>
            Hi, I'm <span>Suraj Ali</span>
          </h1>
          <h3>Full-Stack Developer | MERN & Java | AI Projects</h3>
          <p>
            3+ years of experience building real-world AI & web apps. Delivered
            50+ freelance projects, completed 2 internships, and built scalable
            systems using React, Node.js, Java, and Python.
          </p>
          <div className="home-section-button">
            <a className="home-view-button" href="#projects">
              Explore My Work{" "}
            </a>
            <a
              href="/Suraj.pdf"
              className="home-download-button"
              download
            >
              Download Resume{" "}
            </a>
          </div>
          <div className="home-section-button home-section-icon-box-main">
            <a href="https://github.com/suraja9/" target="_blank">
              <i className="fab fa-github" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/suraj-ali-6894a024a/"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin-in" aria-hidden="true"></i>
            </a>
            <a
              href="mailto:alisuraj998@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-envelope" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </section>
      <section className="about-me-section" id="about">
        <a href="#home" className="scroll-to-top">
          <i class="fa-solid fa-arrow-up"></i>
        </a>
        <h1>
          About <span>Me</span>
        </h1>
        <p className="about-1-p">
          I’m a full-stack developer crafting scalable AI and web solutions
          using MERN, Java, and Python.
        </p>
        <div className="about-me-main-box ">
          <div className="about-left-box">
            <div className="about-left-1st-box Hovering-box">
              <h2>Professional Summary</h2>
              <p>
                I’m a software engineer with 3+ years of experience building
                production-grade applications across AI, web, and backend
                systems. My freelance work includes 20+ completed projects from
                E-commerce platforms and real-time dashboards to AI-driven tools
                using React.js, Node.js, Java, and Python.
              </p>
              <p>
                During my internships at NIELIT and IOCL, I worked on real-world
                applications involving Spring Boot, Firebase, MongoDB, and REST
                APIs. I’ve consistently delivered fast, scalable, and
                maintainable software tailored to client needs. I'm currently
                focused on AI-powered tools, backend engineering, and full-stack
                development.
              </p>
            </div>
            <div className="about-left-2nd-box Hovering-box">
              <h2>Technical Skills</h2>
              <p>
                <span>React js</span>
                <span>Java</span>
                <span>Node js</span>
                <span>WordPress</span>
                <span>Python</span>
                <span>Javascript</span>
                <span>HTML5</span>
                <span>Git</span>
                <span>MYSQL</span>
                <span>Css</span>
                <span>Express js</span>
                <span>Firebase</span>
                <span>Figma</span>
              </p>
            </div>
          </div>
          <div className="about-right-main-box">
            <div className="about-right-1st">
              <div className="about-right-box Hovering-box">
                <i class="fa-solid fa-calendar"></i>
                <h3>3+ Years Freelancing</h3>
                <p>Successfully delivered 50+ projects</p>
              </div>
              <div className="about-right-box Hovering-box">
                <i class="fa-solid fa-code" aria-hidden="true"></i>
                <h3>Two Internships</h3>
                <p>NIELIT & IOCL experience</p>
              </div>
            </div>
            <div className="about-right-2nd">
              <div className="about-right-box Hovering-box">
                <i class="fa-solid fa-certificate" aria-hidden="true"></i>
                <h3>AI Project Developer</h3>
                <p>Built real-time apps with Python and Flask.</p>
              </div>
              <div className="about-right-box Hovering-box">
                <i class="fa-solid fa-certificate" aria-hidden="true"></i>
                <h3>Client Satisfaction</h3>
                <p>98% positive feedback rate</p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-small-part">
          <div className="about-small-part-box">
            <span>20+</span>
            <br />
            Projects Completed
          </div>
          <div className="about-small-part-box">
            <span>3+</span>
            <br />
            Years Experience
          </div>
          <div className="about-small-part-box">
            <span>98%</span>
            <br />
            Client Satisfaction
          </div>
        </div>
      </section>
      <section className="my-projects-section" id="projects">
        <h1>
          My <span>Projects</span>
        </h1>
        <p>A showcase of my work across different technologies and platforms</p>

        <div className="tabs-wrapper">
          <div className="tabs-header">
            {["Web", "Software", "AI"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`tab-button ${activeTab === tab ? "active" : ""}`}
              >
                {tab} Projects
              </button>
            ))}
          </div>

          <div className="tabs-content">
            {projects[activeTab].map((project, index) => (
              <div key={index} className="project-card Hovering-box">
                <div className="project-card-icon">
                  <div className="project-card-icon-left">{project.icons}</div>
                  <div className="project-card-icon-right">
                    {project.projectLink && (
                      <a
                        href={project.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-icon-link"
                      >
                        {project.GithubIcon}
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                {(project.liveLink || project.projectLink) && (
                  <div className="project-preview">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="preview-button"
                      >
                        🔗 Live Preview
                      </a>
                    )}
                    {project.projectLink && (
                      <a
                        href={project.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-preview-button"
                      >
                        Github Link
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="Experience-section" id="Experience">
        <h1>
          Experience & <span>Achievements</span>
        </h1>
        <p>My professional journey and accomplishments</p>
        <h3>Professional Experience</h3>
        <div className="experience-box-1">
          <div className="experience-1st-split-left ">
            <i class="fa-solid fa-display" aria-hidden="true"></i>
          </div>
          <div className="experience-1st-split-right">
            <div className="experience-primary-1">
              <div className="experience-secondary-left">
                Software Development Intern
              </div>
              <div className="experience-secondary-right">
                <p>
                  <span>Internship</span>
                  <i class="fa-solid fa-calendar" aria-hidden="true"></i>Jun
                  2023 - Aug 2023
                </p>
              </div>
            </div>
            <div className="experience-primary-2">
              <h4>
                NIELIT (National Institute of Electronics & Information
                Technology)
              </h4>
              <p>
                Worked on web development projects using modern frameworks.
                Gained experience in full-stack development and database
                management.
              </p>
              <div className="experience-skill-list">
                <p>
                  <span>React JS</span>
                  <span>Node JS</span>
                  <span>Mongo DB</span>
                  <span>Express JS</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="experience-box-1">
          <div className="experience-1st-split-left ">
            <i class="fa-solid fa-display" aria-hidden="true"></i>
          </div>
          <div className="experience-1st-split-right">
            <div className="experience-primary-1">
              <div className="experience-secondary-left">
                IT Development Intern
              </div>
              <div className="experience-secondary-right">
                <p>
                  <span>Internship</span>
                  <i class="fa-solid fa-calendar" aria-hidden="true"></i>Jun
                  2023 - Aug 2023
                </p>
              </div>
            </div>
            <div className="experience-primary-2">
              <h4>IOCL (Indian Oil Corporation Limited)</h4>
              <p>
                Contributed to enterprise-level applications and learned about
                large-scale software architecture and deployment strategies.
              </p>
              <div className="experience-skill-list">
                <p>
                  <span>JAVA</span>
                  <span>SpringBoot</span>
                  <span>Firebase</span>
                  <span>Rest API</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="experience-box-1">
          <div className="experience-1st-split-left ">
            <i class="fa-solid fa-display" aria-hidden="true"></i>
          </div>
          <div className="experience-1st-split-right">
            <div className="experience-primary-1">
              <div className="experience-secondary-left">
                Full Stack Developer
              </div>
              <div className="experience-secondary-right">
                <p>
                  <span>Internship</span>
                  <i class="fa-solid fa-calendar" aria-hidden="true"></i>Dec
                  2022 - Mar 2025
                </p>
              </div>
            </div>
            <div className="experience-primary-2">
              <h4>Independent Freelancer</h4>
              <p>
                Successfully delivered 50+ projects including WordPress sites,
                MERN stack applications, and Java desktop applications for
                clients worldwide.
              </p>
              <div className="experience-skill-list">
                <p>
                  <span>Wordpress</span>
                  <span>React JS</span>
                  <span>Java</span>
                  <span>PHP</span>
                  <span>JavaScript</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="key-achievement-section">
        <div className="key-acheivement-main">
          <h3>Key Achievements</h3>
          <div className="key-achievement-line">
            <div className="about-small-part-box">
              <span>20+</span>
              <br />
              Projects Completed
            </div>
            <div className="about-small-part-box">
              <span>3+</span>
              <br />
              Years Experience
            </div>
            <div className="about-small-part-box">
              <span>98%</span>
              <br />
              Client Satisfaction
            </div>
          </div>
        </div>
      </section>
      <section className="Testimonial-section" id="Testimonials">
        <h1>
          Client <span>Testimonials</span>
        </h1>
        <p>What my clients say about working with me</p>
        <div className="testimonial-main-section">
          <div className="person-testimonial Hovering-box">
            <div className="rating-stars">
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
            </div>
            <p>
              "Suraj ha interpretato perfettamente ciò che volevo nella
              costruzione del sito web, rispettando logo e colori, creando tutte
              le funzionalità richieste e facendo il tutto con estrema velocità
              data la portata del progetto. Sicuramente si tratta di un
              professionista che merita un plauso per la qualità del suo lavoro.
              Grazie"
            </p>
            <div className="testimonial-person-detail">
              <img
                src="https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2247726673.jpg"
                alt="testimonial-image1"
              />
              <div className="testimonial-person-name">
                <h3>ALEN</h3>
                {/* <p>From FIVERR</p> */}
              </div>
            </div>
          </div>
          <div className="person-testimonial Hovering-box">
            <div className="rating-stars">
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
            </div>
            <p>
              "Working with Suraj was a game-changer for our brand. He took our
              vague ideas and turned them into a fully functional e-commerce
              website that looks great and works flawlessly on mobile. His
              attention to detail, responsiveness, and deep understanding of
              WooCommerce saved us weeks of work. Highly recommend him if you
              want results without hand-holding."
            </p>
            <div className="testimonial-person-detail">
              <img
                src="https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2247726673.jpg"
                alt="testimonial-image1"
              />
              <div className="testimonial-person-name">
                <h3>gregory</h3>
                {/* <p>From FIVERR</p> */}
              </div>
            </div>
          </div>
          <div className="person-testimonial Hovering-box">
            <div className="rating-stars">
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
            </div>
            <p>
              "Suraj quickly stood out during his internship at NIELIT. He built
              a full-stack e-commerce app from scratch, independently
              implementing secure authentication and integrating payment
              systems. He’s resourceful, proactive, and always willing to dig
              deep into technical challenges until they’re solved."
            </p>
            <div className="testimonial-person-detail">
              <img
                src="https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2247726673.jpg"
                alt="testimonial-image1"
              />
              <div className="testimonial-person-name">
                <h3>Rahul Sharma</h3>
                {/* <p>From FIVERR</p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="contact-section Testimonial-section "
        id="contact"
        style={{ paddingBottom: "100px" }}
      >
        <h1>
          Get In <span>Touch</span>
        </h1>
        <p>
          Ready to start your next project? Let's discuss how we can work
          together
          <br />
          <br />
          <br />
        </p>
        <div className="contact-form-main">
          <div className="contact-left-side Hovering-box">
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <h2>Send me a message</h2>
              <br />
              <br />
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
              />
              <textarea name="message" placeholder="Your Message" required />
              <button type="submit">Send Message</button>
            </form>
          </div>
          <div className="contact-right-side ">
            <div className="contact-right-1st Hovering-box">
              Contact Information
              <div className="contact-info-box">
                <i class="fa-solid fa-envelope" aria-hidden="true"></i>
                <div className="contact-info-box-right">
                  <p>Email</p>
                  <h4>alisuraj998@gmail.com</h4>
                </div>
              </div>
              <div className="contact-info-box">
                <i class="fa-solid fa-phone" aria-hidden="true"></i>
                <div className="contact-info-box-right">
                  <p>Phone Number</p>
                  <h4>+91 8724823978</h4>
                </div>
              </div>
              <div className="contact-info-box">
                <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
                <div className="contact-info-box-right">
                  <p>Location</p>
                  <h4>
                    Azara Hatkhowapara, Guwahati, Kamrup (Metro), Assam 781017,
                    India
                  </h4>
                </div>
              </div>
            </div>
            <div className="contact-right-2nd Hovering-box">
              <h2>Follow Me</h2>
              <div className="home-section-button home-section-icon-box-main">
                <a href="https://github.com/suraja9/" target="_blank">
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/suraj-ali-6894a024a/"
                  target="_blank"
                >
                  <i class="fa-brands fa-linkedin-in" aria-hidden="true"></i>
                </a>
                <a
                  href="mailto:alisuraj998@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa-solid fa-envelope" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="footer-top">
          <div className="footer-left">
            <h2>Suraj Ali</h2>
            <p>
              Full-stack developer passionate about creating exceptional digital
              experiences. Specializing in WordPress, MERN stack, and Java
              development.
            </p>
          </div>
          <div className="footer-medium">
            Quick links
            <div className="footer-quick-link-1">
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
            </div>
            <div className="footer-quick-link-2">
              <a href="#Experience">Experience</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div className="footer-right">
            <h2>connect</h2>
            <div className="home-section-button home-section-icon-box-main">
              <a href="https://github.com/suraja9/" target="_blank">
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/suraj-ali-6894a024a/"
                target="_blank"
              >
                <i class="fa-brands fa-linkedin-in" aria-hidden="true"></i>
              </a>
              <a
                href="mailto:alisuraj998@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-solid fa-envelope" aria-hidden="true"></i>
              </a>
            </div>
            <p>
              <br />
              📧 alisuraj998@gmail.com
              <br />
              📍 India
              <br />
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Suraj Ali. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
