import React, { ReactElement } from "react";

import { useBranchAutocomplete } from "./hooks";
import { Autocomplete } from "../Autocomplete";

type BranchAutocompleteProps = {
  branchName: string;
  onChange: (branchName: string) => void;
};

export function BranchAutocomplete({
  branchName,
  onChange,
}: BranchAutocompleteProps): ReactElement | null {
  const { inputProps, suggestions, fetchPredictions, setDefaultSuggestions } =
    useBranchAutocomplete({ value: branchName });

  return (
    <Autocomplete
      label="Branch"
      suggestions={suggestions}
      fetchPredictions={fetchPredictions}
      onClearSuggestions={setDefaultSuggestions}
      inputProps={inputProps}
      onChange={onChange}
    />
  );
}
