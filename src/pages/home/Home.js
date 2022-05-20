import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";

const Home = () => {
  return (
    <section className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
      </div>
    </section>
  );
};

export default Home;
