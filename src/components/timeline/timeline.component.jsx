import React from "react";
import "./timeline.styles.css";

export const TimeLine = ({ timeLine, title }) => (
  <section
    className={`timeline-section${title === "Education" ? " timeline-section--education" : ""}`}
    aria-label={title}
  >
    <h2 className="timeline-title">{title}</h2>
    <ol
      className={`timeline${title === "Education" ? " education-cards" : ""}`}
      aria-label={
        title === "Education"
          ? "Education history; scroll horizontally to view all entries"
          : undefined
      }
      tabIndex={title === "Education" ? 0 : undefined}
    >
      {timeLine.map((item) => (
        <li
          className="timeline-entry"
          key={`${item.label}-${item.date}`}
        >
          <div
            className={`timeline-card${
              title === "Education" ||
              (title === "Work Experience" && !/present/i.test(item.date))
                ? " timeline-card-achieved"
                : ""
            }`}
          >
            <span className="timeline-date">{item.date}</span>
            <h3 className="timeline-entry-title">
              {item.logo && (
                <img
                  className="timeline-company-logo"
                  src={item.logo}
                  alt=""
                  aria-hidden="true"
                />
              )}
              {item.mark && (
                <span className="timeline-company-mark" aria-hidden="true">
                  {item.mark}
                </span>
              )}
              {item.label}
            </h3>
            {item.detail && <p className="timeline-detail">{item.detail}</p>}
          </div>
        </li>
      ))}
    </ol>
  </section>
);
