import Card from "../../components/Card";

const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc: "/products/superseeder.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "/products/plow.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "/products/rotavater.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "/products/rootawaiter.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "/products/superseeder.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "/products/rootawaiter.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

export default function Product() {
  // const {id} = useParams()
  // const [product, setProduct] = useState(null)

  // console.log(id)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const {data} = await axios.get('http://localhost:8080/product/', id)
  //     setProduct(data?.product)
  //   }

  //   fetchData()
  // },[id])

  return (
    <>
      {products ? (
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 min-h-[80dvh] sm:px-6 sm:pb-24 sm:pt-16 lg:max-w-7xl lg:px-8">
            <div className="mb-10 px-12">
              <div>
                <hr />
              </div>
              <div className="flex justify-center">
                <h1 className="font-semibold px-4 -top-5 bg-white relative text-gray-600 text-2xl">
                  Our Products
                </h1>
              </div>
              <p className="text-center text-gray-500">
                We are the manufacturer of Super Seeder Blades, Rotavator
                Blades, rotary tiller blades in Punjab, INDIA
              </p>
            </div>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <Card product={product} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p className="h-[70vh]">loading....</p>
      )}
    </>
  );
}
