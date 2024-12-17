/* eslint-disable @next/next/no-img-element */




const ArrayMap = () => {
    const CarName = [
      {
        carName: "Toyota Corolla",
        price: "PK 80.6- 100.8 Lacs",
        reviews: "⭐⭐⭐⭐⭐",
        image: "https://www.toyota-central.com/Assets/images/Vehicle/CorollaX/Color/SuperWhite.png",
      },
      {
        carName: "Land Cruiser",
        price: "PK 100.5-300.8 Lacs",
        reviews: "⭐⭐⭐⭐⭐",
        image: "https://imgd.aeplcdn.com/642x336/n/cw/ec/139739/land-cruiser-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
      },
      {
        carName: "Honda Civics",
        price: "PK  1.40 Cr",
        reviews: "⭐⭐⭐⭐⭐",
        image: "https://di-honda-enrollment.s3.amazonaws.com/2021/model-pages/civic_hatchback/trims/Hatchback+EX.jpg",
      },
      {
        carName: "Mahindra Thar",
        price: "PK  5.40 Cr",
        reviews: "⭐⭐⭐⭐⭐",
        image: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20240816122007_11.png&w=700&c=1",
      },
      {
        carName: "Toyota Hilux Revo",
        price: "PK  3.40 Cr",
        reviews: "⭐⭐⭐⭐⭐",
        image: "https://cache1.pakwheels.com/system/car_version_specification_pictures/426/original/Toyota_Hilux_Revo_GR-S_2023_.png?1679076556",
      },
    ];
  
    return (
      <div className="p-4">
        <h1 className="flex justify-center uppercase text-4xl font-semibold mt-4">
          Featuring New Cars with Array Component
        </h1>
        <div className="flex gap-4 justify-center mt-9 overflow-x-auto">
          {CarName.map((car, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-600 w-56 p-4 rounded-lg text-white"
            >
              <img
                src={car.image}
                alt={car.carName}
                className="w-full h-32 object-cover mb-7 rounded"
              />
              <h3 className="text-lg font-bold">{car.carName}</h3>
              <p>{car.price}</p>
              <p>{car.reviews}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ArrayMap;