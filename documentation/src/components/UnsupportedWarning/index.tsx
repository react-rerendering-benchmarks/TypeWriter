import React from "react";
import Admonition from "@theme/Admonition";
interface UnsupportedWarningProps {
  adapter: boolean;
}
export default function UnsupportedWarning(props: UnsupportedWarningProps) {
  console.log(window.globalCount++);
  return (
    <Admonition type="danger" title="Unsupported Warning">
      <p>
        This {props.adapter ? "Adapter" : "Entry"} has been marked as
        unsupported. This means that you will not get any support for this{" "}
        {props.adapter ? "Adapter" : "Entry"} except from bugfixes.
        <br />
        <b>It may be removed from the repository at any time.</b>
      </p>
    </Admonition>
  );
}
declare global {
  interface Window {
    globalCount: number;
  }
}
window.globalCount = window.globalCount || 0;
