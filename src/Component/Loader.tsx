import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loader () {
  return (
    <Box className='loader'>
      <CircularProgress />
    </Box>
  );
}
