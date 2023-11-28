import { useState } from "react";
import useSWRMutation from "swr/mutation";

import { fetcher } from "@/lib/fetcher";
import { getBaseAPIEndPoint } from "@/lib/getBaseAPIEndPoint";

import { User } from "../types";

export const useUser = () => {
  const [userId, setUserId] = useState("");
  const { data, isMutating, trigger } = useSWRMutation<User>(
    getBaseAPIEndPoint() + `/users/${userId}`,
    fetcher,
  );

  return {
    userId,
    user: data,
    isMutating,
    setUserId,
    trigger,
  };
};
