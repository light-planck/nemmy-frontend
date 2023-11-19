import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";

export const useUser = (userId: string) => {
  const endPoint = `/api/users/${userId}`;
  const { data, isLoading, mutate } = useSWR(userId === "" ? null : endPoint, {
    fetcher,
  });

  return {
    user: data,
    isLoading: isLoading,
    mutate,
  };
};
