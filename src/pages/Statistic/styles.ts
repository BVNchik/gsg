import styled from "styled-components";

import { DateRangePicker as DateRangePickerBase } from "components/DateRangePicker";

export const Content = styled.div`
  margin: 2.5% 5%;
  background-color: white;
  width: 90%;
  display: flex;
`;

export const Settings = styled.div`
  padding: 30px;
  flex: 2;
`;

export const Statistics = styled.div`
  flex: 5;
  display: flex;
`;

export const DateRangePicker = styled(DateRangePickerBase)`
  margin: 10px 0;
`;
