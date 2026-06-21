import { Link } from 'gatsby';
import React from 'react';

const classes = {
  wrapper: 'mb-6',
  position: 'font-semibold text-brand-navy pb-1',
  company: 'text-md text-gray-600 font-light',
  name: 'font-semibold text-brand-navy pb-1',
  description: 'text-base text-gray-600 font-light',
  highlights: 'mt-2 pl-5 list-disc',
  highlight: 'mb-1 text-base text-gray-600 font-light',
};

const SummaryCV = ({ company, position, time, location, link = false, highlights = [] }) => {
  const linkContent = <Link to={link}>{company}</Link>;

  return (
    <div className={classes.wrapper}>
      <span
        className={classes.position}
      >
        {position}{" "}{" "}
      </span>
      @ {" "}{" "}
      <span
        className={`${classes.company} ${
          link ? 'hover:underline hover:text-brand-blue' : ''
        }`}
      >
        {link ? linkContent : company}
      </span>
      <p className={classes.description}>{time}{" "}{" "} | {" "}{" "}{location}</p>
      {highlights && highlights.length > 0 && (
        <ul className={classes.highlights}>
          {highlights.map((item, i) => (
            <li key={i} className={classes.highlight}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SummaryCV;