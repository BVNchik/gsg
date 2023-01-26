import React, { ReactElement, useMemo } from "react";

import { add, format, differenceInCalendarDays } from "date-fns";
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
import { Wrapper } from "./styles";

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
  const { commits } = useCommits({
    branchName,
    since: startDate,
    until: endDate,
    rows,
  });

  const lineData: LineData[] = useMemo(() => {
    return commits.map((commit, index) => ({
      email: commit.author.email,
      avatarUrl: commit.author.avatarUrl,
      name: commit.author.name,
      message: commit.message,
      date: new Date(commit.committedDate).getTime(),
      index,
    }));
  }, [commits]);

  const domain: AxisDomain = [
    (dataMin: number) => dataMin,
    (dateMax: number) => endDate?.getTime() || dateMax,
  ];

  const ticks = getTicks({
    startDate,
    endDate,
  });

  return (
    <Wrapper>
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
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Wrapper>
  );
}

function getTicks({
  startDate,
  endDate,
}: {
  startDate?: Date | null;
  endDate?: Date | null;
}): number[] {
  if (!endDate || !startDate) return [];
  const diffDays = differenceInCalendarDays(endDate, startDate);

  const current = startDate;
  const velocity = Math.round(diffDays / (diffDays - 1));

  const ticks = [startDate.getTime()];

  for (let i = 1; i < diffDays - 1; i++) {
    ticks.push(add(current, { days: i * velocity }).getTime());
  }

  ticks.push(endDate.getTime());
  return ticks;
}

function dateFormatter(date: Date | string) {
  return format(new Date(date), "dd/MMM");
}
