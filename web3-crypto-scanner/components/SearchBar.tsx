import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  searchQuery: string;
  onSearch: (value: string) => void;
}

export default function SearchBar({ searchQuery, onSearch }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-sm">
      <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
      <Input
        type="text"
        placeholder="Cari crypto (nama atau simbol)..."
        value={searchQuery}
        onChange={(e) => onSearch(e.target.value)}
        className="pl-8 h-9 text-sm"
      />
    </div>
  );
}

