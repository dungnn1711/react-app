import { FC, useEffect, useState } from 'react';
import { connect, useSelector } from "react-redux";

import { FormControlLabel, FormGroup, List } from '@mui/material';
import Switch from '@mui/material/Switch';

import { CheckListItemModel, CheckListModel, ItemStatus } from '../../../model';
import ChecklistItem from './checklist-item';
import { getChecklistSelector } from '../../../store/checklist/selector';

interface CheckListProps {}

const CheckList: FC<CheckListProps> = (props: CheckListProps) => {
  const data = useSelector(getChecklistSelector);

  const mockList: CheckListModel = {
    items: data as Array<CheckListItemModel>
  }

  const [dense, setDense] = useState((localStorage.getItem("dense") === "true") ?? false);
  const [secondary, setSecondary] = useState((localStorage.getItem("secondary") === "true") ?? false);

  const toggleDense = (checked: boolean) => {
    localStorage.setItem("dense", String(checked));
    setDense(checked);
  }

  const toggleSecondary = (checked: boolean) => {
    localStorage.setItem("secondary", String(checked));
    setSecondary(checked);
  }

  return (
    <div>
      <FormGroup row sx={{ p: 2, bgcolor: '#e7e7e7', borderRadius: '8px 8px 0 0' }}>
        <FormControlLabel
          control={
            <Switch
              checked={dense}
              onChange={(event: any) => toggleDense(event.target.checked)}
            />
          }
          label="Enable dense"
        />
        <FormControlLabel
          control={
            <Switch
              checked={secondary}
              onChange={(event: any) => toggleSecondary(event.target.checked)}
            />
          }
          label="Enable secondary text"
        />
      </FormGroup>
      <List dense={dense}>
        {mockList?.items?.map((item, i) => {
          return (<ChecklistItem key={i} item={item} isSecondary={secondary} />);
        })}
      </List>
    </div>
  );
}

export default connect(null, null)(CheckList);