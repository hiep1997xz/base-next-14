import Header from '@/components/template/Header.tsx';
import NavMenu from '@/components/template/Navbar';

export default function LanguagesLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative min-h-screen">
      <Header />
      <NavMenu />
      <main className="content">{children}</main>
    </div>
  );
}
