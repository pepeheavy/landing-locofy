import { FunctionComponent, memo } from "react";

export type AboutPepeType = {
  className?: string;
};

const AboutPepe: FunctionComponent<AboutPepeType> = memo(
  ({ className = "" }) => {
    return (
      <div
        className={`flex-1 overflow-hidden flex flex-col items-start justify-start pt-[69px] pb-[515px] pr-5 pl-[93px] box-border gap-[48px] max-w-full shrink-0 text-left text-44xl text-gray-200 font-oswald lg:pl-[46px] lg:box-border mq750:gap-[24px] mq750:pl-[23px] mq750:box-border ${className}`}
      >
        <div className="w-[844.4px] flex flex-row items-start justify-start py-0 px-1 box-border max-w-full">
          <b className="flex-1 relative tracking-[4px] leading-[70px] inline-block max-w-full mq450:text-19xl mq450:leading-[42px] mq1050:text-31xl mq1050:leading-[56px]">
            ABOUT $PEPEH
          </b>
        </div>
        <div className="w-[2040px] relative text-45xl tracking-[3px] leading-[70px] font-lato flex items-center max-w-full mq450:text-19xl mq450:leading-[42px] mq1050:text-32xl mq1050:leading-[56px]">
          <span className="w-full">
            <p className="[margin-block-start:0] [margin-block-end:29px]">{`Pepeheavyhash is a fictional character based on Pepe the Frog, re-imagined as an old, cool grandpa with a gray beard. `}</p>
            <p className="[margin-block-start:0] [margin-block-end:29px]">{`He is energetic, spiritual, muscular, a non-meat eater, and a regular gym-goer. `}</p>
            <p className="m-0">
              This initiative celebrates this unique character while
              highlighting the incredible achievements of the Kasplex team in
              creating the KRC20 token protocol on the Kaspa network.
            </p>
          </span>
        </div>
      </div>
    );
  }
);

export default AboutPepe;
