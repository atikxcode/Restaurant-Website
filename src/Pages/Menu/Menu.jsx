import { Helmet } from "react-helmet";
import Cover from "../Shared/Cover/Cover";
import img from '../../assets/menu/banner3.jpg'
import img2 from '../../assets/home/chef-service.jpg'
import dessert from '../../assets/menu/dessert-bg.jpeg'
import pizza from '../../assets/menu/pizza-bg.jpg'
import salad from '../../assets/menu/salad-bg.jpg'
import soup from '../../assets/menu/soup-bg.jpg'
import MenuCategory from "./MenuCategory/MenuCategory";
import SectionTitle from "../../Components/SectionTitle";

const Menu = () => {
  return (
    <div>
      <Helmet>
       <title>Restaurant | Menu</title> 
       </Helmet>
      <Cover img={img}  title={'OUR MENU'} subTitle={'WOULD YOU LIKE TO TRY OUR DISH'}></Cover>
      <SectionTitle Heading={"TODAY'S OFFER"} subHeading={"---Don't miss---"}></SectionTitle>
      <MenuCategory menuType={'offered'}></MenuCategory>
      <Cover img={dessert} height={true} title={'DESSERTS'} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>
      <MenuCategory menuType={'dessert'}></MenuCategory>
      <Cover img={pizza} height={true} title={'PIZZA'} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>
      <MenuCategory menuType={'pizza'}></MenuCategory>
      <Cover img={salad} height={true} title={'SALADS'} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>
      <MenuCategory menuType={'salad'}></MenuCategory>
      <Cover img={soup} height={true} title={'SOUPS'} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>
      <MenuCategory menuType={'soup'}></MenuCategory>
      <Cover img={soup} height={true} title={'DRINKS'} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>
      <MenuCategory menuType={'drinks'}></MenuCategory>
    </div>
  );
};

export default Menu;