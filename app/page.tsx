import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      welcome
      <Link href="/count">
        <div>count</div>
      </Link>
      <Link href="/about">
        <div>about</div>
      </Link>
    </main>
  );
}
