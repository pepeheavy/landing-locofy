import { FunctionComponent, memo } from "react";

export type Navigation1Type = {
  className?: string;
};

const Navigation1: FunctionComponent<Navigation1Type> = memo(
  ({ className = "" }) => {
    return (
      <header
        className={`self-stretch bg-white flex flex-row items-start justify-between pt-[23px] pb-[21px] pr-[54px] pl-[114px] box-border top-[0] z-[99] sticky gap-[20px] max-w-full text-left text-23xl-5 text-black font-oswald lg:pl-[57px] lg:pr-[27px] lg:box-border mq750:pl-7 mq750:box-border ${className}`}
      >
        <div className="h-[113px] w-[2206px] relative bg-white hidden max-w-full" />
        <div className="w-[188.5px] flex flex-col items-start justify-start pt-[10.3px] px-0 pb-0 box-border">
          <a className="[text-decoration:none] self-stretch relative tracking-[4px] leading-[46px] font-bold text-[inherit] z-[3]">
            $PEPEH
          </a>
        </div>
        <div className="h-[69px] w-[1370px] relative max-w-full text-center">
          <nav className="m-0 absolute top-[7px] left-[0px] w-[508px] flex flex-row items-start justify-start max-w-full text-center text-23xl-5 text-black font-oswald">
            <a className="[text-decoration:none] flex-1 relative tracking-[2px] leading-[45px] text-[inherit] shrink-0 [debug_commit:0448091] z-[1]">
              Home
            </a>
            <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[5px] pl-0 ml-[-29px]">
              <a className="[text-decoration:none] self-stretch relative tracking-[2px] leading-[45px] text-[inherit] shrink-0 [debug_commit:0448091] z-[1]">
                About
              </a>
            </div>
            <a className="[text-decoration:none] flex-1 relative tracking-[2px] leading-[45px] text-[inherit] shrink-0 [debug_commit:0448091] z-[1] ml-[-29px]">
              How
            </a>
          </nav>
          <a className="[text-decoration:none] absolute top-[7px] left-[491px] tracking-[2px] leading-[45px] text-[inherit] flex items-center justify-center w-[187px] h-[45px] z-[1]">
            Why
          </a>
          <a className="[text-decoration:none] absolute top-[7px] left-[678px] tracking-[2px] leading-[45px] text-[inherit] flex items-center justify-center w-[225px] h-[45px] z-[1]">
            Tokenomic
          </a>
          <a className="[text-decoration:none] absolute top-[7px] left-[962px] tracking-[2px] leading-[49px] text-[inherit] flex items-center justify-center w-[117px] h-[49px] z-[1]">
            Social
          </a>
          <div className="absolute h-full top-[0px] bottom-[0px] left-[1116px] w-[254px] text-white">
            <div className="absolute w-[calc(100%_-_12px)] top-[0px] right-[5px] left-[7px] rounded-xl bg-mediumturquoise h-[69px] z-[1]" />
            <div className="absolute top-[7px] left-[0px] tracking-[2px] leading-[49px] inline-block w-[254px] h-[49px] z-[2]">
              White-paper
            </div>
          </div>
        </div>
      </header>
    );
  }
);

export default Navigation1;
