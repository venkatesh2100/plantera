"use client";

import { useSession } from "next-auth/react";
import { NavBar } from "../components/navbar";
import Image from "next/image";
import Footer from "@/components/footer";


interface ImageProps {
  image: string;
  alt: string; 
  name: string;
}

// Reusable ProductCard Component
const ProductCard = ({ image, alt, name }: ImageProps) => (
  <div className="text-center">
    <Image src={image} alt={alt} width={128} height={128} />
    <p className="mt-2">{name}</p>
  </div>
);

export default function Home() {
  // const { data: session, status } = useSession();

  // Handle loading and unauthenticated states
  // if (status === "loading") {
  //   return <div>Loading...</div>;
  // }
  // if (!session) {
  //   return <div>You need to sign in</div>;
  // }

  return (
    <div>
      {/* Navbar */}
      <NavBar />

      {/* Main Hero Section */}
      <div className="relative text-center bg-[#F9EDE2] h-[100vh]">
        {/* Background Image */}
        <Image
          src="https://s3-alpha-sig.figma.com/img/d053/7814/4e5e8a88e68f247771e365a7e5dc1cef?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KW0EcTR497lw~tI96aGgZgqURFZGR4xtSJ94~oOM759FsxPHC9sK1aa86oBpIXHuclGYEA3jXXalXRKrUt6xwFworikuwoatR2Y2tsogF6nH3WHpscJe3LjZgpMI5qL91seymcVurcjOOVJ4onldiZtYuV6UTFnzheCHldrmycjVJJJRdkP~dl0zsQrZKEumcfyz7X4ChP-edfV7zMZvZf47cnVDYSzpCmR4fpC3hUq~2LHItZtfV7gcOqPAzdN0oS8NewIdcDW-yWynylJ-SqFVsAHvWzx2-PayKVNKpqbDqPpOoCWDjM7BDnl2S4f71~7-Z9iulxu1RVGrrnneeA__"
          alt="Hero Background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          <h1 className="text-3xl md:text-5xl font-bold text-green-900 mt-6 mb-4">
            Discover the Beauty of Plants
          </h1>
          <p className="text-base md:text-lg text-gray-700 mb-6 mx-4 md:mx-0 max-w-lg">
            Welcome to Plantera, your premier destination for lush, vibrant
            plants that will transform your living space into a serene oasis.
          </p>
          <button className="px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800">
            Shop Our Collection
          </button>
        </div>
      </div>

      {/* Product Section */}
      <div className="flex flex-wrap items-center justify-center gap-8 py-10  bg-white">
        {/* Render product cards */}
        <ProductCard
          image="/Plant images/Image 3.png"
          alt="Aloe Vera"
          name="Aloe Vera"
        />
        <ProductCard
          image="/Plant images/Image 2.png"
          alt="Snake Plant"
          name="Snake Plant"
        />
        <ProductCard
          image="/Plant images/Image 3.png"
          alt="Peace Lily"
          name="Peace Lily"
        />
        <ProductCard
          image="/Plant images/Image 4.png"
          alt="Spider Plant"
          name="Spider Plant"
        />
        <ProductCard
          image="/Plant images/Image 5.png"
          alt="Cactus"
          name="Cactus"
        />
      </div>

      {/* Mid-section */}
      <div className="relative flex items-center h-[80vh] bg-[#E9F6E2] py-16">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Section 3.png" // Use your image path or imported image
            alt="Mid Section Background"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Content Section */}
        <div className="flex ml-20 justify-start items-center w-full px-6">
          <div className="relative z-10 max-w-2xl text-left mr-8">
            <h2 className="text-4xl font-semibold text-green-900 mb-4">
              Elevate Your Space with Plantera
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Plantera offers a wide selection of stunning potted plants that
              are perfect for any room in your home. From low-maintenance
              succulents to lush, trailing vines, our plants are carefully
              chosen to thrive in a variety of environments.
            </p>
            <button className="mt-6 px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Final Section */}
      <div className="py-16 px-10 bg-white">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Caring for Your Plants
        </h3>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10">
          Discover our care guides and learn how to keep your plants thriving.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <Image
            src="/path/to/plant3.png"
            alt="Plant Care 1"
            width={192}
            height={192}
          />
          <Image
            src="/path/to/plant4.png"
            alt="Plant Care 2"
            width={192}
            height={192}
          />
          {/* Add more care guide images as necessary */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
