import { useState } from "react";
import useSWRMutation from "swr/mutation";

import { fetcher } from "@/lib/fetcher";
import { getBaseAPIEndPoint } from "@/lib/getBaseAPIEndPoint";

import { User } from "../types";

export const useUser = () => {
  const [username, setUsername] = useState("");
  const { data, isMutating, trigger } = useSWRMutation<User>(
    getBaseAPIEndPoint() + `/users/${username}`,
    fetcher,
  );

  return {
    username,
    user: data,
    isMutating,
    setUsername,
    trigger,
  };
};
