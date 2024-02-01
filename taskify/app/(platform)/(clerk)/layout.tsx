const Layout = ({ children }: { children: React.ReactNode }) => {
   return <div className="flex-center min-h-[calc(100vh-72px)]">{children}</div>;
};

export default Layout;
