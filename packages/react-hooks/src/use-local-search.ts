import { useMemo, useState } from "react";

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
