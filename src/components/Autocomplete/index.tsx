import React, {
  FormEvent,
  ReactElement,
  useCallback,
  useMemo,
  ReactNode,
} from "react";

import { debounce } from "lodash";
import Autosuggest, {
  InputProps,
  RenderInputComponentProps,
  RenderSuggestionParams,
  SuggestionSelectedEventData,
} from "react-autosuggest";

import { TextInput } from "components/TextInput";

import { Suggestion } from "./components/Suggestion";
import { SuggestionsContainer, Content } from "./styles";

const DEFAULT_DEBOUNCE = 300;

export function Autocomplete({
  suggestions,
  fetchPredictions,
  onClearSuggestions,
  inputProps,
  onChange,
  label,
}: {
  suggestions: string[];
  fetchPredictions: (value: string) => Promise<void>;
  onClearSuggestions: () => void;
  inputProps: InputProps<string>;
  onChange: (name: string) => void;
  label?: ReactNode;
}): ReactElement | null {
  const fetchPredictionsDebounced = useMemo(
    () => debounce(fetchPredictions, DEFAULT_DEBOUNCE),
    [fetchPredictions]
  );

  const onSuggestionsFetchRequested = useCallback(
    ({ value }: { value: string }) => fetchPredictionsDebounced(value),
    [fetchPredictionsDebounced]
  );

  const onSuggestionsClearRequested = useCallback(
    () => onClearSuggestions(),
    [onClearSuggestions]
  );

  const getSuggestionValue = useCallback(
    (suggestion: string) => suggestion,
    []
  );

  const renderSuggestion = useCallback(
    (suggestion: string, params: RenderSuggestionParams) => (
      <Suggestion active={params.isHighlighted} suggestion={suggestion} />
    ),
    []
  );

  const handleSuggestionSelected = useCallback(
    (
      _event: FormEvent,
      { suggestion }: SuggestionSelectedEventData<string>
    ) => {
      return onChange(suggestion);
    },
    [onChange]
  );

  const defaultRenderInputComponent = useCallback(
    (inputProps: RenderInputComponentProps) => (
      <TextInput {...inputProps} label={label} />
    ),
    [label]
  );

  const handleShouldRenderSuggestions = useCallback(() => true, []);

  return (
    <Content>
      <Autosuggest
        focusInputOnSuggestionClick={false}
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        onSuggestionSelected={handleSuggestionSelected}
        inputProps={inputProps}
        renderInputComponent={defaultRenderInputComponent}
        shouldRenderSuggestions={handleShouldRenderSuggestions}
        renderSuggestionsContainer={(params) => (
          <SuggestionsContainer {...params.containerProps}>
            {params.children}
          </SuggestionsContainer>
        )}
      />
    </Content>
  );
}
