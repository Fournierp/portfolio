import React from 'react';

import Section from '../section';
import SummaryCV from '../summary-cv';
import Animation from '../animation';

const SectionExperience = ({ experience }) => {
  if (!experience.length) return null;

  return (
    <Animation type='fadeDown' delay={1000}>
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
    </Animation>
  );
};

export default SectionExperience;
