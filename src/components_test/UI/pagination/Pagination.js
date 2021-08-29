import React from 'react';
import { getPagesArray } from '../../utils/pages';

const Pagination = ({ totalPages, page, changePage }) => {
  let pagesArray = getPagesArray(totalPages);

  return (
    <div style={{ marginTop: '30px', display: 'flex' }}>
      {pagesArray.map((p) => (
        <span
          style={{
            marginRight: '5px',
            padding: '10px',
            border: '1px solid dodgerblue',
            cursor: 'pointer',
          }}
          key={p}
          onClick={() => changePage(p)}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
