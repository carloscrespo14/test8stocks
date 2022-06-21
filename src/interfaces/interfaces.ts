export interface AppState {
    /*  count for companies return by api */
    count: number;
    /* date of the last request */
    date: string;
}

export interface InfoData {
    /* Trade conditions */
    c: any[];
    /* Trade ID */
    i: number;
    /* Trade price */
    p: number;
    /* Trade size */
    s: number;
    /* Timestamp in RFC-3339 format with nanosecond precision */
    t: string;
    /* Exchange where the trade happened */
    x: string;
    /* Tape */
    z: string;
    /* Symbol queried for */
    symbol: string;
}

export interface Info {
    /* Trade conditions */
    c: any[];
    /* Trade ID */
    i: number;
    /* Trade price */
    p: number;
    /* Trade size */
    s: number;
    /* Timestamp in RFC-3339 format with nanosecond precision */
    t: string;
    /* Exchange where the trade happened */
    x: string;
    /* Tape */
    z: string;
}

export interface Trade {
    /* Companies info Responsed by API */
    AAPL:Info;
    GOOG:Info;
    MSFT:Info;
}

export interface TradeResponse {
    /* Api Response */
    trades: Trade
}