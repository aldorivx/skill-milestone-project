import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import CryptoCard from "./CryptoCard";
import { iCrypto } from "@/types/crypto";

interface CryptoListProps {
  cryptos: iCrypto[];
  isLoading?: boolean;
}

export default function CryptoList({ cryptos, isLoading }: CryptoListProps) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-xs overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/40 hover:bg-muted/40">
            <TableHead className="w-12 text-center font-semibold">#</TableHead>
            <TableHead className="font-semibold">Aset</TableHead>
            <TableHead className="text-right font-semibold">Harga</TableHead>
            <TableHead className="text-right font-semibold">24j %</TableHead>
            <TableHead className="text-right font-semibold">
              24j High / Low
            </TableHead>
            <TableHead className="text-right font-semibold">
              Volume (24j)
            </TableHead>
            <TableHead className="text-right font-semibold">
              Market Cap
            </TableHead>
            <TableHead className="text-right font-semibold">
              Suplai Beredar
            </TableHead>
            <TableHead className="text-right font-semibold">ATH</TableHead>
            <TableHead className="text-right font-semibold">
              Terakhir Update
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            Array.from({ length: 10 }).map((_, index) => (
              <TableRow key={index}>
                <TableCell className="text-center">
                  <Skeleton className="h-4 w-6 mx-auto rounded" />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2.5">
                    <Skeleton className="size-6 rounded-full" />
                    <div className="space-y-1">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-3 w-10" />
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <Skeleton className="h-4 w-20 ml-auto" />
                </TableCell>
                <TableCell className="text-right">
                  <Skeleton className="h-5 w-16 ml-auto rounded-full" />
                </TableCell>
                <TableCell className="text-right">
                  <Skeleton className="h-4 w-24 ml-auto" />
                </TableCell>
                <TableCell className="text-right">
                  <Skeleton className="h-4 w-20 ml-auto" />
                </TableCell>
                <TableCell className="text-right">
                  <Skeleton className="h-4 w-20 ml-auto" />
                </TableCell>
                <TableCell className="text-right">
                  <Skeleton className="h-4 w-24 ml-auto" />
                </TableCell>
                <TableCell className="text-right">
                  <Skeleton className="h-4 w-20 ml-auto" />
                </TableCell>
                <TableCell className="text-right">
                  <Skeleton className="h-4 w-16 ml-auto" />
                </TableCell>
              </TableRow>
            ))
          ) : cryptos.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={10}
                className="h-32 text-center text-muted-foreground text-sm"
              >
                Tidak ada data crypto yang ditemukan.
              </TableCell>
            </TableRow>
          ) : (
            cryptos.map((crypto) => (
              <CryptoCard key={crypto.id} crypto={crypto} />
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}

