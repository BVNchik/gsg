import React, { ReactElement } from "react";

import { format } from "date-fns";
import { Payload } from "recharts/types/component/DefaultTooltipContent";

import { Content, Avatar, Info, Name, Email, Message, Date } from "./styles";

type TooltipContentProps = {
  payload: Payload<number, string>[];
};

export function TooltipContent({ payload }: TooltipContentProps): ReactElement {
  return (
    <>
      {payload.map(({ payload }) => (
        <Content key={payload.message}>
          <Avatar src={payload.avatarUrl} loading="eager" />
          <Info>
            <Name>{payload.name}</Name>
            <Email>{payload.email}</Email>
            <Message>{payload.message}</Message>
            <Date>{format(payload.date, "dd MMM yyyy hh:ss")}</Date>
          </Info>
        </Content>
      ))}
    </>
  );
}
