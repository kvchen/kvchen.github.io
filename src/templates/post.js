// @flow

import Layout from '../components/layout';
import type { PostQuery } from '../codegen/graphql/PostQuery';
import React from 'react';
import { graphql } from 'gatsby';

type Props = {|
  data: PostQuery,
|};

export default function Post({ data }: Props) {
  const markdownRemark = data?.markdownRemark;
  const frontmatter = markdownRemark?.frontmatter;

  return (
    <Layout>
      <h1>{frontmatter?.title}</h1>
      <h2>
        <time>{frontmatter?.date}</time>
      </h2>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark?.html }} />
    </Layout>
  );
}

export const postQuery = graphql`
  query PostQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        path
      }
    }
  }
`;
