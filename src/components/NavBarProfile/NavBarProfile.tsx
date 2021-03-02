import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';

import { Container, NameContainer } from '../../styles/components/NavBarProfile';

export default function NavBarProfile() {
  return (
    <Container>
      <NotificationsNoneIcon fontSize="large" className="Notifications"/>

      <NameContainer>
        <h2>Luan Martins</h2>
        <span>Facilitador</span>
      </NameContainer>

      <Avatar src="https://avatars.githubusercontent.com/u/46967826?s=460&u=b03c7750b76f86e592f9f3b0e02fe025846ee38c&v=4" 
        alt="Profile Image"
        className="avatar"
      />

      <MoreVertIcon fontSize="large"/>
    </Container>
  )
}