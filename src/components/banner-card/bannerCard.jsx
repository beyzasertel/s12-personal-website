export default function BannerCard({}) {
  return (
    <div className="bg-pink relative h-22 w-22 md:h-64 md:w-64 rounded-sm md:rounded-xl">
      <img
        src="src/assets/images/photos/profile-photo.svg"
        alt="profile-path"
        className="absolute top-2 left-2 md:top-3 md:left-3"
      />
    </div>
  );
}
