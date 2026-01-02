export interface PricingPlan {
    id: string;
    name: string;
    price: string; // Display price e.g. "₹15,000"
    description: string;
    features: string[];
    popular?: boolean;
}

export const pricingPlans: PricingPlan[] = [
    {
        id: "starter",
        name: "Starter Website",
        price: "₹14,999",
        description: "Perfect for small businesses looking to establish an online presence.",
        features: [
            "5 Page Website",
            "Mobile Responsive Design",
            "Contact Form",
            "Social Media Integration",
            "1 Month Support"
        ]
    },
    {
        id: "business",
        name: "Business Website",
        price: "₹29,999",
        description: "Ideal for growing companies needing a professional edge.",
        features: [
            "10 Page Website",
            "SEO Optimization",
            "CMS Integration",
            "Blog Section",
            "Google Maps Integration",
            "3 Months Support"
        ],
        popular: true
    },
    {
        id: "premium",
        name: "Premium / E-commerce",
        price: "₹59,999",
        description: "Complete solution for large businesses or online stores.",
        features: [
            "Unlimited Pages",
            "E-commerce Functionality",
            "Payment Gateway",
            "Advanced Analytics",
            "Speed Optimization",
            "6 Months Support"
        ]
    }
];
