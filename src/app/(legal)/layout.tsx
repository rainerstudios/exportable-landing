import { Navbar } from "../(landing)/components/navbar";
import { Footer } from "../(landing)/components/footer";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
