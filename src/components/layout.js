// @flow

import '../styles/main.scss';

import * as React from 'react';

import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import Helmet from 'react-helmet';
import type { LayoutQuery } from '../codegen/graphql/LayoutQuery';

type Props = {|
  children: React.Node,
|};

export default function Layout({ children }: Props) {
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
      render={(data: LayoutQuery) => (
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
      )}
    />
  );
}
