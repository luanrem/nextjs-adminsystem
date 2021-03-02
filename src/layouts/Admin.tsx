import AdminNavbar from "../components/AdminNavbar/AdminNavbar";
import Sidebar from '../components/Sidebar/Sidebar';

import { Container, Content, PageContent } from '../styles/layouts/Admin';

export default function Admin({ children, ...rest }) {
  return (
    <Container>
      <AdminNavbar />
      <Content>
        
        <Sidebar />
        
        <PageContent>{children}</PageContent>
      </Content>
    </Container>
  )
}