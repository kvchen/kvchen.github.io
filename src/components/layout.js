// @flow

import type { LayoutQuery } from '../codegen/graphql/LayoutQuery';

import * as React from 'react';

import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import Helmet from 'react-helmet';

import '../styles/main.scss';

type Props = {|
  children: React.Node,
|};

export default class Layout extends React.PureComponent<Props> {
  renderData = (data: LayoutQuery): React.Node => {
    const { children } = this.props;
    return (
      <>
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <title>{data?.site?.siteMetadata?.title}</title>
        </Helmet>
        <Header site={data.site} />
        <main className="content" role="main">
          <div className="container">
            <div>{children}</div>
          </div>
        </main>
      </>
    );
  };

  render() {
    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            site {
              ...HeaderSiteFragment
              siteMetadata {
                title
              }
            }
          }
        `}
        render={this.renderData}
      />
    );
  }
}
