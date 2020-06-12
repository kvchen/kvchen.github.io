// @flow

import * as React from 'react';

import Layout from '../components/layout';

type Props = {};

export default function AboutPage(props: Props) {
  return (
    <Layout>
      <p>
        I'm Kevin, a software engineer working at Facebook. I'm a recent
        graduate of the Master's program in AI/Machine Learning at Stanford
        and a previous graduate of the Electrical Engineering and Computer
        Science (EECS) program at UC Berkeley.
      </p>
      <p>
        If you'd like to get in touch, my email is{' '}
        <a href="ma&#105;lto&#58;%&#54;&#66;ef&#102;cat&#64;&#103;%&#54;D&#97;&#105;l&#46;com">
          ke&#102;fcat&#64;gmai&#108;&#46;com
        </a>
        .
      </p>
    </Layout>
  );
}
