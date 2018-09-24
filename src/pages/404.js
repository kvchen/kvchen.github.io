// @flow

import * as React from 'react';

import Layout from '../components/layout';

type Props = {||};

export default class NotFoundPage extends React.PureComponent<Props> {
  render() {
    return (
      <Layout>
        <h1>Page not found</h1>
        <p>What did you think you were going to find?</p>
      </Layout>
    );
  }
}
