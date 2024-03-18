import google from "../../assets/images/brand_logo/google.png";
import amazon from "../../assets/images/brand_logo/kisspng-amazon-com-logo-brand-amazon-prime-video-product-amazon-1.png";
import nokia from "../../assets/images/brand_logo/kisspng-nokia 1.png";
import microsoft from "../../assets/images/brand_logo/microsoft 2.png";
import spotify from "../../assets/images/brand_logo/spotify.png";

const Brand = () => {
  return (
    <div className="container mx-auto mt-14">
      <div>
        <h1 className="text-center py-11 text-3xl text-purple-400">
          Hire for 1000+ Brands Including
        </h1>
        <div className=" flex justify-between items-center pb-16">
          <div>
            <img src={google} alt="" />
          </div>
          <div>
            <img src={amazon} alt="" />
          </div>
          <div>
            <img src={nokia} alt="" />
          </div>
          <div>
            <img src={spotify} alt="" />
          </div>
          <div>
            <img src={microsoft} alt="" />
          </div>
          <div>
            <img src={google} alt="" />
          </div>
          <div>
            <img src={amazon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
