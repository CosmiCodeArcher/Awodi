
function Portfolio() {
    const projects = [
        {
            title: "Awodi Quizzical",
            description: "An interactive quiz app built with React, offering users a fun way to test their knowledge on various topics.",
            technologies: ["React", "CSS"],
            image: "/awodi-quizzical.png",
            github: "https://github.com/Ochiponu-Awodi/Awodi-Quizzical",
            live: "https://awodi-quizzical.netlify.app"
        },
        {
            title: "Tenzies game",
            description: "A digital version of the classic dice game Tenzies, where players race to get all ten of their dice to show the same number .",
            technologies: ["React", "CSS"],
            image: "/scrimba-tenzies.png",
            github: "https://github.com/Ochiponu-Awodi/Tenzies-Game",
            live: "https://scrimba-tenzies-awodi.netlify.app"
        },
        {
            title: "Meme Generator",
            description: "Create custom memes by adding your own text to randomly generated popular meme images.",
            technologies: ["React", "CSS"],
            image: "/meme-gen.png",
            github: "https://github.com/Ochiponu-Awodi/Meme-Generator",
            live: "https://scrimba-meme-generator-awodi.netlify.app/"
        },
        {
            title: "Scrimba Vanlife",
            description: "A mock van rental platform showcasing dynamic routing and nested routes using React Router, providing users with an intuitive browsing experience for van rentals.",
            technologies: ["React",  "React Router", "CSS"],

            image: "/Scrimba-Vanlife.png",
            github: "https://github.com/Ochiponu-Awodi/-Scrimba-Vanlife",
            live: "https://scrimba-vanlife-awodi.netlify.app/"
        },
        // Add more projects...
    ];

    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold mb-4">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="border rounded-lg p-4 shadow-md">
                        <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4 rounded" />
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="mb-2">{project.description}</p>
                        <p className="mb-2">Technologies: {project.technologies.join(", ")}</p>
                        <div className="flex space-x-4">
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>
                            {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Live Demo</a>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio