import { NextPage } from "next";
import React from "react";
import styles from "./alternateHero.module.css";
import Image from "next/image";
import picture from "../../public/pathway.webp";

interface AlternateHeroProps {
  key: number;
  leftImage: boolean;
  h1text: string;
  ptext: string;
  imagehref: string;
  alt: string;
  width: string;
  height: string;
}

const AlternateHero: NextPage<AlternateHeroProps> = (props) => {
  const { leftImage, h1text, ptext, imagehref, alt, width, height } = props;

  if (leftImage) {
    return (
      <section className={styles.heroFlex}>
        <div className={styles.heroDiv}>
          <h1 className={styles.heroH1}>{h1text}</h1>
          <a className={styles.heroA}>{ptext}</a>
          <h1></h1>
        </div>
        <Image src={imagehref} alt={alt} width={width} height={height} />
      </section>
    );
  } else
    return (
      <section className={styles.heroFlex}>
        <Image
          src={imagehref}
          alt="Yellow illustrated pathway"
          width={width}
          height={height}
        />
        <div className={styles.heroDiv}>
          <h1 className={styles.heroH1}>{h1text}</h1>
          <a className={styles.heroA}>{ptext}</a>
          <h1></h1>
        </div>
      </section>
    );
};
export default AlternateHero;
