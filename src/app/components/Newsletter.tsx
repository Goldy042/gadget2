"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Loading...");

    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setStatus("Thanks for subscribing! 🎉");
      setEmail("");
    } else {
      setStatus("Something went wrong.");
    }
  };

  return (
    <div className="bg-brown-700 text-white p-6 rounded-xl text-center">
      <h3 className="text-xl font-semibold mb-2">
        Stay Updated 🚀
      </h3>
      <p className="mb-4">Sign up to get offers & new product alerts.</p>
      <form onSubmit={handleSubmit} className="flex gap-2 justify-center">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className="p-2 rounded w-60 text-black"
        />
        <button
          type="submit"
          className="bg-white text-brown-700 px-4 rounded"
        >
          Subscribe
        </button>
      </form>
      {status && <p className="mt-2">{status}</p>}
    </div>
  );
}
