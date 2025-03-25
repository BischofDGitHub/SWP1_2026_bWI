import React from "react";

type Props = {
  content: string;
  submitter?: string;
};

export default function Quote({ content, submitter }: Props) {
  return (
    <div>
      {content} - {submitter ?? "Unbekannt"}
      <iframe
        className="rounded"
        src="https://open.spotify.com/embed/track/2hXPmiqKdXcbV0L1VKnTDN?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}
