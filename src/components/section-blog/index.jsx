import { Link } from 'gatsby';
import React from 'react';

import Section from '../section';
import SummaryProject from '../summary-project';

const SectionBlog = ({ posts }) => {
  return (
    <Section title="Latest Posts">
      {posts.map((post) => (
        <SummaryProject
          key={post.node.fields.slug}
          name={post.node.frontmatter.title}
          description={post.node.frontmatter.description}
          link={post.node.fields.slug}
          internal
        />
      ))}
      {posts.length >= 5 && (
        <Link className="text-gray-500 text-sm hover:text-black" to="/blog">
          View all posts &rarr;
        </Link>
      )}
    </Section>
  );
};

export default SectionBlog;
