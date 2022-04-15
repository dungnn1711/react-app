import { FC, useState } from 'react';
import { connect } from "react-redux";

import { Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { UserModel } from '../../../model';

interface FollowerListProps { }

const FollowerList: FC<FollowerListProps> = (props: FollowerListProps) => {
  const mockUser: Array<UserModel> = [
    {
      id: "user1",
      name: "Nguyen Van A",
      age: 25
    },
    {
      id: "user2",
      name: "Nguyen Van B",
      age: 25
    },
    {
      id: "user3",
      name: "Nguyen Van C",
      age: 25
    },
    {
      id: "user4",
      name: "Nguyen Van D",
      age: 25
    }
  ];

  return (
    <div>
      <div className="component-header">
        <h2>Follower</h2>
      </div>
      <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {mockUser.map((user) => {
          return (
            <ListItem
              key={user.id}
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                    <MoreVertIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    // alt={`Avatar n°${user + 1}`}
                    // src={`/static/images/avatar/${user + 1}.jpg`}
                  />
                </ListItemAvatar>
                <ListItemText id={user.id} primary={user.name} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}

export default connect(null, null)(FollowerList);