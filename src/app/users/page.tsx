"use client";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useState } from "react";
import { useUser } from "./hooks/useUser";

const Users = () => {
  const [userId, setUserId] = useState("");
  const { user, isLoading } = useUser(userId);

  console.log(user);

  return (
    <div className="flex flex-col items-center justify-center gap-5 mt-20">
      <h1>ユーザー検索</h1>
      <div className="w-1/4">
        <Input value={userId} onValueChange={setUserId} label="ユーザーID" />
      </div>
      <Button color="success" isLoading={isLoading}>
        検索
      </Button>
    </div>
  );
};

export default Users;
