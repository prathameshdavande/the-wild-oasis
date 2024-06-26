import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export function useSettings() {
  const {
    isLoading,
    data: setting,
    error,
  } = useQuery({ queryKey: ["settings"], queryFn: getSettings });

  return { isLoading, setting, error };
}
