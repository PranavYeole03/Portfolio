import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BlurBlob from "./components/BlurBlob";

function App() {
  return (
    <div className="relative bg-[#0f1115] min-h-screen text-white">
<BlurBlob
  position={{ top: "50%", left: "50%" }}
  size={{ width: "500px", height: "500px" }}
  color="bg-purple-600"
/>

      {/* Neutral lightweight grid overlay */}
      <div
        className="absolute inset-0
        bg-[linear-gradient(to_right,#ffffff14_1px,transparent_1px),
        linear-gradient(to_bottom,#ffffff14_1px,transparent_1px)]
        bg-size-[14px_24px]
        mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
      ></div>

      <div className="relative pt-20">
        <Header />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
