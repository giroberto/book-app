import React, { useEffect, useState } from 'react';

const Star: React.FC = () => {
  return (
    <svg className="inline fill-current text-yellow-500 w-6" viewBox="0 0 24 24">
      <path d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z" />
    </svg>
  );
};

type Props = {
  book: Book;
};

function BookCard({ book }: Props) {
  // const book = {
  //   title: 'O morro dos ventos uivantes',
  //   author: 'Emily Bronte',
  //   rate: 4.7,
  //   ratings: 303,
  //   description:
  //     'Único romance da escritora inglesa Emily Bronte, O morro dos ventos uivantes retrata uma trágica historia de amor e obsessão em que os personagens principais são a obstinada e geniosa Catherine Earnshaw e seu irmão adotivo, Heathcliff. Grosseiro, humilhado e rejeitado, ele guarda apenas rancor no coração, mas tem com Catherine um relaciona- mento marcado por amor e, ao mesmo tempo, ódio. Essa ligação perdura mesmo com o casamento de Catherine com Edgar Linton.',
  //   images: {
  //     cover: 'https://images-na.ssl-images-amazon.com/images/I/A1nINi18tKL.jpg',
  //     back: 'https://images-na.ssl-images-amazon.com/images/I/51G2FTVDK9L.jpg',
  //   },
  //   stars: {
  //     one: 2,
  //     two: 0,
  //     three: 6,
  //     four: 13,
  //     five: 79,
  //   },
  // };
  if (!book) {
    return <p>No book</p>;
  }
  const [activeImage, setActiveImage] = useState('');
  useEffect(() => {
    setActiveImage(book.images.cover);
  }, []);

  const handleChangeImage = (image) => {
    setActiveImage(image);
  };

  return (
    <div className="flex border shadow-lg mb-4 p-4">
      <div>
        <div className="h-64 w-64 overflow-hidden" style={{ width: '32rem', height: '48rem' }}>
          <picture>
            <source srcSet={activeImage} type="image/webp" />
            <source srcSet={activeImage} type="image/jpeg" />
            <img className="object-cover object-center mx-auto min-h-full" src={activeImage} alt="Alt Text!" />
          </picture>
        </div>
        <div className="flex mt-4 justify-center self-center">
          <button type="button" onClick={() => handleChangeImage(book.images.cover)} onKeyDown={handleChangeImage}>
            <picture>
              <source srcSet={book.images.cover} type="image/webp" />
              <source srcSet={book.images.cover} type="image/jpeg" />
              <img className="w-24 object-cover" src={book.images.cover} alt="Alt Text!" />
            </picture>
          </button>
          <button
            className="ml-2"
            type="button"
            onClick={() => handleChangeImage(book.images.back)}
            onKeyDown={handleChangeImage}
          >
            <picture>
              <source srcSet={book.images.back} type="image/webp" />
              <source srcSet={book.images.back} type="image/jpeg" />
              <img className="w-24" src={book.images.back} alt="Alt Text!" />
            </picture>
          </button>
        </div>
      </div>
      <div className="ml-8 mt-16">
        <h2 className="font-semibold text-3xl text-gray-800">{book.title}</h2>
        <p className="leading-none">{book.author}</p>
        <p className="flex items-center mt-2">
          <span className="font-semibold text-2xl text-gray-700">{book.rate}</span>
          <Star />
          <span>based on {book.ratings} reviews</span>
        </p>

        <p className="px-2">{book.description}</p>
        <h3 className="font-semibold text-lg mt-8 text-gray-800">Reviews</h3>
        <p className="mr-2 flex items-center leading-loose">
          <span className="w-5 text-right">{book.stars.one}</span>
          <Star />
        </p>
        <p className="mr-2 flex items-center leading-loose">
          <span className="w-5 text-right">{book.stars.two}</span>
          <Star />
          <Star />
        </p>
        <p className="mr-2 flex items-center leading-loose">
          <span className="w-5 text-right">{book.stars.three}</span>
          <Star />
          <Star />
          <Star />
        </p>
        <p className="mr-2 flex items-center leading-loose">
          <span className="w-5 text-right">{book.stars.four}</span>
          <Star />
          <Star />
          <Star />
          <Star />
        </p>
        <p className="mr-2 flex items-center leading-loose">
          <span className="w-5 text-right">{book.stars.five}</span>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </p>
      </div>
    </div>
  );
}

export default BookCard;
