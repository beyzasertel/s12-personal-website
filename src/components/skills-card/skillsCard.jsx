export default function SkillsCard({ text, icon }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={icon} alt={text} className="mb-2" />
      <p className="text-lightGray text-base uppercase">{text}</p>
    </div>
  );
}
