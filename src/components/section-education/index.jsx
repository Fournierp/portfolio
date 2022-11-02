import React from 'react';

import Section from '../section';
import SummaryCV from '../summary-cv';
import Animation from '../animation';

const SectionEducation = ({ education }) => {
  if (!education.length) return null;

  return (
    <Animation type='fadeDown' delay={1600}>
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
    </Animation>
  );
};

export default SectionEducation;
