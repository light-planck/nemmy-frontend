"use client";

import { Button } from "@nextui-org/react";

const Home = () => {
  return (
    <>
      <p>I&apos;m nemmy...🥱</p>
      <p className="text-large">Are you nemmy?</p>
      <Button color="primary">Yes!</Button>
      <Button color="danger">No!</Button>
    </>
  );
};

export default Home;
