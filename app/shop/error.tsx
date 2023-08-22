"use client";

export default function ErrorWraper({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  // TODO: update button background color to match with links color
  return (
    <div>
      <h1>Error</h1>
      <p>{error?.message}</p>
      <button
        className="rounded-md bg-indigo-500 font-semibold text-white py-2 px-3"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
}
