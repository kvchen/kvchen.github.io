// @flow

import * as React from 'react';

import Layout from '../components/layout';

type Props = {};

export default function NotFoundPage(props: Props) {
  return (
    <Layout>
      <h1>Page not found</h1>
      <p>What did you think you were going to find?</p>
    </Layout>
  );
}
