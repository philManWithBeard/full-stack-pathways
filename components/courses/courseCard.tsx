import * as React from "react";
import Image from "next/dist/client/image";
import styles from "./courses.module.css";
import { NextPage } from "next";

interface CourseCardProps {
  key: number;
  course: string;
  h1text: string;
  ptext: string;
  imagehref: string;
  alt: string;
  width: string;
  height: string;
}

export const CourseCard: NextPage<CourseCardProps> = (props: {
  course: any;
}) => {
  const { course } = props;
  const {
    name,
    imageUrl,
    price,
    priceWithInterview,
    priceWithInterviewAndMentor,
    salePrice,
    rating,
    ratingCount,
    description,
  } = course;
  return (
    <div className={styles.courseCard}>
      <Image
        src={imageUrl}
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
