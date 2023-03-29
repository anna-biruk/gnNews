import Footer from "../components/Footer";
import Header from "../components/Header";
import NewsList from "../components/NewsList";
import SideMenu from "../components/SideMenu";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <SideMenu />
        <NewsList />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
