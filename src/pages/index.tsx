import { Carousel } from "antd";
import About from "../components/About";
import Analytics from "../components/Analytics";
import Canvas from "../components/Canvas";
import Features from "../components/Features";
import Header from "../components/Header";
import LazyShow from "../components/LazyShow";

const App = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <div className={`relative bg-background w-screen`}>
        <div className="w-full mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background lg:max-w-2xl lg:w-full `}
          >
            <Header />
          </div>
          <div className="border-t-8 border-[#17a2b8]">
            <Carousel autoplay className="w-12/12" afterChange={onChange}>
              <div>
                <img src="/assets/images/site2.jpg"></img>
              </div>
              <div>
                <img src="/assets/images/site1.jpg"></img>
              </div>
              <div>
                <img src="/assets/images/site1.jpg"></img>
              </div>
              <div>
                <img src="/assets/images/site1.jpg"></img>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
     
      <LazyShow>
        <>
          <Features />
          <Canvas />
        </>
      </LazyShow>
      {/* <LazyShow>
        <>
          <Canvas />
          <About />
        </>
      </LazyShow> */}
      <Analytics />
      <About />
    </div>
  );
};

export default App;
