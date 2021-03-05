import Link from "next/link";
import { Container } from '../../styles/components/Sidebar';

export default function Sidebar() {
  return (
    <Container>
      SideBar
      <Link href="/admin/dashboard">Dashboard</Link>
      <Link href="/admin/atas">atas</Link>
      <Link href="/admin/calendario">calendario</Link>
      <Link href="/admin/forum">forum</Link>
      <Link href="/admin/materiais">materiais</Link>
      <Link href="/admin/relatos">relatos</Link>
    </Container>
  );
}