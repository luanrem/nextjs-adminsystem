import { useEffect } from "react";
import AdminNavbar from "../components/AdminNavbar/AdminNavbar";
import Sidebar from '../components/Sidebar/Sidebar';

import BackToTopIcon from '../components/BackToTopIcon/BackToTopIcon';

import { Container, Content, PageContent, Scroll } from '../styles/layouts/Admin';

export default function Admin({ children, ...rest }) {

  return (
    <Container >
      <AdminNavbar />
      <Content>
        <Sidebar />
        <PageContent>
            {children}
        </PageContent>
        <BackToTopIcon showBelow={80} />
      </Content>
    </Container>
  )
}