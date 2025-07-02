import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCategories from "@/components/ProductCategories";
import Delivery from "@/components/Delivery";

const Index = () => {
  return (
    <div className="min-h-screen bg-nature-cream">
      <Header />
      <Hero />
      <ProductCategories />
      <Delivery />
    </div>
  );
};

export default Index;
