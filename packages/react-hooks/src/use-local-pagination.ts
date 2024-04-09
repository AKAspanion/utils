import { useCallback, useMemo, useState } from "react";

const useLocalPagination = <T>(
  records: T[],
  count = 5,
  defaultOffset?: number
): {
  computedArray: T[];
  showLoadMore: boolean;
  loadMore: () => void;
  resetOffset: () => void;
} => {
  const totalRecords = useMemo(() => records.length || 0, [records]);
  const [offset, setOffset] = useState(
    defaultOffset === undefined ? count : defaultOffset
  );

  const showLoadMore = useMemo(
    () => (totalRecords === 0 ? false : offset < totalRecords),
    [offset, totalRecords]
  );

  const computedArray = useMemo(
    () => records.slice(0, offset),
    [offset, records]
  );

  const loadMore = useCallback(() => {
    setOffset((o) => (o + count >= totalRecords ? totalRecords : o + count));
  }, [count, totalRecords]);

  const resetOffset = useCallback(() => {
    setOffset(count);
  }, [count]);

  return { showLoadMore, loadMore, computedArray, resetOffset };
};

export default useLocalPagination;
