import AdminNavbar from "../components/AdminNavbar/AdminNavbar";

export default function Admin({children, ...rest}) {
  return (
    <>
    <AdminNavbar />
    <h2>Admin component</h2>
    <div>{children}</div>
    </>
  )
}