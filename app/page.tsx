"use client";

import { Button } from "@heroui/button";
import Link from "next/link";
import { FaRegSmile } from "react-icons/fa";

export default function Home() {
  return (
    <Button
      href='/members'
      as={Link}
      color='primary'
      variant='bordered'
      startContent={<FaRegSmile />}
    >
      Click me
    </Button>
  );
}
