import React, { ReactElement, ReactNode, useCallback, useState } from "react";

import SelectBase, { SingleValue } from "react-select";

import { Wrapper, Label } from "./styles";

type SelectProps<T> = {
  options: T[];
  defaultValue?: T | null;
  onChange: (value: SingleValue<T>) => void;
  label: ReactNode;
  className?: string;
};

export function Select<T>({
  options,
  defaultValue = null,
  onChange,
  className,
  label,
}: SelectProps<T>): ReactElement {
  const [selectedOption, setSelectedOption] = useState(defaultValue);

  const handleChange = useCallback(
    (newValue: SingleValue<T>) => {
      onChange(newValue);
      setSelectedOption(newValue);
    },
    [onChange]
  );

  return (
    <Wrapper className={className}>
      {label && <Label>{label}</Label>}
      <SelectBase
        options={options}
        defaultValue={selectedOption}
        onChange={handleChange}
      />
    </Wrapper>
  );
}
