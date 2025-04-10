import ProjectCard from "../components/ProjectCard";

function Portfolio() {
  const projects = [
    { title: "Indexd", bgImg: "bg-card-1", url: "https://github.com/Danr55/Indexd", deployedUrl: "https://danr55.github.io/Indexd/" },
    { title: "stallStarz", bgImg: "bg-card-2", url: "https://github.com/Ddan71117/stallStarz", deployedUrl: "" },
    { title: "Flex-Dice", bgImg: "bg-card-3", url: "https://github.com/Ddan71117/Flex-Dice", deployedUrl: "https://flex-dice.vercel.app" },
    { title: "GitHub Candidate Finder", bgImg: "bg-card-4", url: "https://github.com/Ddan71117/GitHub-Candidate-Finder", deployedUrl: "https://github-candidate-finder-b19k.onrender.com" },
    { title: "Quote Generator", bgImg: "bg-card-5", url: "https://github.com/Ddan71117/Quote-Generator", deployedUrl: "https://quote-generator-xi-gold.vercel.app/" },
    { title: "React Portfolio", bgImg: "bg-card-6", url: "https://github.com/Ddan71117/Portfolio", deployedUrl: "https://www.danieldrennen.com/" },
  ];
  return (
    <>
      <div>
        <div className="flex flex-wrap gap-10 justify-center p-3 mt-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} title={project.title} bgImg={project.bgImg} url={project.url} deployedUrl={project.deployedUrl} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Portfolio