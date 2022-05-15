// Library Imports
import React from 'react'

import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Colors from '../../assets/Colors';


export const CustomTooltip= styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
      background: "#3f3f4f",
      fontSize: 34
  },
}));
