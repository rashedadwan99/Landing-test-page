import { memo } from "react";

const images = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60",
  "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60",
];
function HeroSection() {
  return (
    <section id="home" className="app-container pt-12 pb-24 overflow-hidden sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
        <div className="flex flex-col gap-8 justify-start items-start">
          <h1 className="section-header gradient-text leading-12 capitalize">
            Artificial Intelligence
            <br />
            <span className="text-black">for Smarter Future</span>
          </h1>
          <p className="max-w-lg text-md leading-6">
            Discover how AI is transforming industries and improving lives
            worldwide. Our cutting-edge solutions harness the power of machine
            learning to solve complex problems.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="btn-primary">Explore Ai solutions</button>
            <button className="btn-outline ">Learn more</button>
          </div>
          <div className="flex items-center justify-between  gap-4">
            <div className="flex justify-start max-w-30">
              {images.map((img, i) => {
                return (
                  <img className="avatar" src={img} alt="avatar" key={i} />
                );
              })}
            </div>
            <span className="text-xs capitalize sm:text-sm ">
              trusted by 10,000 people
            </span>
          </div>
        </div>
        <div className="hidden relative w-full h-80 sm:block md:h-[500px]">
          <img
            src="https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1932&auto=format&fit=crop"
            className="w-full h-full object-cover rounded-2xl"
            alt="hero section"
          />
          <div className="absolute size-32 rounded-full bg-secondary/20 -bottom-6 -left-6 blur-xl"></div>
          <div className="absolute size-32 rounded-full bg-accent/20 -top-6 -right-6 blur-xl"></div>
        </div>
      </div>
    </section>
  );
}

export default memo(HeroSection);
