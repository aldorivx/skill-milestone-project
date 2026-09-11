"use client";

import { useState, useEffect, useMemo } from "react";
import CryptoList from "@/components/CryptoList";
import SearchBar from "./SearchBar";
import { iCrypto } from "@/types/crypto";
import { AlertCircle } from "lucide-react";

export default function CryptoContainer() {
  const [cryptos, setCryptos] = useState<iCrypto[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const fetchCrypto = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1",
          { signal: controller.signal },
        );
        if (res.status === 429) {
          throw new Error(
            "Rate limit tercapai (HTTP 429). Tunggu 1 menit sebelum refresh.",
          );
        }
        if (!res.ok) {
          throw new Error(`Gagal memuat data: HTTP ${res.status}`);
        }
        const data: iCrypto[] = await res.json();
        setCryptos(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          if (err.name !== "AbortError") {
            setError(err.message || "Terjadi kesalahan jaringan.");
          }
        } else {
          setError("Terjadi kesalahan jaringan.");
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchCrypto();
    return () => controller.abort();
  }, []);

  const filteredCrypto = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return cryptos;
    return cryptos.filter(
      (crypto) =>
        crypto.name.toLowerCase().includes(query) ||
        crypto.symbol.toLowerCase().includes(query),
    );
  }, [cryptos, searchQuery]);

  return (
    <div className="w-full max-w-7xl mx-auto space-y-6">
      {/* Header & Search */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-2 border-b">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            Crypto Scanner
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Data pasar cryptocurrency real-time
          </p>
        </div>
        <SearchBar searchQuery={searchQuery} onSearch={setSearchQuery} />
      </div>

      {/* Error State */}
      {error && (
        <div className="flex items-center gap-2 p-3 text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-lg">
          <AlertCircle className="size-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Table Display */}
      <CryptoList cryptos={filteredCrypto} isLoading={isLoading} />
    </div>
  );
}
