import { HeroImg } from "./HeroImg";
import { HeroText } from "./HeroText";

export const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row ">
      <HeroText></HeroText>
      <HeroImg></HeroImg>
    </div>
  );
};
