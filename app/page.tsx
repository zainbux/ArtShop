import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Newsest from "./components/Newsest";

export const dynamic = "force-dynamic";

export default async function Home() {

  return (
    <main>
      <div className="">
        <Hero />
        <Newsest/>        
      </div>

    </main>
  );
}
