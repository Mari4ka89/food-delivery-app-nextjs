import React from "react";

export default function Footer() {
  return (
    <footer className="text-center fixed bottom-0 right-0 left-0 py-2">
      <a
        href="https://github.com/Mari4ka89/food-delivery-app-nextjs"
        className="underline"
        target="_blank"
      >
        Open-source code
      </a>{" "}
      by Mariia Bezrukava which is{" "}
      <a
        href="https://eloquent-lolly-85c74a.netlify.app/"
        className="underline"
        target="_blank"
      >
        hosted on Netlify
      </a>
    </footer>
  );
}
