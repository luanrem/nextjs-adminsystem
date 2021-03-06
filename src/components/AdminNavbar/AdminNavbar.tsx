
import { Content, Container, Title, MobileHeader } from '../../styles/components/AdminNavbar';
import Link from 'next/link';
import NavBarProfile from '../NavBarProfile/NavBarProfile';
import Button from '@material-ui/core/Button'

import Hidden from '@material-ui/core/Hidden';
import Menu from "@material-ui/icons/Menu";

export default function AdminNavbar({ }) {
  return (
    <Content>
      <Container>

        <Hidden smDown>
          <Title>
            <h1>MISSÃO RAMA</h1>

            <Button size="small">Voltar</Button>
          </Title>

          <NavBarProfile />
        </Hidden>

        <Hidden mdUp>
          <MobileHeader>
            <Title>
              <Link href="/admin/dashboard"><h1>MISSÃO RAMA</h1></Link>

              <Button size="small">Voltar</Button>
            </Title>

            <Menu />
          </MobileHeader>

        </Hidden>

      </Container>
    </Content>
  )
}