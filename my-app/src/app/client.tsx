"use client";
import { useState } from "react";
import { action } from "./client-action";

export function Client() {
  const [i, setState] = useState(0);
  const [clicks, setClicks] = useState(null);
  return (
    <>
      <div className="font-mono text-center w-full text-sm flex items-center">
        Client State {i}
        <button
          className="bg-foreground text-background mx-2"
          onClick={() => setState((v) => v + 1)}
        >
          Increment
        </button>
      </div>
      <div className="font-mono text-center w-full text-sm flex items-center">
        Clicks from Redis via Server Action
        {clicks == null ? (
          <button
            className="bg-foreground text-background mx-2"
            onClick={async () => {
              setClicks(await action());
            }}
          >
            Get
          </button>
        ) : (
          <span className="px-2">{clicks}</span>
        )}
      </div>
    </>
  );
}
