import Layout from "../components/layout/layout";
import { CourseCard } from "../components/courses/courseCard";
import styles from "../components/courses/courses.module.css";
import coursesData from "../components/courses/coursesData";

export default function IndexPage() {
  return (
    <Layout>
      <div className={styles.coursesFlex}>
        {coursesData.map((course) => (
          <CourseCard
            key={course.key}
            name={course.name}
            description={course.description}
            imagehref={course.imagehref}
            alt={course.alt}
            width={course.width}
            height={course.height}
            price={course.price}
            priceWithInterview={course.priceWithInterview}
            priceWithInterviewAndMentor={course.priceWithInterviewAndMentor}
            salePrice={course.salePrice}
          />
        ))}
      </div>
    </Layout>
  );
}
