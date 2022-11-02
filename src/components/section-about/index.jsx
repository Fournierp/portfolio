import React from 'react';

import Section from '../section';
import Animation from '../animation';

const SectionAbout = ({ about }) => {
  return (
    <Animation type='fadeDown' delay={600}>
        <Section title="About Me">
        <div className="mb-6">
          <p>{about}</p>
        </div>
      </Section>
    </Animation>
  );
};

export default SectionAbout;
