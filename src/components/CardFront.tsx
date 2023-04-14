import { CardLogo } from "../icons";

const CardFront = () => {
  return (
    <div className="grid absolute sm:top-1/4 top-[60%] sm:-right-1/3 left-[10%] sm:left-auto sm:min-w-[447px] min-w-[290px] sm:min-h-[245px] min-h-[160px] z-10">
      {/* <img
        src={images.bgCardFront.src}
        alt={images.bgCardFront.alt}
        className="col-span-full row-span-full"
      /> */}
      <div
        className={`col-span-full row-span-full flex flex-col justify-between p-8 bg-contain bg-no-repeat`}
        style={{ backgroundImage: "url('./images/bg-card-front.png')" }}
      >
        <div>
          <CardLogo />
        </div>
        <div className="grid gap-6">
          <p className="text-card-number">0000 0000 0000 0000</p>
          <div className="flex justify-between">
            <p className="text-card-name">Jane Appleseed</p>
            <p className="text-card-name">00/00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFront;
