
import Link from "next/link";

const BookDetails = async ({ params }) => {
    const { id } = await params;
  const res = await fetch("https://online-book-borowing.vercel.app/books.json", {
    cache: "no-store",
  });

  const books = await res.json();

  const book = books.find((item) => item.id == Number(id));

  if (!book) {
    return (
      <>
        
        <div className="flex justify-center items-center h-[70vh]">
          <h1 className="text-3xl font-bold text-red-500">
            Book Not Found!
          </h1>
        </div>
      </>
    );
  }

  return (
    <>
     

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <img
              src={book.image_url}
              alt={book.title}
              className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
            />
          </div>

          <div>
            <span className="badge badge-success mb-4">
              {book.category}
            </span>

            <h1 className="text-5xl font-bold">
              {book.title}
            </h1>

            <h3 className="text-xl text-gray-500 mt-3">
              By {book.author}
            </h3>

            <p className="mt-8 text-gray-600 leading-8">
              {book.description}
            </p>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold">
                Available Copies:
                <span className="text-emerald-600 ml-2">
                  {book.available_quantity}
                </span>
              </h2>
            </div>

            <div className="flex gap-4 mt-10">

              <button className="btn btn-success">
                Borrow This Book
              </button>

              <Link href="/books">
                <button className="btn btn-outline">
                  Back
                </button>
              </Link>

            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default BookDetails;