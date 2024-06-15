import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />{" "}
              <span className="text-accent">Dimas Samiaji</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Hello! I'm Dimas, a recent Public Relations graduate with a
              specialization in communications, currently embarking on an
              exciting career shift into the world of programming. My journey
              into tech began with a deep-seated interest in technology and a
              passion for creating innovative solutions through code.
              <br />I decided to transition into programming because of my
              growing interest and passion for technology, the numerous career
              opportunities in the tech industry, and my desire to solve
              problems creatively. Additionally, the flexibility and potential
              for positive impact in tech are highly appealing. My experience in
              public relations has equipped me with valuable skills like
              effective communication and project management, which I believe
              are highly transferable to programming.
            </p>
            {/* btn and social */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link href="">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </Link>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h09 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
export default Home;
