import React from 'react';

import Section from '../section';
import SummaryCV from '../summary-cv';

const SectionEducation = ({ education }) => {
  if (!education.length) return null;

  return (
    <Section title="Education">
      {education.map((item) => (
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

export default SectionEducation;
