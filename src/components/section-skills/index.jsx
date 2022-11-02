import React from 'react';

import Section from '../section';
import SummaryProject from '../summary-project';
import Animation from '../animation';

const SectionSkills = ({ skills }) => {
  return (
    <Animation type='fadeDown' delay={1400}>
      <Section title="Skills">
        {skills.map((skill) => (
          <SummaryProject
            key={skill.name}
            name={skill.name}
            description={skill.description}
          />
        ))}
      </Section>
    </Animation>
  );
};

export default SectionSkills;
