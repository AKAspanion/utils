import { useMemo, useState } from "react";

/**
 * Search in a list of records locally
 * @param items - list of items
 * @returns search results, search input value, search input value setter
 * @example
 * ```ts
 * const items = ["testValue1", "testValue2", "demoValue1", "demoValue2"];
 * const { results } = useLocalSearch(items);
 * ```
 */
const useLocalSearch = <T>(
  items: T[]
): {
  results: T[];
  inputValue: string;
  handleChange: (s: string) => void;
} => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (value: string): void => {
    setInputValue(value);
  };

  const results = useMemo(() => {
    if (inputValue.length !== 0) {
      return items.filter((item) =>
        JSON.stringify(item).toLowerCase().includes(inputValue.toLowerCase())
      );
    }

    return items;
  }, [items, inputValue]);

  return { results, handleChange, inputValue };
};

export default useLocalSearch;
