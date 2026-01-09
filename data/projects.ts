export interface Project {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
    link: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Full Stack Application",
        category: "Web Application",
        image: "/spidyhost.png",
        description: "A comprehensive full stack hosting solution built for performance.",
        link: "none"
    },
    {
        id: 2,
        title: "E-Commerce Fragrance Store",
        category: "E-Commerce",
        image: "/images/project2.jpg", // Keeping placeholder
        description: "An elegant online store for Qalb Fragrance.",
        link: "https://qalbfragrance.netlify.app/"
    },
    {
        id: 3,
        title: "Medical Professional Portfolio",
        category: "Portfolio",
        image: "/images/project3.jpg", // Keeping placeholder
        description: "A professional portfolio website for doctors.",
        link: "https://joyful-cupcake-356e56.netlify.app/"
    },
    // {
    //     id: 4,
    //     title: "Interior Design Portfolio",
    //     category: "Interior Design",
    //     image: "/images/project4.jpg", // Keeping placeholder
    //     description: "Showcase for interior design projects (Work in Progress).",
    //     link: "https://app.netlify.com/projects/interiordesign11/overview"
    // }
];
