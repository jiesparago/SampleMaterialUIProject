import * as React from 'react';

import { Box } from '@mui/material';
import Post from './Post';



const Feed = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Box  flex={4} p={2}>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </Box>
  )
}

export default Feed