import { useMemo } from 'react';

export default function Pagination(props) {
  const {
    page = 1,
    limit,
    totalCount,
    onChange
  } = props;

  const totalPages = useMemo(() => {
    return Math.floor(totalCount / limit);
  }, [totalCount, limit]);

  const hasPrevious = page > 1;
  const hasNext = page < totalPages;

  const disabledClass = (isDisabled) => {
    return isDisabled ? ' opacity-15' : '';
  }

  const onPageChange = (isActive, move) => {
    if (isActive) {
      onChange(page + move);
    }
  };

  if (totalPages < 2) {
    return null;
  }

  return (
    <div className="row align-items-center justify-content-between">
      <div className="col-auto">
        <button className={'btn btn-active-color-primary border-end ps-0' + disabledClass(!hasPrevious)}
          disabled={!hasPrevious} onClick={() => onPageChange(hasPrevious, - 1)}>
          <i className="bi bi-chevron-left svg-icon ms-2 me-0"></i>
          Anterior
        </button>
      </div>

      <div className="col text-center">
        <span className="badge badge-primary badge-lg">
          {page}
        </span>
      </div>

      <div className="col-auto">
        <button className={'btn btn-active-color-primary border-start pe-0' + disabledClass(!hasNext)}
          disabled={!hasNext} onClick={() => onPageChange(hasNext, + 1)}>
          Siguiente&nbsp;
          <i className="bi bi-chevron-right svg-icon"></i>
        </button>
      </div>
    </div>
  );
}
