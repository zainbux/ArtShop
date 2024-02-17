import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Newsest from "./components/Newsest";

import { getHeroImages } from "./utils";

export default async function Home() {
  
  const HeroImages = await getHeroImages();
  console.log(HeroImages);
  

  return (
    <main>
      <div className="">
        <Hero HeroImages={HeroImages}/>
        <Newsest/>        
      </div>

    </main>
  );
}
