export interface iCrypto {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number | null;
  total_volume: number;
  high_24h: number | null;
  low_24h: number | null;
  price_change_24h: number | null;
  price_change_percentage_24h: number | null;
  market_cap_change_24h: number | null;
  market_cap_change_percentage_24h: number | null;
  circulating_supply: number | null;
  total_supply: number | null;
  max_supply: number | null;
  ath: number | null;
  ath_change_percentage: number | null;
  ath_date: string | null;
  atl: number | null;
  atl_change_percentage: number | null;
  atl_date: string | null;
  roi: {
    times: number;
    currency: string;
    percentage: number;
  } | null;
  last_updated: string;
}

export interface iCryptoApiResponse {
  data: iCrypto[];
}

export type SortField =
  | "market_cap_rank"
  | "name"
  | "current_price"
  | "price_change_percentage_24h"
  | "total_volume"
  | "market_cap";

export type SortOrder = "asc" | "desc";
export type FilterCategory = "all" | "gainers" | "losers" | "top10";

