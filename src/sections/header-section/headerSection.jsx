import ChangeThemeSection from "../change-theme-section/changeThemeSection";
import ChangeLanguageSection from "../changeLanguageSection/changeLanguageSection";

export default function HeaderSection() {
  return (
    <>
      <div className="bg-softGray dark:bg-darkGray h-20">
        <div className="container relative">
          <img
            className="absolute top-0 left-[10%] md:left-[40%] h-6 md:h-16"
            src="src/assets/images/elements/half-light-gray-circle.svg"
          />
          <div className="flex items-center w-full absolute left-[30%] md:left-[70%]">
            <ChangeThemeSection />
            <ChangeLanguageSection />
          </div>
        </div>
      </div>
    </>
  );
}
