import { useState } from "react";
import GitHubLogo from '/assets/GithubLogo.png';

function ProjectCard({ title, bgImg, url, deployedUrl }) {
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleGHClick = () => {
    window.open(url, "_blank");
  }

  const handleDeployedClick = () => {
    window.open(deployedUrl, "_blank");
  }

  return (
    <div className={`w-1/4 h-56 ${bgImg} p-5 shadow-md transform transition-transform duration-500 rounded-lg ${
      hoveredButton ? "scale-105 bg-opacity-60 bg-gray-700" : "bg-opacity-10"}`}
      onMouseEnter={() => setHoveredButton(true)} 
      onMouseLeave={() => setHoveredButton(false)}  
      >
      <div className={`absolute inset-0 transition-opacity duration-300 ${hoveredButton ? "bg-black bg-opacity-50" : "bg-black bg-opacity-0"}`}></div>
      <div className="flex items-center justify-center h-full w-full absolute inset-0">
        <div className="relative flex flex-col items-center justify-center h-full w-full">
          <button 
            onClick={handleDeployedClick}
            onMouseEnter={() => setHoveredButton('title')}
            onMouseLeave={() => setHoveredButton(null)}
            className={`p-5 transform transition-transform duration-300 ${hoveredButton === 'title' ? "scale-110" : "scale-90"}`}
          >
            <h2 className={`relative text-center text-2xl font-extrabold text-verdegris transition-opacity duration-500`}>{title}</h2>
          </button>
          <button 
            onClick={handleGHClick}
            onMouseEnter={() => setHoveredButton('logo')}
            onMouseLeave={() => setHoveredButton(null)}
            className={`p-5 transform transition-transform duration-300 ${hoveredButton === 'logo' ? "scale-110" : "scale-90"}`}
          >
            <img src={GitHubLogo} alt="GitHub link" className={`relative w-18 h-12 transition-opacity duration-500 opacity-65`} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard