"use server";

import Counter from "@/components/Counter";

export default async function AboutPage() {
  // const res = await fetch("/api/halo");
  // const data = await res.json();
  // console.log("Data dari API Route:", data);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Counter />
    </div>
  );
}
