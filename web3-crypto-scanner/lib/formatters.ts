export function formatCurrency(
  value: number | null | undefined,
  currency = "USD",
  minimumFractionDigits?: number
): string {
  if (value === null || value === undefined || isNaN(value)) {
    return "-";
  }

  // For tiny prices like $0.000045, show more fraction digits
  let minDigits = minimumFractionDigits;
  let maxDigits = 2;

  if (minDigits === undefined) {
    if (value === 0) {
      minDigits = 2;
      maxDigits = 2;
    } else if (Math.abs(value) < 0.0001) {
      minDigits = 6;
      maxDigits = 8;
    } else if (Math.abs(value) < 1) {
      minDigits = 4;
      maxDigits = 4;
    } else {
      minDigits = 2;
      maxDigits = 2;
    }
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: minDigits,
    maximumFractionDigits: maxDigits,
  }).format(value);
}

export function formatCompactNumber(
  value: number | null | undefined,
  currency = "USD"
): string {
  if (value === null || value === undefined || isNaN(value)) {
    return "-";
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 2,
  }).format(value);
}

export function formatNumber(
  value: number | null | undefined,
  maximumFractionDigits = 2
): string {
  if (value === null || value === undefined || isNaN(value)) {
    return "-";
  }

  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits,
  }).format(value);
}

export function formatPercentage(
  value: number | null | undefined,
  includeSign = true
): string {
  if (value === null || value === undefined || isNaN(value)) {
    return "0.00%";
  }

  const sign = includeSign && value > 0 ? "+" : "";
  return `${sign}${value.toFixed(2)}%`;
}

export function formatDateTime(dateString: string | null | undefined): string {
  if (!dateString) return "-";
  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).format(date);
  } catch {
    return "-";
  }
}
