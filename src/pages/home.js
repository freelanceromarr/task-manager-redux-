import Nav from "../compotents/Nav";
import LeftBar from "../compotents/left side/LeftBar";
import Main from "../compotents/main side/Main";
import Layout from '../compotents/Layout';

const Home = () => {
  return (
    <Layout>
      <div class="container relative">
        <LeftBar />
        <Main />
      </div>
    </Layout>
  );
};

export default Home;
