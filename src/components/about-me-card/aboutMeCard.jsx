export default function AboutMeCard() {
  return (
    <div className=" text-mediumBlack dark:text-white">
      <div className="relative inline-block">
        <p className="font-playfair text-2xl relative z-999">About me</p>
        <img
          src="src/assets/images/elements/blue-short-rectangle.svg"
          alt="blue-rectangle"
          className="absolute top-4"
        />
      </div>

      <p className="mb-9!">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut,
        odit laborum aliquam voluptatum nisi mollitia.
      </p>
      <p>
        Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
        deserunt quam temporibus cumque magnam!
      </p>
    </div>
  );
}
