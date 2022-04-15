import { FC, useState } from 'react';
import { connect } from "react-redux";

import { Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { CheckListItemModel, ItemStatus } from '../../../model';

interface CheckListItemProps {
    key: number;
    isSecondary?: boolean;
    item: CheckListItemModel;
}
  
const CheckListItem: FC<CheckListItemProps> = (props: CheckListItemProps) => {
    const { key, isSecondary, item } = props;
    const [checked, setChecked] = useState(item.status === ItemStatus.DONE);

    return (
        <ListItem
            key={key}
            secondaryAction={
                <IconButton edge="end" aria-label="delete">
                    <MoreVertIcon />
                </IconButton>
            }
        >
            <ListItemButton role={undefined} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked}
                  tabIndex={-1}
                  disableRipple
                  onChange={(event) => setChecked(event.target.checked)}
                //   inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText primary={item.title} secondary={isSecondary ? item.description : null} />
            </ListItemButton>
        </ListItem>
    );
}

export default connect(null, null)(CheckListItem);