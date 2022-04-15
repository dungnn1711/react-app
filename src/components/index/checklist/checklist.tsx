import { FC, useState } from 'react';
import { connect } from "react-redux";

import { FormControlLabel, FormGroup, List } from '@mui/material';
import Switch from '@mui/material/Switch';

import { CheckListModel, ItemStatus } from '../../../model';
import ChecklistItem from './checklist-item';

interface CheckListProps {}

const CheckList: FC<CheckListProps> = (props: CheckListProps) => {
  const mockList: CheckListModel = {
    items: [
      {
        id: "item1",
        title: "Do something 1",
        status: ItemStatus.DONE,
        description: "This is description 1"
      },
      {
        id: "item2",
        title: "Do something 2",
        status: ItemStatus.NOT_YET,
        description: "This is description 2"
      },
      {
        id: "item3",
        title: "Do something 3",
        status: ItemStatus.NOT_YET,
        description: "This is description 3"
      }
    ]
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