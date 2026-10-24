import React from "react";
import "./portfolio.styles.css";

export const Portfolio = ({ content, featured = false }) => {
  const hasVerificationLink =
    content.siteURL.includes("coursera.org/account/accomplishments/") ||
    content.siteURL.includes("hackerrank.com/certificates/");
  const actionUrl = hasVerificationLink ? content.siteURL : content.imageURL.trim();

  return (
    <article className={`credential-card${featured ? " credential-card-featured" : ""}`}>
      <img
        className="credential-image"
        src={content.imageURL.trim()}
        alt={`${content.displayInfo} certificate`}
        loading="lazy"
      />
      <div className="credential-body">
        <div className="credential-meta">
          {content.issuer && <span>{content.issuer}</span>}
          {content.platform && <span>via {content.platform}</span>}
          <span>{new Date(content.created).getFullYear()}</span>
        </div>
        <h3>{content.displayInfo}</h3>
        <a href={actionUrl} target="_blank" rel="noopener noreferrer">
          {hasVerificationLink ? "Verify credential" : "View certificate"}
          <span aria-hidden="true"> ↗</span>
        </a>
      </div>
    </article>
  );
};
