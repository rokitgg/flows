export type ETF = {
    id: string
    issuer: string;
    name: string;
    ticker: string;
    fee: number;
    launchedAt: Date;
};

export type FlowData = {
    [key: string]: number
};


export type IssuerKey = 
  | 'blackrock'
  | 'fidelity'
  | 'bitwise'
  | 'twentyOneShares'
  | 'vaneck'
  | 'invesco'
  | 'franklin'
  | 'grayscale';

export type IssuersList = Record<IssuerKey, string>;