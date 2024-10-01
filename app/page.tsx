
import Heading from "@/components/Heading";
import Cards from "@/components/CardContainer";
import TopThought from "@/components/TopThought";

const Homepage = () => {
  return (
    <div className="relative">
      <Heading />
      <TopThought text="top thought" likes={ "1.2k" } picture="/placeholder.jpg" />
      <Cards />
    </div>
  );
};

export default Homepage;
