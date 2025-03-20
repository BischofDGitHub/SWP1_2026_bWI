import React from "react";

type Props = {
  content: string;
  submitter?: string;
};

export default function Quote({ content, submitter }: Props) {
  return (
    <div>
      {content} - {submitter ?? "Unbekannt"}
    </div>
  );
}
