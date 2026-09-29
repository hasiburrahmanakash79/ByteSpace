import { Hero } from "@/components/home/hero";
import { Partners } from "@/components/home/partners";
import { CourseExplorer } from "@/components/home/course-explorer";
import { LearningPaths } from "@/components/home/learning-paths";
import { ProfessionalGrowth } from "@/components/home/professional-growth";
import { CreatorCta } from "@/components/home/creator-cta";
import { Testimonials } from "@/components/home/testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Partners />
      <CourseExplorer />
      <LearningPaths />
      <ProfessionalGrowth />
      <CreatorCta />
      <Testimonials />
    </>
  );
}
