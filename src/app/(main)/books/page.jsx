"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import BookName from "@/components/shared/BookName";

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("/books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const filteredBooks = books.filter((book) => {
    const matchesSearch = book.title
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      book.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <div className="pt-4">
        <BookName />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
          <h1 className="text-4xl font-bold">
            All Books
          </h1>

          <input
            type="text"
            placeholder="Search books by title..."
            className="input input-bordered w-full md:w-96"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

        <div className="grid lg:grid-cols-4 gap-8">

          <div className="bg-base-100 shadow-lg rounded-xl p-5 h-fit">

            <h2 className="text-2xl font-bold mb-4">
              Categories
            </h2>

            <div className="space-y-3">

              <button
                onClick={() => setSelectedCategory("All")}
                className={`btn w-full ${
                  selectedCategory === "All"
                    ? "btn-success"
                    : "btn-outline"
                }`}
              >
                All Books
              </button>

              <button
                onClick={() => setSelectedCategory("Story")}
                className={`btn w-full ${
                  selectedCategory === "Story"
                    ? "btn-success"
                    : "btn-outline"
                }`}
              >
                Story
              </button>

              <button
                onClick={() => setSelectedCategory("Tech")}
                className={`btn w-full ${
                  selectedCategory === "Tech"
                    ? "btn-success"
                    : "btn-outline"
                }`}
              >
                Tech
              </button>

              <button
                onClick={() => setSelectedCategory("Science")}
                className={`btn w-full ${
                  selectedCategory === "Science"
                    ? "btn-success"
                    : "btn-outline"
                }`}
              >
                Science
              </button>

            </div>
          </div>

          <div className="lg:col-span-3">

            {filteredBooks.length === 0 ? (
              <div className="text-center py-20">
                <h2 className="text-3xl font-bold text-gray-500">
                  books not found
                </h2>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

                {filteredBooks.map((book) => (
                  <div
                    key={book.id}
                    className="card bg-base-100 shadow-xl hover:shadow-2xl transition"
                  >
                    <figure>
                      <img
                        src={book.image_url}
                        alt={book.title}
                        className="h-72 w-full object-cover"
                      />
                    </figure>

                    <div className="card-body">
                      <h2 className="card-title">
                        {book.title}
                      </h2>

                      <p className="text-gray-500">
                        {book.author}
                      </p>

                      <div className="badge badge-success">
                        {book.category}
                      </div>

                      <Link
                        href={`/books/${book.id}`}
                        className="mt-3"
                      >
                        <button className="btn btn-success w-full">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}

              </div>
            )}
          </div>

        </div>
      </div>
    </>
  );
};

export default BooksPage;