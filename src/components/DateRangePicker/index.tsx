import React, { ReactElement, ReactNode } from "react";

import { Range, RangeKeyDict } from "react-date-range";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Label, Wrapper, DateRange } from "./styles";

export function DateRangePicker({
  onChange,
  ranges,
  className,
  label,
}: {
  ranges: Range[];
  className?: string;
  label?: ReactNode;
  onChange: (item: RangeKeyDict) => void;
}): ReactElement {
  return (
    <Wrapper className={className}>
      {label && <Label>{label}</Label>}
      <DateRange
        onChange={onChange}
        rangeColors={["#7c97b2"]}
        ranges={ranges}
      />
    </Wrapper>
  );
}
