const ShoeCard = ({ imgURL, bigShoeImg, changeBigShoeImage }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`rounded-xl border-2 ${bigShoeImg === imgURL.bigShoe ? "border-coral-red" : "border-transparent"} cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex items-center justify-center rounded-xl bg-card bg-cover bg-center max-sm:p-4 sm:h-40 sm:w-40">
        <img
          src={imgURL.thumbnail}
          alt="Shoe"
          width={127}
          height={123}
          className="object-contain"
        />
      </div>
    </div>
  );
};
export default ShoeCard;
