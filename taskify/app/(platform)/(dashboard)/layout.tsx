import Navbar from "./_components/navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className="mx-auto h-full max-w-7xl">
         <Navbar />
         {children}
      </div>
   );
};

export default Layout;
