export default function InformationCard() {
  return (
    <div className="relative w-full">
      <div className="bg-mediumGray/50 rounded-4 absolute inset-0 translate-x-2 translate-y-2"></div>

      <div className="bg-white dark:bg-mediumGray! rounded-4 relative py-8 px-4 w-full h-auto">
        <p className="font-playfair text-pink text-xl mb-4">
          Basic Information
        </p>

        <div className="grid grid-cols-2 gap-y-3 text-mediumBlack dark:text-white">
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
