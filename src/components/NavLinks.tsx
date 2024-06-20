import { FunctionComponent, memo } from "react";

export type NavLinksType = {
  className?: string;
};

const NavLinks: FunctionComponent<NavLinksType> = memo(({ className = "" }) => {
  return (
    <div
      className={`w-[1548.9px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-181xl text-black font-rubik ${className}`}
    >
      <div className="w-[1366.7px] flex flex-col items-start justify-start gap-[169.9px] max-w-full lg:gap-[85px] mq450:gap-[21px] mq750:gap-[42px]">
        <h1 className="m-0 w-[1344.5px] relative text-inherit tracking-[-0.83px] leading-[150px] font-bold font-inherit flex items-center max-w-full shrink-0 z-[3] mq450:text-31xl mq450:leading-[60px] mq1050:text-61xl mq1050:leading-[90px]">
          Launching soon
        </h1>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1.5 box-border max-w-full shrink-0 text-77xl text-gray-100">
          <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
            <h3 className="m-0 flex-1 relative text-inherit tracking-[5px] leading-[79px] font-medium font-inherit inline-block max-w-full z-[3] mq450:text-10xl mq450:leading-[32px] mq1050:text-29xl mq1050:leading-[47px]">
              Envisioned through the mists of whimsy, behold Pepe the Frog
              transformed into a venerable, stylish grandpa sporting a silvered
              beard.
            </h3>
            <img
              className="w-[940px] !m-[0] absolute top-[-505px] right-[-748.1px] max-h-full overflow-hidden shrink-0 object-contain z-[4]"
              loading="lazy"
              alt=""
              src="/c3b2a8e0a79f5978842a04c8d3a1c138png@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default NavLinks;
