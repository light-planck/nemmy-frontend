"use client";

import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <p>I&apos;m nemmy...🥱</p>
      <p className="text-large">Are you nemmy?</p>
      <Button color="primary">Yes!</Button>
      <Button color="danger">No!</Button>
    </>
  );
}
