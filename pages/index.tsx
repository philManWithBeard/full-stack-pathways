// pages/index.tsx
import Layout from "../components/layout/layout";
import AlternateHero from "../components/alternateHero/alternateHero";
import heroData from "../components/alternateHero/heroData";

export default function Page() {
  return (
    <Layout>
      {heroData.map((hero) => (
        <AlternateHero
          key={hero.key}
          leftImage={hero.leftImage}
          imagehref={hero.imagehref}
          alt={hero.alt}
          h1text={hero.h1text}
          ptext={hero.ptext}
          width={hero.width}
          height={hero.height}
        />
      ))}
    </Layout>
  );
}
