// @flow

import * as React from 'react';
import Layout from '../components/layout';

type Props = {||};

export default class NotFoundPage extends React.PureComponent<Props> {
  render() {
    return (
      <Layout>
        <h1>Page not found</h1>
        <p>You just hit a route that doesn't exist...the sadness.</p>
      </Layout>
    );
  }
}
