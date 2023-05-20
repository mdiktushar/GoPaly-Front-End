import React, { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="mt-20 bg-slate-100 rounded-xl p-3">
      <h2 className="text-5xl font-semibold text-gray-600 text-center">
        Gallery
      </h2>
      <hr className="mb-5" />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 place-items-center">
        <img
          data-aos="fade-right"
          data-aos-delay="500"
          className="object-cover h-100 w-96 rounded-lg"
          src="https://m.media-amazon.com/images/I/81fLB-HCipL._AC_UF894,1000_QL80_.jpg"
          alt=""
        />
        <img
          data-aos="flip-left"
          data-aos-delay="500"
          className="object-cover h-100 w-96 rounded-lg"
          src="https://www.magicalearscollectibles.com/assets/images/scp1520922.jpg"
          alt=""
        />
        <img
          data-aos="fade-left"
          data-aos-delay="500"
          className="object-cover h-100 w-96 rounded-lg"
          src="https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6107000443926-1?fmt=jpeg&qlt=90&wid=608&hei=608"
          alt=""
        />
        <img
          data-aos="fade-right"
          data-aos-delay="500"
          className="object-cover h-100 w-96 rounded-lg"
          src="https://static.thcdn.com/images/large/original//productimg/1600/1600/13026529-1864861988029398.jpg"
          alt=""
        />
        <img
          data-aos="flip-left"
          data-aos-delay="500"
          className="object-cover h-100 w-96 rounded-lg"
          src="https://image.smythstoys.com/original/desktop/222827_7.jpg"
          alt=""
        />
        <img
          data-aos="fade-left"
          data-aos-delay="500"
          className="object-cover h-100 w-96 rounded-lg"
          src="https://m.media-amazon.com/images/I/81+C+-4x38L._AC_UF1000,1000_QL80_.jpg"
          alt=""
        />
        <img
          data-aos="fade-right"
          data-aos-delay="500"
          className="object-cover h-100 w-96 rounded-lg"
          src={`https://m.media-amazon.com/images/I/71eGtb5sfnL._AC_SL1500_.jpg`}
          alt=""
        />
        <img
          data-aos="flip-left"
          data-aos-delay="500"
          className="object-cover h-100 w-96 rounded-lg"
          src={`https://www.campusgifts.co.uk/media/catalog/product/cache/623a6c74e30aa11506d045198d97fecc/w/i/winnie-the-pooh-hundred-acre-woods-soft-toy-range-lr_1.jpg`}
          alt=""
        />
        <img
          data-aos="fade-left"
          data-aos-delay="500"
          className="object-cover h-100 w-96 rounded-lg"
          src={`https://www.campusgifts.co.uk/media/catalog/product/cache/623a6c74e30aa11506d045198d97fecc/r/a/rainbow-designs-dn1471-tigger-soft-toy-1.jpg`}
          alt=""
        />
      </div>
    </div>
  );
};

export default Gallery;
