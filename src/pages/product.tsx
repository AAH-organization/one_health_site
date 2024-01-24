import Analytics from "../components/Analytics";
import Canvas from "../components/Canvas";
import Header from "../components/Header";
import LazyShow from "../components/LazyShow";

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
          {/* <Product /> */}
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <>
          {/* <Features /> */}
          <Canvas />
        </>
      </LazyShow>
      <Analytics />
      <footer>
        abc
      </footer>
    </div>
  );
};
export default product;
