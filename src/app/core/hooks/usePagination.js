import { useState, useMemo } from 'react';

export default function usePagination(initialPage = 1, limit = 10) {
  const [page, setPage] = useState(initialPage);
  const [totalCount, setTotalCount] = useState(0);

  const totalPages = useMemo(() => {
    return Math.floor(totalCount / limit);
  }, [totalCount, limit]);

  const setOptions = (pagination) => {
    if (pagination.page) {
      setPage(pagination.page);
    }

    if (pagination.totalCount) {
      setTotalCount(pagination.totalCount);
    }
  };

  return { page, totalPages, limit, totalCount, setOptions };
}
