import { HeroImg } from "./HeroImg";
import { HeroText } from "./HeroText";

export const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <HeroText></HeroText>
      <HeroImg></HeroImg>
    </div>
  );
};
