import { Typography } from '@material-ui/core';
import React from 'react';

export default function Tag(props) {
  return (
    <>
      <Typography
        style={{
          fontSize: '1.15em',
          padding: '3% 1% 3% 1%',
          backgroundColor: props.backGroundColor,
          borderRadius: 30,
          fontWeight: 'bold',
          color: props.textColor,
        }}
      >
        {props.content}
      </Typography>
    </>
  );
}
