import InformationCard from "../../components/information-card/informationCard";

export default function ProfileSection() {
  return (
    <div className="bg-softGray dark:bg-darkGray relative">
      <img
        src="src/assets/images/elements/half-pink-circle.svg"
        alt="pink-circle"
        className="absolute top-[-25px] md:top-[-50px] right-0 h-12 md:h-24"
      />
      <div className="container py-22">
        <p className="text-center text-mediumBlack dark:text-white text-3xl md:text-5xl mb-[120px]! md:mb-0! md:pb-[48px]">
          Profile
        </p>
        <div className="flex flex-col md:flex-row tems-center">
          <InformationCard />
        </div>
      </div>
    </div>
  );
}
