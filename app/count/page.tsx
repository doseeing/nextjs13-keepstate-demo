"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";

const CounterPage: React.FC = () => {
  const searchParams = useSearchParams();

  const n = parseInt(searchParams.get("n") || "0");

  return (
    <div>
      <h1>Counter Page</h1>
      <p>Count: {n}</p>
      <div>
        <Link replace href={`/count?n=${n + 1}`}>
          <button>Increment</button>
        </Link>
        <Link replace href={`/count?n=${n - 1}`}>
          <button>Decrement</button>
        </Link>
      </div>
      <div>
        <div>
          <Link href="/about">About</Link>
        </div>
      </div>
    </div>
  );
};

export default CounterPage;
