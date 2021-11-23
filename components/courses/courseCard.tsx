import * as React from "react";
import Image from "next/dist/client/image";
import styles from "./courses.module.css";
import { NextPage } from "next";

interface coursesProps {
  key: number;
  course?: string;
  name?: string;
  imagehref?: string;
  alt?: string;
  width?: string;
  height?: string;
  description?: string;
  price?: number;
  priceWithInterview?: number;
  priceWithInterviewAndMentor?: number;
  salePrice?: number;
  rating?: number;
  ratingCount?: number;
}

export const CourseCard: NextPage<coursesProps> = (props) => {
  const {
    name,
    imagehref,
    price,
    priceWithInterview,
    priceWithInterviewAndMentor,
    salePrice,
    rating,
    ratingCount,
    description,
  } = props;
  return (
    <div className={styles.courseCard}>
      <Image
        src={imagehref!}
        alt={name}
        draggable="false"
        width="200px"
        height="200px"
      />
      <h3 className={styles.courseCardH3}>{name}</h3>
      <a className={styles.courseCardA}>{description}</a>
      {price}
    </div>
  );
};
