import { useState, useEffect } from "react";

function throttle<Args extends unknown[]>(
  fn: (...args: Args) => void,
  cooldown: number
) {
  let lastArgs: Args | undefined;

  const run = () => {
    if (lastArgs) {
      fn(...lastArgs);
      lastArgs = undefined;
    }
  };

  const throttled = (...args: Args) => {
    const isOnCooldown = !!lastArgs;

    lastArgs = args;

    if (isOnCooldown) {
      return;
    }

    window.setTimeout(run, cooldown);
  };

  return throttled;
}

export const useGetMousePosition = (isSkipCheck?: boolean) => {
  const [x, setX] = useState(window.innerWidth / 2);
  const [y, setY] = useState(window.innerHeight / 2);

  const onMouseUpdate = (e: MouseEvent) => {
    // throttle(() => {
    setX(e.pageX);
    setY(e.pageY);
    // }, 10);

    console.log(x, y);
  };

  useEffect(() => {
    //
  }, [isSkipCheck]);

  if (!isSkipCheck) {
    document.addEventListener("mousemove", onMouseUpdate, false);
    document.addEventListener("mouseenter", onMouseUpdate, false);
  }

  useEffect(() => {
    return () => {
      document.removeEventListener("mousemove", onMouseUpdate, false);
      document.removeEventListener("mouseenter", onMouseUpdate, false);
    };
  });

  return { x, y };
};
