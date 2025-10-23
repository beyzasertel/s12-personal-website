export default function InformationCard() {
  return (
    <div className="bg-mediumGray/50 rounded-4 relative h-[230px] md:h-[290px] w-[280px] md:w-[350px]">
      <div className="bg-white dark:bg-mediumGray! rounded-4 absolute bottom-3 md:right-3 py-8 px-4">
        <p className="font-playfair text-pink text-xl">Basic Information</p>

        <div className="grid grid-cols-2 gap-y-4 text-mediumBlack dark:text-white">
          <span className="font-semibold">Doğum Tarihi</span>
          <span>24.03.1996</span>

          <span className="font-semibold">İkamet Şehri</span>
          <span>Ankara</span>

          <span className="font-semibold">Eğitim Durumu</span>
          <span>
            Hacettepe Ünv. Biyoloji <br /> Lisans, 2016
          </span>

          <span className="font-semibold">Tercih Ettiği Rol</span>
          <span>Frontend, UI</span>
        </div>
      </div>
    </div>
  );
}
