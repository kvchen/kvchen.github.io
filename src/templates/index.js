// @flow

import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

type Props = {|
  data: mixed,
  pageContext: {|
    group: any,
    index: number,
    pageCount: number,
  |},
|};

export default class IndexPage extends React.PureComponent<Props> {
  render() {
    const { pageContext } = this.props;
    const { group, index } = pageContext;
    const previousUrl = index - 1 === 1 ? '' : (index - 1).toString();
    const nextUrl = (index + 1).toString();

    return (
      <Layout>
        {(group || []).map(group => {
          const node = group?.node;
          const frontMatter = node?.frontmatter;

          return (
            <article key={node.id}>
              <header className="post-header">
                <h2 className="post-title">
                  <Link to={frontMatter?.path}>{frontMatter?.title}</Link>
                </h2>
                <p class="post-time">
                  <time datetime={frontMatter?.date}>{frontMatter?.date}</time>
                </p>
              </header>

              <section className="post-excerpt">
                <p>{node?.excerpt}</p>
              </section>
            </article>
          );
        })}
      </Layout>
    );
  }
}
