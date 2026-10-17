"use client";

import { useEffect, useState } from "react";

/**
 * Loads a list from the API in the browser. `items` is null while loading and
 * falls back to an empty list on failure, so callers can show their static fallback.
 */
export function useRemote<T>(load: () => Promise<T[]>) {
  const [items, setItems] = useState<T[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    load()
      .then((data) => !cancelled && setItems(data))
      .catch(() => !cancelled && setItems([]));
    return () => {
      cancelled = true;
    };
  }, [load]);

  return items;
}
