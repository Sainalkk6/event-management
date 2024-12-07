import Navbar from "./_components/Navbar";
import SideBar from "./_components/SideBar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="font-poppins">
      <Navbar />
      <div className="flex w-full bg-[#f5f5f5]">
        <SideBar />
        {children}
      </div>
    </main>
  );
}
