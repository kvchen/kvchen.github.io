// @flow

import * as React from 'react';

import { Link } from 'gatsby';

type Props = {||};

export default function Nav(props: Props) {
  return (
    <ul className="nav">
      <li>
        <Link to="/">Blog</Link>
      </li>
      <li style={{ marginLeft: 12 }}>
        <Link to="/about/">About</Link>
      </li>
    </ul>
  );
}
