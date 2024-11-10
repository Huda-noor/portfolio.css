import Image from "next/image";
import styles from "./page.module.css";
import { div } from "framer-motion/client";
import Hero from "@/components/Hero";
import Skill from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="home-section">
      <Hero/>
      <Skill/>
      <About/>
      <Contact/>
    </div>
  );
}
