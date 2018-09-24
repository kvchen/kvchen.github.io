// @flow

import * as React from 'react';

import { Link } from 'gatsby';
import type { PostGenerationQuery_allMarkdownRemark_edges_node } from '../codegen/graphql/PostGenerationQuery';

type Props = {|
  post: PostGenerationQuery_allMarkdownRemark_edges_node,
|};

export default class PostSummary extends React.PureComponent<Props> {
  render() {
    const { post } = this.props;
    const frontMatter = post?.frontmatter;

    return (
      <article key={post?.id}>
        <header className="post-header">
          <h2 className="post-title">
            <Link to={frontMatter?.path}>{frontMatter?.title}</Link>
          </h2>
          <h3>
            <time datetime={frontMatter?.date}>{frontMatter?.date}</time>
          </h3>
        </header>

        <section className="post-excerpt">
          <p>{post?.excerpt}</p>
        </section>
      </article>
    );
  }
}
