import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';

interface ProgressBarProps {
  value: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value }) => {
  return (
    <LinearProgress 
      sx={{color: "#68D1BF"}}
      color="inherit"
      variant="determinate" 
      value={value} />
  );
};

export default ProgressBar;
