import  { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
 
  Briefcase,
  Send,
  ChevronDown,

  Calendar,
  Zap,
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    // Mouse tracking for interactive effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const skills = [
    { name: "Java", symbol: "☕", level: 92 },
    { name: "Python", symbol: "🐍", level: 95 },
    { name: "React", symbol: "⚛️", level: 95 },
    { name: "TypeScript", symbol: "🟦", level: 90 },
    { name: "MongoDB", symbol: "🍃", level: 80 },
    { name: "MySQL", symbol: "🐬", level: 92 },
    { name: "Tailwind CSS", symbol: "🎨", level: 92 },
    { name: "Django", symbol: "🎸", level: 92 },
    { name: "Spring Boot", symbol: "🌱", level: 92 },
    { name: "Chatbot Development", symbol: "🤖", level: 95 },
  ];

  const projects = [
    {
      title: "Digital Sikh Pustkalya",
      description:
        "This project is a digital library designed to preserve and promote Punjabi literature. It provides an organized collection of Punjabi books that users can browse, search, and read online. The library is built with a user-friendly interface, offering features like book categorization, search functionality, and easy navigation.",
      tech: ["React", "TypeScript", "MongoDb"],
      github: "https://github.com/ridhamjeetkaur/namdhari_library_project",
      live: "https://digitalsikhlibrary.vercel.app/",
      image: "📋",
      gradient: "from-pink-600 to-purple-600",
    },
    {
      title: "Zarexa",
      description:
        "Worked with a client to design and execute a comprehensive digital marketing strategy aimed at boosting online presence and customer engagement. The project included social media management, targeted ad campaigns, SEO optimization, and content creation tailored to the client’s brand identity. By leveraging analytics and performance tracking, the campaign helped increase reach, generate quality leads, and strengthen the client’s digital footprint.",
      tech: ["React", "Typescript", "Tailwind CSS", "MongoDb"],
      github: "https://github.com/ridhamjeetkaur/digital_marketing",
      live: "https://zarexa.online/",
      image: "🛒",
      gradient: "from-cyan-600 to-purple-600",
    },
    {
      title: "Master Ji Bot",
      description:
        "Developed a career guidance web app with an integrated chatbot with two languages punjabi and english. It can predict which career a student can chose based on their query.",
      tech: [
        "Python",
        "Django",
        "Generative AI",
        "Sqlite",
        "HTML",
        "CSS",
        "JS",
        "Bootstrap",
      ],
      github: "https://github.com/ridhamjeetkaur/taraki_proj",
      live: "https://taraki-project.vercel.app/",
      image: "🤖",
      gradient: "from-purple-600 to-blue-600",
    },
    {
      title: "Stream Selector",
      description:
        "The Stream Selector is a career guidance tool designed to help students decide which academic stream to choose after 10th grade. By analyzing students’ interests, strengths, and future career aspirations, it provides personalized recommendations on streams such as Science, Commerce, or Arts. The system serves as a virtual mentor, guiding students toward the most suitable academic path to achieve their goals",
      tech: ["Python", "CSV", "Streamlit"],
      github: "https://github.com/ridhamjeetkaur/stream_selector",
      live: "https://ridhamstreamselector.streamlit.app/",
      image: "📊",
      gradient: "from-blue-600 to-teal-600",
    },
    // {
    //   title: "Social Media Analytics",
    //   description:
    //     "Advanced analytics platform for social media management with real-time metrics, engagement tracking, competitor analysis, and automated reporting features for digital marketers.",
    //   tech: ["React", "Node.js", "MongoDB", "Chart.js", "Redis"],
    //   github: "https://github.com/username/social-analytics",
    //   live: "https://analytics-demo.com",
    //   stars: 98,
    //   forks: 28,
    //   image: "🌤️",
    //   gradient: "from-orange-600 to-red-600",
    // },
    // {
    //   title: "Cryptocurrency Tracker",
    //   description:
    //     "Real-time cryptocurrency tracking application with portfolio management, price alerts, market analysis, news integration, and trading simulation for crypto enthusiasts.",
    //   tech: ["React", "TypeScript", "WebSocket", "CoinGecko API"],
    //   github: "https://github.com/username/crypto-tracker",
    //   live: "https://crypto-demo.com",
    //   stars: 134,
    //   forks: 41,
    //   image: "₿",
    //   gradient: "from-yellow-600 to-orange-600",
    // },
  ];

  const experiences = [
    {
      title: "System Engineer Intern",
      company: "Infosys Limited",
      period: "January 2025 - June 2025",
      description:
        "Worked as a System Engineer Intern at Infosys, where I developed full-stack projects using Java, Spring Boot, MySQL and React with TypeScript. Gained hands-on experience in building scalable APIs, frontend integration, and following Agile development practices.",

      icon: "👨‍💻",
    },
    {
      title: "Full stack Engineer Intern",
      company: "Alert Enterprises",
      period: "July 2024 - August 2024",
      description:
        "Coordinated project tasks, ensuring adherence to engineering standards and regulations. Conducted comprehensive project analyses, identifying and rectifying discrepancies in engineering designs.",

      icon: "🎨",
    },
    {
      title: "AI and Research Trainee",
      company: "Defense Research and Development Organization – Delhi, India",
      period: "July 2023 - August 2023",
      description:
        "Learned and implemented Natural Language Processing tasks like Next Word Prediction and Sentiment Analysis during internship at DRDO. Conducted comparative analysis of various AI models to evaluate performance on real-world language datasets.",
      icon: "🚀",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const FloatingParticles = () => (
    <div className="fixed inset-0 pointer-events-none z-0">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-purple-400/20 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      <FloatingParticles />

      {/* Cursor follower */}
      <div
        className="container-fluid w-4 h-4 bg-purple-500/30 rounded-full pointer-events-none z-50 mix-blend-screen transition-transform duration-100"
        style={{
          transform: `translate(${mousePosition.x - 8}px, ${
            mousePosition.y - 8
          }px)`,
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              ✨ Ridhamjeet's Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              {["home", "about", "experience", "projects", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize transition-all duration-300 hover:scale-110 ${
                      activeSection === item
                        ? "text-purple-400 font-semibold"
                        : "text-gray-300 hover:text-purple-400"
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <div className="mb-12 animate-fade-in-up">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 p-1 animate-spin-slow">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 animate-pulse"></div>
                <div className="relative text-5xl animate-bounce">👨‍💻</div>
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-200">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent animate-gradient">
              Ridhamjeet Kaur
            </span>
          </h1>

          <div className="text-xl md:text-2xl text-gray-300 mb-6 animate-fade-in-up animation-delay-400">
            <span className="inline-block animate-typing">
              Full Stack Developer & AI Enthusiast
            </span>
            <span className="animate-pulse ml-2">✨</span>
          </div>

          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-600 leading-relaxed">
            I am a Full-Stack Developer and AI enthusiast with a passion for
            building scalable, user-friendly, and innovative digital solutions.
            With a strong interest in artificial intelligence, I explore how
            intelligent systems can enhance real-world applications. I am
            constantly learning, innovating, and striving to push the boundaries
            of what technology can achieve."
          </p>

          <div className="flex justify-center space-x-6 mb-8 animate-fade-in-up animation-delay-800">
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              {
                icon: Linkedin,
                href: "https://linkedin.com",
                label: "LinkedIn",
              },
              { icon: Mail, href: "mailto:john@example.com", label: "Email" },
            ].map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                className="group p-3 rounded-full bg-purple-600/20 hover:bg-purple-600/40 transition-all duration-300 border border-purple-500/30 hover:border-purple-500/60 transform hover:scale-110 hover:rotate-12"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <social.icon className="w-5 h-5 group-hover:animate-pulse" />
              </a>
            ))}
          </div>

          <button
            onClick={() => scrollToSection("about")}
            className="animate-bounce hover:animate-pulse transition-all duration-300 hover:scale-125"
          >
            <ChevronDown className="w-10 h-10 text-purple-400" />
          </button>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in-up">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              🌟 About Me
            </span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-fade-in-left">
              <div className="text-4xl mb-4 animate-bounce">🎯</div>
              <p className="text-lg text-gray-300 leading-relaxed">
                I am a passionate Full-Stack Developer specializing in the MERN
                stack, with additional expertise in Python, Django, and AI
                libraries. I enjoy building full-fledged projects ranging from
                modern landing pages and scalable web applications to AI-powered
                chatbots, voice bots, and end-to-end backend and frontend
                systems.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Alongside development, I also have a creative side, designing
                custom logos and visuals to complement my projects. Always eager
                to learn and innovate, I strive to create impactful digital
                solutions that blend functionality with creativity.
              </p>
              <div className="pt-6">
                <button className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:rotate-1 shadow-lg hover:shadow-purple-500/25">
                  <span className="flex items-center space-x-2">
                    <a href="https://drive.google.com/uc?export=download&id=1Ev7KEsTamy-075DHZpb9mZgjQUV7C7Wn">
                      <span>📄 Download Resume</span>
                    </a>
                    <Zap className="w-4 h-4 group-hover:animate-spin" />
                  </span>
                </button>
              </div>
            </div>

            <div className="animate-fade-in-right">
              <h3 className="text-2xl font-semibold mb-6 text-purple-400 flex items-center">
                <span className="mr-3 text-3xl">🛠️</span>
                Skills & Technologies
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group bg-gradient-to-br from-purple-900/30 to-pink-900/20 border border-purple-500/30 rounded-lg p-3 text-center hover:border-purple-500/60 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-xl mb-2 group-hover:animate-bounce">
                      {skill.symbol}
                    </div>
                    <div className="font-medium text-xs mb-2">{skill.name}</div>
                    <div className="w-full bg-black/50 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 group-hover:animate-pulse"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      {skill.level}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 px-6 bg-gradient-to-br from-purple-900/10 to-pink-900/5 relative"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 animate-fade-in-up">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              💼 Experience
            </span>
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group bg-black/40 border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl group-hover:animate-bounce flex-shrink-0">
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-lg font-semibold text-purple-400 group-hover:text-purple-300 transition-colors">
                        {exp.title}
                      </h3>
                      <span className="text-pink-400 font-medium flex items-center text-sm">
                        <Calendar className="w-3 h-3 mr-1" />
                        {exp.period}
                      </span>
                    </div>
                    <h4 className="text-base font-medium text-gray-300 mb-2 flex items-center">
                      <Briefcase className="w-3 h-3 mr-2" />
                      {exp.company}
                    </h4>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 animate-fade-in-up">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              🚀 Featured Projects
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-black/50 border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/20 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl group-hover:animate-bounce group-hover:scale-110 transition-all duration-300">
                      {project.image}
                    </div>
                  </div>
                  
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-purple-400 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed text-sm line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300 hover:bg-purple-600/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-all duration-300 hover:scale-110"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center space-x-2 text-pink-400 hover:text-pink-300 transition-all duration-300 hover:scale-110"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Live</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-6 bg-gradient-to-br from-purple-900/10 to-pink-900/5 relative"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 animate-fade-in-up">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              📬 Get In Touch
            </span>
          </h2>

          <div className="text-6xl mb-8 animate-bounce">🤝</div>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            I'm always interested in new opportunities and exciting projects.
            Let's connect and discuss how we can work together!
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Mail,
                title: "Email",
                info: "ridham.gne@gmail.com",
                emoji: "✉️",
              },
              {
                icon: Github,
                title: "GitHub",
                info: "/ridhamjeetkaur",
                emoji: "🐱",
              },
              {
                icon: Linkedin,
                title: "LinkedIn",
                info: "/in/ridhamjeet-kaur-37522b22a/",
                emoji: "💼",
              },
            ].map((contact, index) => (
              <div
                key={contact.title}
                className="group text-center animate-fade-in-up p-6 rounded-2xl bg-black/30 hover:bg-black/50 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 group-hover:animate-bounce">
                  {contact.emoji}
                </div>
                <contact.icon className="w-8 h-8 text-purple-400 mx-auto mb-4 group-hover:animate-pulse" />
                <h3 className="font-semibold mb-2 text-purple-300">
                  {contact.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {contact.info}
                </p>
              </div>
            ))}
          </div>

          <button className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-10 py-5 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-110 hover:rotate-1 flex items-center space-x-3 mx-auto shadow-lg hover:shadow-purple-500/25 animate-fade-in-up animation-delay-600">
            <Send className="w-5 h-5 group-hover:animate-pulse" />
            <span>Say Hello 👋</span>
            <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-purple-500/20 relative">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>&copy; 2025 Ridhamjeet Kaur. Built with</span>
            <span className="text-red-500 animate-pulse">❤️</span>
            <span>using React & Tailwind CSS</span>
            <span className="animate-bounce">✨</span>
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        @keyframes typing {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.6s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.6s ease-out forwards;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-gradient {
          animation: gradient 3s ease-in-out infinite;
        }

        .animate-typing {
          animation: typing 2s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
