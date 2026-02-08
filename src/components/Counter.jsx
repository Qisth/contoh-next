"use client";

import { useState } from "react";
import ButtonKlik from "./Button";

export default function Counter({}) {
  const [count, setCount] = useState(0);

  function klikTombol() {
    setCount(count + 1);
  }

  return (
    <>
      <p>Anda sudah mengklik tombol sebanyak {count} kali</p>
      <ButtonKlik handleKlik={klikTombol}></ButtonKlik>
    </>
  );
}
