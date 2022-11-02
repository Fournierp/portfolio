import React from 'react';

import Section from '../section';
import SummaryProject from '../summary-project';
import Animation from '../animation';

const SectionProjects = ({ projects }) => {
  if (!projects.length) return null;

  return (
    <Animation type='fadeDown' delay={800}>
      <Section title="Projects">
        {projects.map((project) => (
          <SummaryProject
            key={project.name}
            name={project.name}
            description={project.description}
            link={project.link}
          />
        ))}
      </Section>
    </Animation>
  );
};

export default SectionProjects;
