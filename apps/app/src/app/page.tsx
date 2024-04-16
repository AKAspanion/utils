import { Link } from "@repo/ui";
import { log } from "@spanion/utils";

export const metadata = {
  title: "Utils | AKAspanion",
};

export default function App(): JSX.Element {
  log("Hey! This is the App page.");

  return (
    <div className="container">
      <h1 className="title">
        <span>Utils</span>
      </h1>
      <p className="description">
        The following packages contain all the reusable utilities, hooks,
        helpers, etc., that I have used in my various projects till now.
        <br />
        All these libraries have 0 dependecies, are 100% typescript and are 100%
        native.
        <br />
        <br />
        <div className="links">
          <Link className="link" href="utils/docs/index.html" newTab>
            @spanion/utils
          </Link>
          <Link className="link" href="date-time/docs/index.html" newTab>
            @spanion/date-time
          </Link>
          <Link className="link" href="react-hooks/docs/index.html" newTab>
            @spanion/react-hooks
          </Link>
        </div>
      </p>
    </div>
  );
}
