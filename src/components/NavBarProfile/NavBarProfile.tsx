import { useCallback, useState } from 'react';

import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';

import Poppers from "@material-ui/core/Popper";

import { Container, NameContainer, NotificationBall, NotificationList, ScrollbarsContainer } from '../../styles/components/NavBarProfile';
import { Button, ClickAwayListener, ListItem, ListItemText, Paper } from '@material-ui/core';
import List from '@material-ui/core/List';
import Link from 'next/link';

export default function NavBarProfile() {
  const [hasNotification, setHasNotification] = useState(true);
  const [openNotification, setOpenNotification] = useState<null | HTMLElement>(null);
  const [openPhoto, setOpenPhoto] = useState<null | HTMLElement>(null);

  const handleClickNotification = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setOpenNotification(openNotification ? null : event.currentTarget);
    setHasNotification(!hasNotification);
  }, [openNotification]);

  const handleCloseNotification = useCallback(() => {
    setOpenNotification(null);
    setHasNotification(!hasNotification);
  }, [setOpenNotification]);

  const handleClickPhoto = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setOpenPhoto(openPhoto ? null : event.currentTarget);
  }, [openPhoto]);

  const handleClosePhoto = useCallback(() => {
    setOpenPhoto(null);
  }, [setOpenPhoto]);

  return (
    <Container >
      <Button onClick={handleClickNotification}>
        <NotificationsNoneIcon fontSize="large" className="Notifications" />
        {hasNotification &&
          <NotificationBall />
        }
      </Button>


      <Poppers
        open={Boolean(openNotification)}
        anchorEl={openNotification}
      >
        <Paper>
          <ClickAwayListener onClickAway={handleCloseNotification}>
            <NotificationList>
              <ScrollbarsContainer>
                <div>
                  <div><span>Item da Lista</span></div>
                  <div><span>Item da Lista</span></div>
                  <div><span>Item da Lista</span></div>
                  <div><span>Item da Lista</span></div>
                  <div><span>Item da Lista</span></div>
                  <div><span>Item da Lista</span></div>
                  <div><span>Item da Lista</span></div>
                  <div><span>Item da Lista</span></div>
                  <div><span>Item da Lista</span></div>
                  <div><span>Item da Lista</span></div>
                  <div><span>Item da Lista</span></div>
                  <div><span>Item da Lista</span></div>
                  <div><span>Item da Lista</span></div>
                  <div><span>Item da Lista</span></div>
                  <div><span>Item da Lista</span></div>
                  <div><span>Item da Lista</span></div>
                  <div><span>Item da Lista</span></div>
                  <div><span>Item da Lista</span></div>
                  <div><span>Item da Lista</span></div>
                  <div><span>Item da Lista</span></div>
                  <div><span>Item da Lista</span></div>
                  <div><span>Item da Lista</span></div>
                </div>
              </ScrollbarsContainer>
            </NotificationList>
          </ClickAwayListener>
        </Paper>
      </Poppers>


      <NameContainer>
        <h2>Luan Martins</h2>
        <span>Titulo</span>
      </NameContainer>

      <Button onClick={handleClickPhoto}>
        <Avatar src="https://avatars.githubusercontent.com/u/46967826?s=460&u=b03c7750b76f86e592f9f3b0e02fe025846ee38c&v=4"
          alt="Profile Image"
          className="avatar"
        />
      </Button>

      <Poppers
        open={Boolean(openPhoto)}
        anchorEl={openPhoto}
      >
        <Paper>
          <ClickAwayListener onClickAway={handleClosePhoto}>
            <List>
              <Link href="/admin/perfil">
                <ListItem button onClick={handleClosePhoto}>
                  <ListItemText primary="Perfil" />
                </ListItem>
              </Link>
              <Link href="/admin/configuracao">
                <ListItem button onClick={handleClosePhoto}>
                  <ListItemText primary="Configurações" />
                </ListItem>
              </Link>
            </List>
          </ClickAwayListener>
        </Paper>
      </Poppers>

      <Button className="VertIcon">
        <MoreVertIcon fontSize="large" />
      </Button>

    </Container>
  )
}