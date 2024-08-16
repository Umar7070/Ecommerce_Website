import LatestProduct from "./LatestProduct";

const producat = [
  {
    id: 1,
    name: "Tablet",
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicin quos dignissimos enim labore nostrum inventore.",
    price: "505$",
    img: "/img/tp1.jpg",
  },
  {
    id: 2,
    name: "Smart Watch",
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicin quos dignissimos enim labore nostrum inventore.",
    price: "809$",
    img: "/img/tp2.jpg",
  },
  {
    id: 3,
    name: "Headephone",
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicin quos dignissimos enim labore nostrum inventore.",
    price: "205$",
    img: "/img/tp3.jpg",
  },
  {
    id: 4,
    name: "Camera",
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicin quos dignissimos enim labore nostrum inventore.",
    price: "295$",
    img: "/img/tp4.jpg",
  },
  {
    id: 5,
    name: "Powerbank",
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicin quos dignissimos enim labore nostrum inventore.",
    price: "99$",
    img: "/img/tp1.jpg",
  },
  {
    id: 6,
    name: "Heat pipe",
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicin quos dignissimos enim labore nostrum inventore.",
    price: "505$",
    img: "/img/tp6.png",
  },
  {
    id: 7,
    name: "Gaming",
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicin quos dignissimos enim labore nostrum inventore.",
    price: "505$",
    img: "/img/tp7.jpg",
  },
  {
    id: 8,
    name: "Powerbank",
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicin quos dignissimos enim labore nostrum inventore.",
    price: "505$",
    img: "/img/tp8.jpg",
  },
];
const HomeProducts = () => {
  return (
    <div className="container w-full mt-10">
      <h2 className="text-2xl font-bold text-blue-950">Top Product</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center  gap-6 p-5 shadow-lg mt-10">
        {producat.map((curEle, index) => {
          return (
            <>
              <div className="border rounded-lg hover:scale-110 transition-transform duration-500 ">
                <img src={curEle.img} alt="" />
                <p className="text-blue-950 mx-7 hover:text-red-950">
                  {curEle.name}
                </p>
                <p className="text-xs text-gray-500 p-2 hover:text-red-950">
                  {curEle.title}
                </p>
                <p className="mx-7 mb-6 hover:text-orange-600">
                  {curEle.price}
                </p>
              </div>
            </>
          );
        })}
      </div>
      <LatestProduct/>
    </div>
  );
};

export default HomeProducts;
