import { issuers } from "@/data/issuers";
import { type ETF } from "@/types";

export const products: ETF[] = [
    { 
      id: 'blackrock-etha',
      issuer: issuers.blackrock,
      ticker: 'ETHA', 
      fee: .25,
      name: 'iShares Ethereum Trust',
      launchedAt: new Date('2024-07-23')
    },
    { 
      id: 'fidelity-feth',
      issuer: issuers.fidelity,
      ticker: "FETH", 
      fee: 0.25,
      name: 'Fidelity Ethereum Fund',
      launchedAt: new Date('2024-07-23')
    },
    { 
      id: 'bitwise-ethw',
      issuer: issuers.bitwise,
      ticker: "ETHW", 
      fee: 0.20,
      name: 'Bitwise Ethereum ETF',
      launchedAt: new Date('2024-07-23')
    },
    { 
      id: '21-shares-ceth',
      issuer: issuers.twentyOneShares,
      ticker: "CETH", 
      fee: 0.21,
      name: '21 Shares Core Ethereum ETF',
      launchedAt: new Date('2024-07-23')
    },
    { 
      id: 'vaneck-ethv',
      issuer: issuers.vaneck,
      ticker: "ETHV", 
      fee: 0.20,
      name: 'VanEck Ethereum ETF',
      launchedAt: new Date('2024-07-23')
    },
    { 
      id: 'invesco-qeth',
      issuer: issuers.invesco,
      ticker: "QETH", 
      fee: 0.25,
      name: 'Invesco Galaxy Ethereum ETF',
      launchedAt: new Date('2024-07-23')
    },
    { 
      id: 'franklin-ezet',
      issuer: issuers.franklin, 
      ticker: "EZET", 
      fee: 0.19,
      name: 'Franklin Ethereum ETF',
      launchedAt: new Date('2024-07-23')
    },
    { 
      id: 'grayscale-ethe',
      issuer: issuers.grayscale,
      ticker: "ETHE", 
      fee: 2.50,
      name: 'Grayscale Ethereum Trust',
      launchedAt: new Date('2024-07-23')
    },
    { 
      id: 'grayscale-mini-eth',
      issuer: issuers.grayscale,
      ticker: "ETH", 
      fee: 0.25,
      name: 'Grayscale Ethereum Mini Trust',
      launchedAt: new Date('2024-07-23')
    },
];