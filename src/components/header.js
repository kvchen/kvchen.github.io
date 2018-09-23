// @flow

import * as React from 'react';

import type { HeaderSiteFragment } from '../codegen/graphql/HeaderSiteFragment';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import Nav from './nav';

type Props = {|
  site: ?HeaderSiteFragment,
|};

export default class Header extends React.PureComponent<Props> {
  render() {
    const { site } = this.props;
    const title = site?.siteMetadata?.title || '';

    return (
      <header id="site-header">
        <div className="container">
          <h1 className="blog-title heading">
            <Link to="/">{title}</Link>
          </h1>
          <Nav />
        </div>
      </header>
    );
  }
}

export const headerFragment = graphql`
  fragment HeaderSiteFragment on Site {
    siteMetadata {
      title
    }
  }
`;
