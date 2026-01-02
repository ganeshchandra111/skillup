import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-secondary text-secondary-foreground py-12">
            <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-bold mb-4 text-primary">SkillUp</h2>
                    <p className="text-muted-foreground">
                        Building professional websites that help businesses grow.
                        Quality, speed, and reliability.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link href="#home" className="text-muted-foreground hover:text-primary">Home</Link></li>
                        <li><Link href="#about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
                        <li><Link href="#services" className="text-muted-foreground hover:text-primary">Services</Link></li>
                        <li><Link href="#projects" className="text-muted-foreground hover:text-primary">Projects</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="font-semibold mb-4 text-lg">Services</h3>
                    <ul className="space-y-2">
                        <li><Link href="#services" className="text-muted-foreground hover:text-primary">Web Design</Link></li>
                        <li><Link href="#services" className="text-muted-foreground hover:text-primary">Web Development</Link></li>
                        <li><Link href="#services" className="text-muted-foreground hover:text-primary">E-commerce</Link></li>
                        <li><Link href="#services" className="text-muted-foreground hover:text-primary">SEO</Link></li>
                    </ul>
                </div>

                {/* Socials */}
                <div>
                    <h3 className="font-semibold mb-4 text-lg">Connect</h3>
                    <div className="flex gap-4">
                        <Link href="#" className="p-2 bg-background rounded-full hover:text-primary transition-colors">
                            <Facebook size={20} />
                        </Link>
                        <Link href="#" className="p-2 bg-background rounded-full hover:text-primary transition-colors">
                            <Instagram size={20} />
                        </Link>
                        <Link href="#" className="p-2 bg-background rounded-full hover:text-primary transition-colors">
                            <Twitter size={20} />
                        </Link>
                        <Link href="#" className="p-2 bg-background rounded-full hover:text-primary transition-colors">
                            <Linkedin size={20} />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-8 mt-12 pt-8 border-t border-secondary-foreground/10 text-center text-sm text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} SkillUp. All rights reserved.</p>
            </div>
        </footer>
    );
}
