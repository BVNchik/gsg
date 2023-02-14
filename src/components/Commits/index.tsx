import React, { ReactElement, useMemo } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";
import { AxisDomain } from "recharts/types/util/types";

import { TooltipContent } from "./components/TooltipContent";
import { useCommits } from "./hooks";
import { Wrapper, Spinner } from "./styles";
import { dateFormatter, getTicks } from "./utils";

type LineData = {
  index: number;
  name: string;
  date: number;
};

export function Commits({
  branchName,
  startDate,
  endDate,
  rows,
}: {
  branchName: string;
  startDate?: Date;
  endDate?: Date;
  rows?: number;
}): ReactElement {
  const { commits, loading } = useCommits({
    branchName,
    since: startDate,
    until: endDate,
    rows,
  });

  const lineData: LineData[] = useMemo(() => {
    return commits.map((commit, index) => {
      const {
        author: { email, avatarUrl, name },
        message,
        committedDate,
      } = commit;
      return {
        email,
        avatarUrl,
        name,
        message,
        date: new Date(committedDate).getTime(),
        index,
      };
    });
  }, [commits]);

  const domain: AxisDomain = useMemo(
    () => [
      (dataMin: number) => dataMin,
      (dateMax: number) => endDate?.getTime() || dateMax,
    ],
    [endDate]
  );

  const ticks = useMemo(
    () =>
      getTicks({
        startDate,
        endDate,
      }),
    [endDate, startDate]
  );

  return (
    <Wrapper>
      {loading && <Spinner />}
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={lineData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            scale="time"
            tickFormatter={dateFormatter}
            type="number"
            ticks={ticks}
            domain={domain}
          />
          <YAxis tickCount={7} />
          <Tooltip
            content={(props: TooltipProps<number, string>) => {
              if (!props.active || !props.payload) return null;
              return <TooltipContent payload={props.payload} />;
            }}
          />
          <Line
            type="monotone"
            dataKey="index"
            stroke="#7c97b2"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Wrapper>
  );
}
