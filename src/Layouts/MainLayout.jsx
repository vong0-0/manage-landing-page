import Navigationbar from "../components/Navigationbar";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <header className="relative z-50">
        <Navigationbar />
      </header>
      <main className="flex flex-col gap-28 pt-24">{children}</main>
      <Footer />
    </>
  );
}
