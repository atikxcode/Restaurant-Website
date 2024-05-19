import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Recommends from "../Recommends/Recommends";
import Testimonials from "../Testimonials/Testimonials";
import Testimonials2 from "../Testimonials/Testimonials2";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Recommends></Recommends>
      <Testimonials></Testimonials>
      <Testimonials2></Testimonials2>
    </div>
  );
};

export default Home;