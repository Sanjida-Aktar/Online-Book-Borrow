import BookName from "@/components/shared/BookName";
import Navbar from "@/components/shared/Navbar";
import Link from "next/link";

const BooksPage = async () => {
  const res = await fetch("http://localhost:3000/books.json", {
    cache: "no-store",
  });

  const books = await res.json();

  return (
    <>
      <div className="pt-4">
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-8">All Books</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <div key={book.id} className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src={book.image_url}
                  alt={book.title}
                  className="h-72 w-full object-cover"
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title">{book.title}</h2>
                <p>{book.author}</p>

                <Link href={`/books/${book.id}`}>
                  <button className="btn btn-success w-full">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BooksPage;
