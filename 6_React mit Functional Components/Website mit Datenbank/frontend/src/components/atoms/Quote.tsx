import React, { useEffect, useState } from "react";
import { useFetcher } from "react-router-dom";

type Props = {
  content: string;
  submitter?: string;
};

export default function Quote({ content, submitter }: Props) {
  const thePeak = (
    <iframe
      className="rounded"
      src="https://open.spotify.com/embed/track/2hXPmiqKdXcbV0L1VKnTDN?utm_source=generator"
      width="100%"
      height="352"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );

  return (
    <div className="">
      {content} - {submitter ?? "Unbekannt"}
    </div>
  );
}
