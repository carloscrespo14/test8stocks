import React, {useMemo, useEffect, useState, useContext} from 'react';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import moment from 'moment';

import './index.scss';
import HttpHandler  from '../../utils/httpHandler';
import { AppContext } from '../../context/Context';
import {InfoData, TradeResponse} from '../../interfaces/interfaces'


const Lists: React.FC = () => {

  const { updateState } = useContext(AppContext)

  const [data,  setData] = useState<InfoData[]>([])

  useEffect(()=>{

    const httpHandler = new HttpHandler();
   
    httpHandler.getMethod('stocks/trades/latest', 'AAPL,GOOG,MSFT').then(

      (res: any)  => { 

        const response = res as TradeResponse;

        const array: InfoData[] = [];

        for (const [key, value] of Object.entries(response.trades)) {
          const obj:InfoData = value;
          obj.symbol = key;
          array.push(obj)
        }
        
        
        setData(array)
        
      },

      (err: any) => console.log('err', err)
    )
  },[]);
  

  useEffect(()=>{

    if(updateState) {

      updateState(data.length, data[0]?.t)

    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[data])



  const formatDate = (date: string) => {  

    return moment(new Date(date)).format("YYYY-MM-DD HH:mm:ss");

  }

  const columns = useMemo( 
    () =>
      [
        {
          header: 'ID',
          id: 'i',
        },
        {
          header: 'Symbol',
          id: 'symbol',
          Cell: ({ cell })  => (<p className='symbols'>{String(cell.getValue())}</p>)
        },
        {
          header: 'Time',
          id: 't',
          Cell: ({ cell })  =>  (<p>{String(formatDate(String(cell.getValue())))}</p>)
        },
        {
          header: 'Exchange',
          id: 'x',
        },
        {
          header: 'Price',
          id: 'p',
        },
        {
          header: 'Size',
          id: 's',
        }
      ] as MRT_ColumnDef<InfoData>[],
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
