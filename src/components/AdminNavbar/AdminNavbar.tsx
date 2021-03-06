
import { Content, Container, Title, MobileHeader } from '../../styles/components/AdminNavbar';
import Link from 'next/link';
import { useRouter } from 'next/router';
import NavBarProfile from '../NavBarProfile/NavBarProfile';
import Button from '@material-ui/core/Button'

import Hidden from '@material-ui/core/Hidden';
import Menu from "@material-ui/icons/Menu";

export default function AdminNavbar({ }) {
  const router = useRouter();

  return (
    <Content>
      <Container>

        <Hidden smDown>
          <Title>
            <Button>
              <Link href="/admin/dashboard">
                <h1>MISSÃO RAMA</h1>
              </Link>
            </Button>

            <Button 
              size="small" 
              onClick={() => router.back()}
            >
              Voltar
            </Button>
          </Title>

          <NavBarProfile />
        </Hidden>

        <Hidden mdUp>
          <MobileHeader>
            <Title>
              <Button>
                <Link href="/admin/dashboard">
                  <h1>MISSÃO RAMA</h1>
                </Link>
              </Button>

              <Button size="small">Voltar</Button>
            </Title>

            <Menu />
          </MobileHeader>

        </Hidden>

      </Container>
    </Content>
  )
}