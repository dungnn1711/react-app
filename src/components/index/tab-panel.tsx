import { FC, useState } from 'react';
import { connect } from "react-redux";

import Box from '@mui/material/Box';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
  
const TabPanel: FC<TabPanelProps> = (props: TabPanelProps) => {
    const { children, value, index } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`tabpanel-${index}`}
        aria-labelledby={`tab-${index}`}
      >
        {value === index && (
          <Box sx={{ height: "100%" }}>
            {children}
          </Box>
        )}
      </div>
    );
}

export default connect(null, null)(TabPanel);