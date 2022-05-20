import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";

const Home = () => {
  return (
    <section className="home">
      <Sidebar />
      <div className="homeContainer"></div>
    </section>
  );
};

export default Home;
