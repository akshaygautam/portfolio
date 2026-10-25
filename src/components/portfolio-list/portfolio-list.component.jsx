import React from "react";
import { Portfolio } from "../portfolio/portfolio.component";
import "./portfolio-list.styles.css";

export const PortfolioList = ({ title, portfolioContentList }) => {
  const featuredCredentials = portfolioContentList
    .filter((item) => item.featured)
    .sort((first, second) => first.featuredOrder - second.featuredOrder);
  const featuredCredentialIds = new Set(featuredCredentials.map((item) => item.id));
  const additionalCredentials = portfolioContentList.filter(
    (item) => !featuredCredentialIds.has(item.id)
  );
  const groupedCredentials = additionalCredentials.reduce((groups, item) => {
    const category = item.category || "Other credentials";
    groups[category] = [...(groups[category] || []), item];
    return groups;
  }, {});
  const orderedCredentialGroups = Object.entries(groupedCredentials)
    .map(([category, credentials]) => [
      category,
      [...credentials].sort(
        (first, second) => (first.displayOrder || 0) - (second.displayOrder || 0)
      ),
    ])
    .sort(
      ([, first], [, second]) =>
        (first[0].displayOrder || 0) - (second[0].displayOrder || 0)
    );

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
          <summary>
            <span className="credentials-all-copy">
              <strong>View all credentials</strong>
              <span>Browse {additionalCredentials.length} more, grouped by category</span>
            </span>
            <span className="credentials-all-count" aria-hidden="true">
              {additionalCredentials.length}
            </span>
            <span className="credentials-all-chevron" aria-hidden="true" />
          </summary>
          <div className="credentials-groups">
            {orderedCredentialGroups.map(([category, credentials]) => (
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
