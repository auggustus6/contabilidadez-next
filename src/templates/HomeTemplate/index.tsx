import { theme } from "@/styles";
import { MainLayout } from "../../layouts/MainLayout";
import { Hero } from "./components/Hero";
import { Meritocracy } from "./components/Meritocracy";
import { OurAchievements } from "./components/OurAchievements";
import { OurServices } from "./components/OurServices";
import { OurSolutions } from "./components/OurSolutions";

const HomeTemplate = () => {
  return (
    <MainLayout>
      <Hero />
      <OurAchievements />
      <OurServices />
      <OurSolutions />
      <Meritocracy />
    </MainLayout>
  );
};

export { HomeTemplate };
