export interface AppState {
    count: number;
    date: string;
}

export interface InfoData {
    c: any[];
    i: number;
    p: number;
    s: number;
    t: string;
    x: string;
    z: string;
    symbol:  string;
}

export interface Info {
    c: any[];
    i: number;
    p: number;
    s: number;
    t: string;
    x: string;
    z: string;
}

export interface Trade {
    AAPL:Info;
    GOOG:Info;
    MSFT:Info;
}

export interface TradeResponse {
    trades: Trade
}