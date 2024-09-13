const { Footer } = require("../footer/Footer");
const { Header } = require("../header/Header");

const MainLayout = ({children}) => {
  return (
    <div className="flex flex-col items-center w-full">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
