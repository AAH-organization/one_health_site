
import { Popover } from "@headlessui/react";

const Menu = () => {


  return (
    <>

      <Popover>
        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
          <nav
            className="relative flex items-center justify-between sm:h-10 lg:justify-start"
            aria-label="Global"
          >
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="/" className="no-underline">
                  <img alt="logo" className="h-20 w-auto sm:h-16 no-underline" src="https://onehealth.foundation/wp-content/uploads/2018/08/cropped-logo_OHF_color.jpg" />
                </a>
              </div>
            </div>
            <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
              <a
                href="/"
                className={`font-medium text-primary hover:text-secondary`}
              >
                Trang chủ
              </a>
              <a
                href="/product"
                className={`font-medium text-primary hover:text-secondary`}
              >
                Các sản phẩm
              </a>
            </div>
          </nav>
        </div>

      </Popover>
    </>
  );
};

export default Menu;
