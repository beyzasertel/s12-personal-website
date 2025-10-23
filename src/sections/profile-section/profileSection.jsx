import InformationCard from "../../components/information-card/informationCard";

export default function ProfileSection() {
  return (
    <div className="bg-softGray dark:bg-darkGray relative">
      <img
        src="src/assets/images/elements/half-pink-circle.svg"
        alt="pink-circle"
        className="absolute top-[-50px] right-0"
      />
      <div className="container py-22">
        <p className="text-center text-mediumBlack dark:text-white text-3xl md:text-5xl pb-[8px] md:pb-[48px]">
          Profile
        </p>
        <div className="flex flex-col md:flex-row tems-center">
          <InformationCard />
          <p>ffsfds</p>
        </div>
      </div>
    </div>
  );
}
