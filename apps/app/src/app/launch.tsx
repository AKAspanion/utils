"use client";
import { useFirstRender } from "@spanion/react-hooks";
import { capitalize, log } from "@spanion/utils";

export default function Launch(): JSX.Element {
  const firstRender = useFirstRender();
  log("Hey! this is rendering for first time", firstRender);

  return (
    <div>
      <div>
        This is using capitalize from utils. 10+20 = {capitalize("hello")}
      </div>
    </div>
  );
}
