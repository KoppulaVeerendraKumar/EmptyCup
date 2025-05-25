import Image from "next/image";
import Header from "./Components/Header/Header";
import Sort from "./Components/Sort/Sort";
import Footer from "./Components/Footer/Footer";
import Epic from "./Components/Epic/Epic";
import Studio from "./Components/Studio/Studio";


export default function Home() {
  return (
    <>
    <div>
      <Header />
      <Sort />
      <Epic />
      <Studio />
      <Footer />
    </div>
    </>
  );
}
