import ProjectsAnimation from "../Components/Projects/ProjectsAnimation";
import Huepalette from "../Components/Projects/huepalette";

const huepalette = () => {
  return (
    <div className="z-30 relative">
      <ProjectsAnimation />
      <Huepalette />
    </div>
  );
};

export default huepalette;
