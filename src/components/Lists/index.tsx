import React, {useMemo, useEffect} from 'react';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';

import './index.scss';
import HttpHandler  from '../../utils/httpHandler';

type Person = {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
};

const Lists: React.FC = () => {

  useEffect(()=>{
    const httpHandler = new HttpHandler();
    httpHandler.getMethod('stocks/trades/latest', ['AAPL','GOOG', 'MSFT'])
    httpHandler.getMethod('stocks/trades/latest', 'AAPL,GOOG,MSFT')
  },[])

  const columns = useMemo(
    () =>
      [
        {
          header: 'First Name',
          id: 'firstName',
        },
        {
          header: 'Last Name',
          id: 'lastName',
        },
        {
          header: 'Address',
          id: 'address',
        },
        {
          header: 'City',
          id: 'city',
        },
        {
          header: 'State',
          id: 'state',
        },
      ] as MRT_ColumnDef<Person>[],
    [],
  );

  const data = useMemo(
    () => [
      {
        firstName: 'Dylan',
        lastName: 'Murray',
        address: '261 Erdman Ford',
        city: 'East Daphne',
        state: 'Kentucky',
      },
      {
        firstName: 'Raquel',
        lastName: 'Kohler',
        address: '769 Dominic Grove',
        city: 'Columbus',
        state: 'Ohio',
      },
      {
        firstName: 'Ervin',
        lastName: 'Reinger',
        address: '566 Brakus Inlet',
        city: 'South Linda',
        state: 'West Virginia',
      },
      {
        firstName: 'Brittany',
        lastName: 'McCullough',
        address: '722 Emie Stream',
        city: 'Lincoln',
        state: 'Nebraska',
      }
    ],
    [],
  );

  return (
    <section className='lists'>
        <div className="container">
          <div className='lists-table'>
            <MaterialReactTable 
              columns={columns} 
              data={data}
              enableColumnActions={false}
              enableColumnFilters={false}
              enablePagination={false}
              enableSorting={true}
              enableStickyHeader={false}
              enableToolbarBottom={false}
              enableToolbarTop={false} 
            />
          </div>
        </div>
      </section>
  )
}

export default Lists;
