import { useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";
export default function FooterSection() {
  const [theme] = useContext(ThemeContext);

  const links = [
    {
      title: "Github",
      link: "",
      color: "text-blue!",
      darkColor: "text-lightBlue!",
    },
    {
      title: "Personal Blog",
      link: "",
      color: "text-mediumBlack!",
      darkColor: "text-white!",
    },
    {
      title: "Linkedin",
      link: "",
      color: "text-navyBlue!",
      darkColor: "text-navyBlue!",
    },
    {
      title: "Email",
      link: "",
      color: "text-burgundy!",
      darkColor: "text-pink!",
    },
  ];

  return (
    <div className="py-8 dark:bg-softBlack mb-12 flex justify-center md:flex-row flex-col container gap-8">
      <div className="relative">
        <p className="relative dark:text-white text-5xl z-10 leading-[20px] md:leading-[50px]">
          Let’s work together <br /> on your next product.
        </p>
        <img
          src="src/assets/images/elements/blue-long-rectangle.png"
          alt="blue-rectangle"
          className="absolute top-9 left-34 z-0"
        />
      </div>

      <div className="flex flex-col text-xl">
        {links.map((link, index) => {
          return (
            <a
              href={link.title}
              key={index}
              className={`${
                theme === "dark" ? link.darkColor : link.color
              } no-underline!`}
            >
              {link.title}
            </a>
          );
        })}
      </div>
    </div>
  );
}
