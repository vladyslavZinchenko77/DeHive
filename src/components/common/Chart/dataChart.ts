export interface DataPoint {
    date: string;
    'ETH-CORE': number;
    Poly: number;
    PolyGaming: number;
  }
  
  export const data: DataPoint[] = [
    { date: 'Aug 01', 'ETH-CORE': 20, Poly: 18, PolyGaming: 12 },
    { date: 'Aug 02', 'ETH-CORE': 63, Poly: 78, PolyGaming: 34 },
    { date: 'Aug 03', 'ETH-CORE': 58, Poly: 63, PolyGaming: 59 },
    { date: 'Aug 04', 'ETH-CORE': 79, Poly: 81, PolyGaming: 61 },
    { date: 'Aug 05', 'ETH-CORE': 65, Poly: 95, PolyGaming: 62 },
    { date: 'Aug 06', 'ETH-CORE': 90, Poly: 60, PolyGaming: 49 },
    { date: 'Aug 07', 'ETH-CORE': 98, Poly: 72, PolyGaming: 70 },
    { date: 'Aug 08', 'ETH-CORE': 102, Poly: 100, PolyGaming: 75 },
    { date: 'Aug 09', 'ETH-CORE': 94, Poly: 115, PolyGaming: 82 },
    { date: 'Aug 10', 'ETH-CORE': 115, Poly: 120, PolyGaming: 94 },
    { date: 'Aug 11', 'ETH-CORE': 119.2, Poly: 129, PolyGaming: 92 },
    { date: 'Aug 12', 'ETH-CORE': 129, Poly: 157, PolyGaming: 150 },
  ];