import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full relative h-14 bg-gray-800 text-white flex items-center justify-center">
      <h1>GDGoC USU</h1>
      <div className="absolute flex right-10 gap-4 px-10 *:hover:underline">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
