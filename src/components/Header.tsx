import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const links = [
    { label: "Paper", url: "https://arxiv.org/pdf/2506.21484", icon: FileText },
    { label: "arXiv", url: "https://arxiv.org/abs/2506.21484", icon: ExternalLink },
  ];
 const images = [
    "IMAGES/m1.png",
    "IMAGES/m2.png",
    "IMAGES/m3.png",
    "IMAGES/m4.png",
  ];

  return (
    <header className="bg-background border-b border-border transition-colors duration-300">
      <div className="relative max-w-5xl mx-auto px-6 pt-16 pb-10 sm:pt-20">

        {/* Logo Centered */}
          <div className="flex justify-center items-center gap-6 mb-6">
          {/* First logo */}
          <a href="https://gaash.nitsri.ac.in/" target="_blank" rel="noopener noreferrer">
            <img
              src="images/logo.png"
              alt="NIT Logo"
              className="w-32 h-32 sm:w-40 sm:h-40 object-contain hover:scale-105 transition-transform duration-300"
            />
          </a>

          {/* Second uploaded logo */}
          <a href="https://www.nitsri.ac.in/" target="_blank" rel="noopener noreferrer">
            <img
              src="images/nit logo.png"
              alt="Institute Logo"
              className="w-[200px] h-auto sm:w-[230px] object-contain hover:scale-105 transition-transform duration-300"
              style={{ maxHeight: "80px" }}
            />
          </a>
        </div>

        {/* Title */}
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight animate-fade-in mb-6">
            <span className="text-primary font-extrabold">TITAN</span>: Query-Token based Domain Adaptive Adversarial Learning
          </h1>
        </div>

        {/* Conference Badge – Optional placeholder block */}
        {/* <div className="flex justify-center mb-8 animate-scale-in">
          <a 
            href="https://conferences.miccai.org/2024/en/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-all duration-300 hover-scale"
          >
            <img src="/images/miccai2024.png" alt="MICCAI 2024" className="h-12 object-contain" />
          </a>
        </div> */}

        {/* Authors */}
        <div className="text-center mb-10 space-y-3">
          <div className="text-lg text-muted-foreground flex flex-wrap justify-center items-center gap-x-2 gap-y-1">
            <a href="https://www.tajamulashraf.com/" className="text-primary hover:underline">Tajamul Ashraf<sup>1</sup></a>
            <a href="https://www.janibbashir.com/" className="text-primary hover:underline">Janibul Bashir<sup>2</sup></a>
          </div>

          <div className="text-sm text-muted-foreground leading-relaxed space-y-1">
            <p><span className="font-semibold">1</span> Department of Computer Vision, MBZUAI, Masdar City, 11058, Abu Dhabi, UAE</p>
            <p><span className="font-semibold">2</span> Department of Information Technology, NIT Srinagar, Hazratbal, 190007, J&K, India.</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
          {links.map((link, index) => (
            <Button
              key={index}
              variant="academic"
              asChild
              className="shadow-md hover:scale-105 transition-transform duration-200"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2"
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </a>
            </Button>
          ))}
        </div>
          <div className="overflow-hidden relative w-full max-w-5xl mx-auto rounded-xl border shadow-lg mt-0">
          <div className="flex w-[200%] animate-marquee pause-on-hover">
            {images.concat(images).map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`scroll-${i}`}
                className="h-32 sm:h-40 md:h-72 lg:h-96 w-1/4 object-cover flex-shrink-0"
                draggable={false}
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
