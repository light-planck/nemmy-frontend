"use client";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useState } from "react";
import { User } from "@nextui-org/react";
import useSWRMutation from "swr/mutation";
import { fetcher } from "@/lib/fetcher";
import { getBaseAPIEndPoint } from "@/lib/getBaseAPIEndPoint";

interface GetUserResponse {
  userId: number;
  username: string;
}

const Users = () => {
  const [userId, setUserId] = useState("");
  const {
    data: user,
    isMutating,
    trigger,
  } = useSWRMutation<GetUserResponse>(
    getBaseAPIEndPoint() + `/users/${userId}`,
    fetcher,
  );

  const handleClick = () => {
    trigger();
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5 mt-20">
      <h1>ユーザー検索</h1>
      <div className="w-1/4">
        <Input value={userId} onValueChange={setUserId} label="ユーザーID" />
      </div>
      <Button color="success" isLoading={isMutating} onClick={handleClick}>
        検索
      </Button>
      {user && (
        <User
          name={user.username}
          description={<p>ユーザーID: {user.userId}</p>}
        />
      )}
    </div>
  );
};

export default Users;
