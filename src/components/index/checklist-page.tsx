import { FC, useState } from 'react';
import { connect } from "react-redux";

import Typography from '@mui/material/Typography';

import Checklist from './checklist/checklist';
import FollowerList from './followerlist/follower-list';

interface ChecklistProps {
    title: string
}
  
const CheckListPage: FC<ChecklistProps> = (props: ChecklistProps) => {
    const { title } = props;
  
    return (
      <div className="check-list-page">
          <div className="check-list-layout">
            <Checklist/>
          </div>
          <div className="monitor-layout">
            <div className="follower-list">
                <FollowerList/>
            </div>
            <div className="trend-list">
                <Typography>{title}</Typography>
            </div>
          </div>
      </div>
    );
}

export default connect(null, null)(CheckListPage);