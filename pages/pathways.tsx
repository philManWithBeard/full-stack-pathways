import { courses } from "../components/courses/coursesData";
import Layout from "../components/layout/layout";
import { CourseCard } from "../components/courses/courseCard";
import styles from "../components/courses/courses.module.css";

const IndexPage = () => (
  <Layout>
    <div className={styles.coursesFlex}>
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  </Layout>
);
export default IndexPage;
