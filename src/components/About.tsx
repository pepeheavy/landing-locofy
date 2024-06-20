import { FunctionComponent, memo } from "react";
import AboutPepe from "./AboutPepe";

export type AboutType = {
  className?: string;
};

const About: FunctionComponent<AboutType> = memo(({ className = "" }) => {
  return (
    <section
      className={`absolute top-[1317.2px] left-[0px] w-full h-[906px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border max-w-full text-left text-44xl text-gray-200 font-oswald ${className}`}
    >
      <AboutPepe />
    </section>
  );
});

export default About;
