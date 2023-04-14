const CardBack = () => {
  return (
    <div className="absolute grid top-[20%] sm:top-auto sm:bottom-[20%] left-[20%] sm:left-auto sm:-right-1/2 sm:min-w-[447px] min-w-[290px] sm:min-h-[245px] min-h-[160px] ">
      {/* <img
        src={`./images/${images.bgCardBack.src}`}
        alt={images.bgCardBack.alt}
        className="max-w-[447px] max-h-[245px] w-auto h-auto"
      /> */}
      <div
        className={`w-full min-h-full bg-[url("./images/bg-card-back.png")] bg-contain bg-no-repeat p-14 text-white font-medium grid place-items-center`}
      >
        <p className="justify-self-end">000</p>
      </div>
    </div>
  );
};

export default CardBack;
