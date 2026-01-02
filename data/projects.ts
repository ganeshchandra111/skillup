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
        title: "E-Commerce Fashion Store",
        category: "E-Commerce",
        image: "/images/project1.jpg",
        description: "A modern fashion store with cart and checkout functionality.",
        link: "https://example.com"
    },
    {
        id: 2,
        title: "Corporate Agency Site",
        category: "Business",
        image: "/images/project2.jpg",
        description: "Professional website for a digital marketing agency.",
        link: "https://example.com"
    },
    {
        id: 3,
        title: "Restaurant Landing Page",
        category: "Hospitality",
        image: "/images/project3.jpg",
        description: "High-conversion landing page for a local bistro.",
        link: "https://example.com"
    },
    {
        id: 4,
        title: "Tech Startup Portfolio",
        category: "Portfolio",
        image: "/images/project4.jpg",
        description: "Clean and minimal portfolio for a tech startup.",
        link: "https://example.com"
    }
];
