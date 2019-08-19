import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

const ThemeSection = styled.div`
  margin: 2rem;
`;

storiesOf('Style Guide', module).add('Fonts', () => (
  <ThemeSection>
    <h1>
      Heading1
      {'<h1>'}
    </h1>
    <h2>
      Heading2
      {'<h2>'}
    </h2>
    <h3>
      Heading3
      {'<h3>'}
    </h3>
    <h4>
      Heading4
      {' '}
      {'<h4>'}
      {' '}
- (identical to
      {' '}
      {'<b>'}
)
    </h4>
    <h5>
      Heading5
      {' '}
      {'<h5>'}
      {' '}
- (identical to
      {' '}
      {'<p>'}
)
    </h5>
    <h6>
      Heading6
      {' '}
      {'<h6>'}
      {' '}
- use only as caption or fine print (hard to read)
    </h6>
    <br />
    <p>
      Text
      {' '}
      {'<p>'}
      {' '}
- (identical to
      {' '}
      {'<h5>'}
    </p>
    <b>
      TextBold
      {' '}
      {'<b>'}
      {' '}
- (identical to
      {' '}
      {'<h4>'}
)
    </b>
  </ThemeSection>
));
