// @flow

import * as React from 'react';

import type { HeaderSiteFragment } from '../codegen/graphql/HeaderSiteFragment';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';

type Props = {
  site: ?HeaderSiteFragment,
};

export default function Header({ site }: Props) {
  const title = site?.siteMetadata?.title || '';

  return (
    <header id="site-header">
      <div className="container">
        <h1 className="blog-title heading">
          <Link to="/">{title}</Link>
        </h1>
      </div>
    </header>
  );
}

export const headerFragment = graphql`
  fragment HeaderSiteFragment on Site {
    siteMetadata {
      title
    }
  }
`;
