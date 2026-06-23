import Hero from "@/components/Hero";
import FeaturedCollections from "@/components/FeaturedCollections";
import NewArrivals from "@/components/NewArrivals";
import BrandStory from "@/components/BrandStory";
import Reveal from "@/components/Reveal";

const marquee = [
  "Crafted in Nigeria",
  "Complimentary Shipping",
  "Lifetime Guarantee",
  "Natural Materials",
  "Designed in Lagos",
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Values strip */}
      <section className="border-b border-stone/70 bg-ivory">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-x-10 gap-y-3 px-5 py-6 sm:px-8 lg:px-12">
          {marquee.map((item) => (
            <span
              key={item}
              className="text-[0.68rem] font-medium tracking-luxe text-muted uppercase"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <FeaturedCollections />

      {/* Editorial divider line */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[1400px] px-5 py-8 sm:px-8 lg:px-12">
          <Reveal>
            <p className="mx-auto max-w-3xl text-center font-display text-2xl font-light leading-relaxed text-charcoal/80 sm:text-3xl">
              Every piece begins with a single material and the patient hands
              that shape it.
            </p>
          </Reveal>
        </div>
      </section>

      <NewArrivals />
      <BrandStory />
    </>
  );
}
