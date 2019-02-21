// @flow

import * as React from 'react';

import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import type { PostGenerationQuery_allMarkdownRemark } from '../codegen/graphql/PostGenerationQuery';
import PostSummary from '../components/postSummary';

type Props = {|
  data: mixed,
  pageContext: {|
    group: $PropertyType<PostGenerationQuery_allMarkdownRemark, 'edges'>,
    index: number,
    pageCount: number,
  |},
|};

export default function IndexPage({ pageContext }: Props) {
  const { group, index, pageCount } = pageContext;
  const previousUrl = index - 1 === 1 ? '' : (index - 1).toString();
  const nextUrl = (index + 1).toString();

  return (
    <Layout>
      {(group ?? [])
        .map(group => group?.node)
        .filter(Boolean)
        .map(post => (
          <PostSummary post={post} />
        ))}
      <nav className="pagination" role="navigation">
        {index === 0 ? (
          <Link className="newer-posts" to={nextUrl}>
            &larr; Newer Posts
          </Link>
        ) : null}
        <span className="page-number">
          Page {index} of {pageCount}
        </span>
        {index === pageCount - 1 ? (
          <Link className="older-posts" to={previousUrl}>
            Older Posts &rarr;
          </Link>
        ) : null}
      </nav>
    </Layout>
  );
}

// NOTE: This is just for Flow-typing and not actually executed.
// Update this if the query in `gatsby-node.js` is changed.
export const postGenerationQuery = graphql`
  query PostGenerationQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 300)
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            path
            title
          }
        }
      }
    }
  }
`;
