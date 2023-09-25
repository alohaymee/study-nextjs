import "./globals.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header></header>
      <div className="main-container">
        <div className="nav-container">
          <nav></nav>
          <div className="main">{children}</div>
        </div>
      </div>
    </>
  );
}
