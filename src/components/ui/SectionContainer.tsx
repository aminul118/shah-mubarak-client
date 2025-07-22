import { ChildrenType } from "@/app/layout";
import React from "react";

type classNameProps = ChildrenType & {
  className?: string;
  backgroundColor?: string;
};

const SectionContainer = ({
  children,
  className,
  backgroundColor,
}: classNameProps) => {
  return (
    <section className={backgroundColor}>
      <div className={`py-8 lg:py-14 xl:py-16 2xl:py-24 px-2  ${className}`}>
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
