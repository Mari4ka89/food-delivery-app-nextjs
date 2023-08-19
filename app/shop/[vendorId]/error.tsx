"use client";

export default function ErrorWraper({ error }: { error: Error }) {
  return <h1>Ooops... {error.message}</h1>;
}
