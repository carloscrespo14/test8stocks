import React, {useMemo, useEffect, useState} from 'react';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';

import './index.scss';
import HttpHandler  from '../../utils/httpHandler';


interface InfoData {
  c: any[];
  i: number;
  p: number;
  s: number;
  t: string;
  x: string;
  z: string;
  symbol:  string;
}

interface Info {
  c: any[];
  i: number;
  p: number;
  s: number;
  t: string;
  x: string;
  z: string;
}
interface Trade {
  AAPL:Info;
  GOOG:Info;
  MSFT:Info;
}

interface TradeResponse {
  trades: Trade
}

const Lists: React.FC = () => {

  const [data,  setData] = useState<InfoData[]>([])

  useEffect(()=>{

    const httpHandler = new HttpHandler();
   
    httpHandler.getMethod('stocks/trades/latest', 'AAPL,GOOG,MSFT').then(

      (res: any)  => { 

        const response = res as TradeResponse;

        let array: InfoData[] = [];

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

  const formatDate = (date: string) => {
    return date;
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
