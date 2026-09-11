import { TableRow, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { iCrypto } from "@/types/crypto";
import {
  formatCurrency,
  formatCompactNumber,
  formatNumber,
  formatPercentage,
  formatDateTime,
} from "@/lib/formatters";
import { TrendingUp, TrendingDown } from "lucide-react";

interface CryptoCardProps {
  crypto?: iCrypto;
  name?: string;
  price?: number;
  image?: string;
  priceChange?: number;
}

export default function CryptoCard({
  crypto,
  name: propName,
  price: propPrice,
  image: propImage,
  priceChange: propPriceChange,
}: CryptoCardProps) {
  // Support both passing full crypto object or individual props
  const name = crypto?.name ?? propName ?? "-";
  const symbol = crypto?.symbol ?? "";
  const image = crypto?.image ?? propImage ?? "";
  const price = crypto?.current_price ?? propPrice ?? 0;
  const priceChange =
    crypto?.price_change_percentage_24h ?? propPriceChange ?? 0;
  const rank = crypto?.market_cap_rank ?? "-";
  const high24h = crypto?.high_24h;
  const low24h = crypto?.low_24h;
  const volume = crypto?.total_volume;
  const marketCap = crypto?.market_cap;
  const circulatingSupply = crypto?.circulating_supply;
  const ath = crypto?.ath;
  const athChange = crypto?.ath_change_percentage;
  const lastUpdated = crypto?.last_updated;

  const isPositive = priceChange >= 0;

  return (
    <TableRow className="hover:bg-muted/50 transition-colors">
      {/* Rank */}
      <TableCell className="text-center font-medium">
        <Badge variant="outline" className="text-xs px-1.5 py-0 font-mono">
          {rank}
        </Badge>
      </TableCell>

      {/* Asset: Image, Name, Symbol */}
      <TableCell>
        <div className="flex items-center gap-2.5 min-w-[130px]">
          {image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={image}
              alt={name}
              className="size-6 rounded-full object-contain shrink-0 bg-muted"
              onError={(e) => {
                (e.target as HTMLElement).style.opacity = "0";
              }}
            />
          )}
          <div className="flex flex-col leading-tight">
            <span className="font-medium text-sm text-foreground">{name}</span>
            {symbol && (
              <span className="text-[11px] text-muted-foreground uppercase font-semibold">
                {symbol}
              </span>
            )}
          </div>
        </div>
      </TableCell>

      {/* Price */}
      <TableCell className="text-right font-medium font-mono text-sm">
        {formatCurrency(price)}
      </TableCell>

      {/* 24h Change */}
      <TableCell className="text-right">
        <span
          className={`inline-flex items-center gap-1 font-mono text-xs font-semibold px-2 py-0.5 rounded-full ${
            isPositive
              ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
              : "bg-rose-500/10 text-rose-600 dark:text-rose-400"
          }`}
        >
          {isPositive ? (
            <TrendingUp className="size-3 shrink-0" />
          ) : (
            <TrendingDown className="size-3 shrink-0" />
          )}
          {formatPercentage(priceChange)}
        </span>
      </TableCell>

      {/* 24h High / Low */}
      <TableCell className="text-right font-mono text-xs whitespace-nowrap">
        {high24h !== undefined ? (
          <div>
            <div className="text-emerald-600 dark:text-emerald-400 font-medium">
              {formatCurrency(high24h)}
            </div>
            <div className="text-muted-foreground text-[11px]">
              {formatCurrency(low24h)}
            </div>
          </div>
        ) : (
          "-"
        )}
      </TableCell>

      {/* 24h Volume */}
      <TableCell className="text-right font-mono text-xs">
        {volume !== undefined ? formatCompactNumber(volume) : "-"}
      </TableCell>

      {/* Market Cap */}
      <TableCell className="text-right font-mono text-xs font-medium">
        {marketCap !== undefined ? formatCompactNumber(marketCap) : "-"}
      </TableCell>

      {/* Circulating Supply */}
      <TableCell className="text-right font-mono text-xs whitespace-nowrap">
        {circulatingSupply !== null && circulatingSupply !== undefined ? (
          <div>
            <div>{formatNumber(circulatingSupply, 0)}</div>
            {symbol && (
              <div className="text-[11px] text-muted-foreground uppercase">
                {symbol}
              </div>
            )}
          </div>
        ) : (
          "-"
        )}
      </TableCell>

      {/* ATH & Drop */}
      <TableCell className="text-right font-mono text-xs whitespace-nowrap">
        {ath !== null && ath !== undefined ? (
          <div>
            <div>{formatCurrency(ath)}</div>
            {athChange !== null && athChange !== undefined && (
              <div className="text-[11px] text-rose-500 dark:text-rose-400">
                {formatPercentage(athChange)}
              </div>
            )}
          </div>
        ) : (
          "-"
        )}
      </TableCell>

      {/* Last Updated */}
      <TableCell className="text-right text-xs text-muted-foreground whitespace-nowrap">
        {formatDateTime(lastUpdated)}
      </TableCell>
    </TableRow>
  );
}

