import { useCallback, useMemo, useState } from "react";

/**
 * Paginate a list of records locally
 * @param records - list of records
 * @param count - pagination count
 * @param defaultOffset - default offset for pagination
 * @returns paginated records, load more flag, load more function, reset offset function
 * @example
 * ```ts
 * const records = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
 * const { computedRecords, showLoadMore } = useLocalPagination(records, 6);
 * ```
 */
const useLocalPagination = <T>(
  records: T[],
  count = 5,
  defaultOffset?: number
): {
  computedRecords: T[];
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

  const computedRecords = useMemo(
    () => records.slice(0, offset),
    [offset, records]
  );

  const loadMore = useCallback(() => {
    setOffset((o) => (o + count >= totalRecords ? totalRecords : o + count));
  }, [count, totalRecords]);

  const resetOffset = useCallback(() => {
    setOffset(count);
  }, [count]);

  return { showLoadMore, loadMore, computedRecords, resetOffset };
};

export default useLocalPagination;
