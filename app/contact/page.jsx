import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";

// components
import Social from "@/components/Social";
import PhotoWork from "@/components/PhotoWork";

function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
            <p className="max-w-[500px] mb-9 text-white/80">
              Contact me if you have any inquiries
            </p>
            {/* btn and social */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <div className="mb-10 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-16 h-16 border border-accent rounded-full flex justify-center items-center text-accent text-4xl hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <PhotoWork />
          </div>
        </div>
      </div>
      {/* <Stats /> */}
    </section>
  );
}
export default Home;
