"use client";
import { useFirstRender } from "@spanion/react-hooks";
import { add, log } from "@spanion/utils";

export const metadata = {
  title: "App | Kitchen Sink",
};

export default function Launch(): JSX.Element {
  const firstRender = useFirstRender();
  log("Hey! this is rendering for first time", firstRender);

  return (
    <div>
      <div>This calculation is using utils. 10+20 = {add(10, 20)}</div>
    </div>
  );
}
