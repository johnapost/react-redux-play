// @flow

import React from 'react';
import type { LinkType } from '../types';

const Link = ({ active, children, onClick }: LinkType) => {
  if (active) {
    return <span>{children}</span>;
  } else {
    return (
      <a
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
        tabIndex="0"
      >
        {children}
      </a>
    );
  }
};

export default Link;
