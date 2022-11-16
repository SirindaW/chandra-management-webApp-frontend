import React from 'react';
// import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';
import FilterBox from '../Filterbox/FilterBox.jsx';
// import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';

const Guests = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div >
      <FilterBox />
    </div>
  );
};
export default Guests;

