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
    {
        id: 4,
        title: "Kotas way",
        category: "Portfolio",
        image: "/images/project4.jpg", // Keeping placeholder
        description: "A professional portfolio website for JEE aspirants.",
        link: "https://amt.waytestseries.com/"
    },
    {
        id: 5,
        title: "MSMF Classes",
        category: "Portfolio",
        image: "/images/project5.jpg", // Keeping placeholder
        description: "MSMF Classes",
        link: "https://www.msmfclasses.com/"
    },

    {
        id: 6,
        title: "Aura Perfume",
        category: "Business",
        image: "/images/project6.jpg",
        description: "A premium business landing page for a fragrance brand.",
        link: "https://purfume.vercel.app/"
    },
    {
        id: 7,
        title: "Ashoka Saachi",
        category: "Events",
        image: "/images/project7.jpg",
        description: "Elegant event management and showcase platform.",
        link: "https://ashokasaachi.com/"
    }
];
