import { FC, useState } from "react";
import { connect } from "react-redux";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import TabPanel from "./tab-panel";
import CheckListPage from "./checklist-page";

  
function a11yProps(index: number) {
    return {
        id: `tab-${index}`,
        "aria-controls": `tabpanel-${index}`,
    };
}

interface IndexProps {
    message?: string
}

const IndexPage: FC<IndexProps> = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box className="main-box">
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Daily" {...a11yProps(0)} />
                    <Tab label="Weekly" {...a11yProps(1)} />
                    <Tab label="Monthly" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0} key={'tab-panel-daily'}>
                <CheckListPage key={'check-list-page-daily'} title={"Daily"}/>
            </TabPanel>
            <TabPanel value={value} index={1} key={'tab-panel-weekly'}>
                <CheckListPage key={'check-list-page-weekly'} title={"Weekly"}/>
            </TabPanel> 
            <TabPanel value={value} index={2} key={'tab-panel-monthly'}>
                <CheckListPage key={'check-list-page-monthly'} title={"Monthly"}/>
            </TabPanel>
        </Box>
    );
};

export default connect(null, null)(IndexPage);