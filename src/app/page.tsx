import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Product from "./components/Product";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div> 
    <h1>
      <Hero/>
      <About/>
      <Product/>
      <Contact/>
    </h1>
    </div>
  );
}
