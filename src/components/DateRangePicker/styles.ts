import { DateRange as DateRangeBase } from "react-date-range";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: block;
  width: 100%;
`;

export const Label = styled.label`
  line-height: 25px;
  display: flex;
`;

export const DateRange = styled(DateRangeBase)`
  width: 100%;

  .rdrMonth {
    width: 100%;
    background-color: #eff2f7;
  }

  .rdrMonthAndYearWrapper {
    background-color: #eff2f7;
  }
`;
