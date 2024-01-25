import About from "../components/About";
import Analytics from "../components/Analytics";
import Canvas from "../components/Canvas";
import Features from "../components/Features";
import Header from "../components/Header";
import LazyShow from "../components/LazyShow";
import Product from "../components/Product";

const product = () => {
  return(
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
            <Header />
        </div>
      </div>
      <LazyShow>
        <>
          <Product />
          <Canvas />
        </>
      </LazyShow>
    
      <About />

    </div>
  );
};
export default product;
