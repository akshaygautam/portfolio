import React from "react";
import { Portfolio } from "../portfolio/portfolio.component";
import "./portfolio-list.styles.css";

export const PortfolioList = ({ title, portfolioContentList }) => {
  const featuredCredentials = portfolioContentList.filter((item) => item.featured);
  const additionalCredentials = portfolioContentList.filter((item) => !item.featured);
  const groupedCredentials = additionalCredentials.reduce((groups, item) => {
    const category = item.category || "Other credentials";
    groups[category] = [...(groups[category] || []), item];
    return groups;
  }, {});

  return (
    <section className="credentials-section" aria-labelledby="credentials-title">
      <header className="credentials-header">
        <div>
          <span className="credentials-eyebrow">Learning & recognition</span>
          <h2 id="credentials-title">{title}</h2>
          <p>Selected credentials and milestones from my learning journey.</p>
        </div>
        <div className="credentials-count" aria-label={`${portfolioContentList.length} credentials`}>
          <strong>{portfolioContentList.length}</strong>
          <span>credentials</span>
        </div>
      </header>

      <div className="credentials-featured">
        {featuredCredentials.map((credential) => (
          <Portfolio key={credential.id} content={credential} featured />
        ))}
      </div>

      {additionalCredentials.length > 0 && (
        <details className="credentials-all">
          <summary>View all {additionalCredentials.length} additional credentials</summary>
          <div className="credentials-groups">
            {Object.entries(groupedCredentials).map(([category, credentials]) => (
              <section className="credentials-group" key={category}>
                <h3>{category}</h3>
                <div className="credentials-grid">
                  {credentials.map((credential) => (
                    <Portfolio key={credential.id} content={credential} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </details>
      )}
    </section>
  );
};
