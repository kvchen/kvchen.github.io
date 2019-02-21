// @flow

import * as React from 'react';

import Layout from '../components/layout';

type Props = {||};

export default class AboutPage extends React.PureComponent<Props> {
  render() {
    return (
      <Layout>
        <h1>About Me</h1>
        <p>
          I'm Kevin, a software engineer working at Facebook. I graduated from
          the Electrical Engineering and Computer Science program at UC Berkeley
          and I'm pursuing a part-time masters degree from Stanford in AI/ML.
        </p>
        <p>
          If you're trying to get in touch, my email is{' '}
          <a href="ma&#105;lto&#58;%&#54;&#66;ef&#102;cat&#64;&#103;%&#54;D&#97;&#105;l&#46;com">
            ke&#102;fcat&#64;gmai&#108;&#46;com
          </a>
          . If you wish to encrypt your communications, you can find my
          identities and public keys (including PGP) on{' '}
          <a
            href="https://keybase.io/kevinchen"
            target="_blank"
            rel="noopener noreferrer"
          >
            my keybase
          </a>
          .
        </p>
      </Layout>
    );
  }
}
