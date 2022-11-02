import React from 'react';

import Section from '../section';
import SummaryCV from '../summary-cv';

const SectionExperience = ({ experience }) => {
  if (!experience.length) return null;

  return (
    <Section title="Experience">
      {experience.map((item) => (
        <SummaryCV
          company={item.company}
          position={item.position}
          time={item.time}
          location={item.location}
          link={item.link}
        />
      ))}
    </Section>
  );
};

export default SectionExperience;
