import { CounterButton, Link } from "@repo/ui";
import { log } from "@spanion/utils";
import Launch from "./launch";

export const metadata = {
  title: "App | Kitchen Sink",
};

export default function App(): JSX.Element {
  log("Hey! This is the App page.");

  return (
    <div className="container">
      <h1 className="title">
        App <br />
        <span>Kitchen Sink</span>
      </h1>
      <div>
        <Launch />
        <br />
        <CounterButton />
      </div>
      <p className="description">
        Built With{" "}
        <Link href="https://turbo.build/repo" newTab>
          Turborepo
        </Link>
        {" & "}
        <Link href="https://nextjs.org/" newTab>
          Next.js
        </Link>
      </p>
    </div>
  );
}
