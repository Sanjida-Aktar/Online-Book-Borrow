import Link from "next/link";
import BookName from "../shared/BookName";
import bgimge from "@/imge/bgimg.jpg"


const HeroBanner = () => {
  return (
    
    <section className="bg-gradient-to-r from-emerald-50 via-white to-green-100 container mx-auto">
       

      <div className=" max-w-7xl mx-auto px-6 py-24">
        <div className=" flex flex-col justify-center items-center text-center">


          <div>

            <span className="text-emerald-600 font-semibold">
              Discover Your Next Favorite Book
            </span>

            <h1 className="text-6xl font-extrabold text-gray-900 mt-5 leading-tight">
              Find Your <span className="text-emerald-600">
                Next Read
              </span>
            </h1>
                       


            <p className="text-gray-600 text-lg mt-6 leading-8">
              Explore thousands of books across Story,
              Tech and Science categories.
              Borrow books digitally anytime,
              anywhere.
            </p>

            <div className="flex gap-5 text-center mt-8 justify-center">

              <Link
                href="/books"
                className="btn btn-success px-8"
              >
                Browse Now
              </Link>

              <button className="btn btn-outline btn-success px-8">
                Explore Library
              </button>

            </div>

            <div className="flex gap-8 item-center text-center justify-center mt-12">

              <div>
                <h2 className="text-3xl font-bold text-emerald-600">
                  10K+
                </h2>
                <p className="text-gray-500">
                  Books
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-emerald-600">
                  5K+
                </h2>
                <p className="text-gray-500">
                  Readers
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-emerald-600">
                  4.9★
                </h2>
                <p className="text-gray-500">
                  Rating
                </p>
              </div>

            </div>

          </div>


        </div>

      </div>

    </section>
  );
};

export default HeroBanner;