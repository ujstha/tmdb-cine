import React from 'react';
import Pagination from 'react-js-pagination';
import { goToUrl } from '../../services/goToUrl';

export const Paging = ({ pagination, urlType }) => {
  const handlePageChange = (pageNumber) => {
    goToUrl(`/page/${pageNumber}/${urlType}/${window.location.search}`);
  };
  return (
    <div className='pagination-container col-md-12'>
      <h5>
        Page&ensp;{pagination.page}&ensp;of&ensp;{pagination.total_pages}
      </h5>
      <Pagination
        activePage={pagination.page}
        itemsCountPerPage={20}
        totalItemsCount={pagination.total_results}
        pageRangeDisplayed={3}
        onChange={handlePageChange}
        prevPageText={<i className='fa fa-angle-left' />}
        nextPageText={<i className='fa fa-angle-right' />}
        firstPageText={<i className='fa fa-angle-double-left' />}
        lastPageText={<i className='fa fa-angle-double-right' />}
      />
    </div>
  );
};
