"use client";

import ButtonKlik from "@/components/Button";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <p className="mb-4">
        Kamu telah mengklik tombol ini sebanyak {count} kali.
      </p>
      <ButtonKlik handleKlik={handleClick}></ButtonKlik>
    </div>
  );
}
