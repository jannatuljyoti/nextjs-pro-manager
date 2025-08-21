import Image from "next/image";
import ProductsHighLight from "./components/ProductsHighLight";
import Hero from "./components/Hero";

export default function Home() {
  console.log("DEBUG ENV:", process.env.MONGODB_URI);
  return (
   <>
   <Hero></Hero>
   <ProductsHighLight></ProductsHighLight>
   
   </>
  );
}
