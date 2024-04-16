import { FlaskConical } from "lucide-react";
import { Link } from "@repo/ui";
import Image from "next/image";

export const metadata = {
  title: "Utils | AKAspanion",
};

export default function App(): JSX.Element {
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
          <div className="link-wrapper">
            <Link className="link" href="utils/docs/index.html" newTab>
              <Image
                alt="@spanion/utils"
                height={24}
                src="https://img.shields.io/npm/v/%40spanion%2Futils?label=%40spanion%2Futils&style=flat-square"
                width={160}
              />
            </Link>
            <Link
              className="link link-icon"
              href="utils/report/index.html"
              newTab
            >
              <FlaskConical size={16} />
            </Link>
          </div>
          <div className="link-wrapper">
            <Link className="link" href="date-time/docs/index.html" newTab>
              <Image
                alt="@spanion/utils"
                height={24}
                src="https://img.shields.io/npm/v/%40spanion%2Fdate-time?style=flat-square&label=%40spanion%2Fdate-time"
                width={180}
              />
            </Link>
            <Link
              className="link link-icon"
              href="date-time/report/index.html"
              newTab
            >
              <FlaskConical size={16} />
            </Link>
          </div>
          <div className="link-wrapper">
            <Link className="link" href="react-hooks/docs/index.html" newTab>
              <Image
                alt="@spanion/utils"
                height={24}
                src="https://img.shields.io/npm/v/%40spanion%2Freact-hooks?style=flat-square&label=%40spanion%2Freact-hooks"
                width={200}
              />
            </Link>
            <Link
              className="link link-icon"
              href="react-hooks/report/index.html"
              newTab
            >
              <FlaskConical size={16} />
            </Link>
          </div>
        </div>
      </p>
    </div>
  );
}
