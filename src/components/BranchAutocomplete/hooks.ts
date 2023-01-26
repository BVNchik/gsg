import { useCallback, useState, useMemo, useContext, FormEvent } from "react";

import { useQuery } from "@apollo/client";
import { BRANCHES, BranchResult, BranchVars } from "graphql/repo/repo.query";
import { InputProps } from "react-autosuggest";

import { SelectedProjectContext } from "lib/selectedProject/context";
import { parseProjectUrl } from "utils/parse-url";

type UseApartmentCoverageAutocompleteResult = {
  inputProps: InputProps<string>;
  suggestions: string[];
  fetchPredictions: (value: string) => Promise<void>;
  setDefaultSuggestions: () => void;
};

const DEFAULT_LIMIT = 20;

export function useBranchAutocomplete({
  value,
}: {
  value: string;
}): UseApartmentCoverageAutocompleteResult {
  const { selectedProject } = useContext(SelectedProjectContext);

  const { owner, name } = parseProjectUrl(selectedProject) || {};
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [initialSuggestions, setInitialSuggestions] = useState<string[]>([]);
  const [userInputValue, setUserInputValue] = useState(value);

  const { refetch: fetchBranchAutocomplete } = useQuery<
    BranchResult,
    BranchVars
  >(BRANCHES, {
    variables: {
      owner,
      name,
      first: DEFAULT_LIMIT,
      refPrefix: "refs/heads/",
      query: "",
    },
    onCompleted(data) {
      const { repository } = data;
      const suggestions = repository.refs.nodes.map((node) => node.name) ?? [];
      setSuggestions(suggestions);
      setInitialSuggestions(suggestions);
    },
  });

  const clearSuggestions = useCallback(() => setSuggestions([]), []);

  const setDefaultSuggestions = useCallback(
    () => setSuggestions(initialSuggestions),
    [initialSuggestions]
  );

  const fetchPredictions = useCallback(
    async (value: string) => {
      if (!value) return;

      const data = await fetchBranchAutocomplete({
        owner,
        name,
        first: DEFAULT_LIMIT,
        refPrefix: "refs/heads/",
        query: value,
      }).catch(() => {
        clearSuggestions();
      });

      const predictions =
        data?.data?.repository?.refs?.nodes.map((node) => node.name) ?? [];
      setSuggestions(predictions);
    },
    [fetchBranchAutocomplete, owner, name, clearSuggestions]
  );

  const handleInputChange = useCallback(
    (_event: FormEvent<HTMLElement>, { newValue }: { newValue: string }) => {
      setUserInputValue(newValue || "");
    },
    []
  );

  const inputProps = useMemo(
    () => ({
      value: userInputValue,
      onChange: handleInputChange,
    }),
    [userInputValue, handleInputChange]
  );

  return {
    inputProps,
    suggestions,
    fetchPredictions,
    setDefaultSuggestions,
  };
}
