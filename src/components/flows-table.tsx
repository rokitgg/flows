import { products } from "@/data/products";
import { type FlowData } from "@/types";


import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card } from "@/components/ui/card";


const DailyFlow: { date: string; flows: FlowData } = {
  date: "7/23/2024",
  flows: {
    ETHA: 0,
    FETH: 0,
    ETHW: 0,
    CETH: 0,
    ETHV: 0,
    QETH: 0,
    EZET: 0,
    ETHE: 0,
    ETH: 0,
  }
};

export function FlowsTable() {
  const totalDailyFlow = Object.values(DailyFlow.flows).reduce((sum, flow) => sum + flow, 0);

  return (
    <Card className="p-6 border border-secondary rounded-md overflow-hidden">
      <Table className="border-collapse border-input rounded-md">
        <TableCaption>Ethereum ETF Flows (US$m)</TableCaption>

        <TableHeader>
          <TableRow className="">
            <TableHead className="font-semibold border-r text-white">Issuer</TableHead>
            {products.map((etf) => (
              <TableHead key={etf.ticker} className="font-medium text-white">{etf.issuer}</TableHead>
            ))}
            <TableHead className="font-bold">Total</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow className="">
            <TableCell className="font-semibold border-r">Ticker</TableCell>
            {products.map((etf) => (
              <TableCell key={etf.ticker} className="text-right">${etf.ticker}</TableCell>
            ))}
            <TableCell></TableCell>
          </TableRow>
          <TableRow className="">
            <TableCell className="font-semibold border-r">Fee</TableCell>
            {products.map((etf) => (
              <TableCell key={etf.ticker} className="text-right">{etf.fee}%</TableCell>
            ))}
            <TableCell></TableCell>
          </TableRow>
          <TableRow className="bg-emerald-800/80">
            <TableCell className="font-semibold border-r">{DailyFlow.date}</TableCell>
            {products.map((etf) => (
              <TableCell key={etf.ticker} className="text-right">
                {(DailyFlow.flows[etf.ticker] || 0).toFixed(1)}
              </TableCell>
            ))}
            <TableCell className="font-bold text-right">{totalDailyFlow.toFixed(1)}</TableCell>
          </TableRow>
        </TableBody>

        <TableFooter>
          <TableRow className="">
            <TableCell className="font-bold border-r">Total</TableCell>
            {products.map((etf) => (
              <TableCell key={etf.ticker} className="font-bold text-right">
                {(DailyFlow.flows[etf.ticker] || 0).toFixed(1)}
              </TableCell>
            ))}
            <TableCell className="font-bold text-right">{totalDailyFlow.toFixed(1)}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </Card>
  )
}