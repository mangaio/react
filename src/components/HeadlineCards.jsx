import React from "react";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-4 gap-6">
      {/* card */}
      <div className="rounded-xl  relative ">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-lg text-white">
          <p className="font-bold text-2xl px-2 pt-4">Action Anime</p>
          <p className="px-2 text-gray-400">Through 8/26</p>
          
          <button className="btn  inline-flex items-center mx-2  bottom-4 absolute justify-start overflow-hidden transition-all bg-white rounded-xl hover:bg-white group">
            {/* purple box */}
            <span className="w-0 h-0 rounded bg-green-600 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
            <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
            Watch Anime
            </span>
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://cdn.gameleap.com/images/articles/art_Mm8Oe4EYjV/art-img_6tiiZKP4X/1x.webp"
          alt=""
        />
      </div>

      {/* card */}
      <div className="rounded-xl  relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-lg text-white">
          <p className="font-bold text-2xl px-2 pt-4">Romantic Anime</p>
          <p className="px-2 text-gray-400">Through 8/26</p>
          <button className="btn  inline-flex items-center mx-2  bottom-4 absolute justify-start overflow-hidden transition-all bg-white rounded-xl hover:bg-white group">
            {/* purple box */}
            <span className="w-0 h-0 rounded bg-green-600 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
            <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
            Watch Anime
            </span>
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.saymedia-content.com/.image/t_share/MTc2MjY3NjYxNjgzMTM5NzU3/the-top-romance-anime-you-have-to-see.jpg"
          alt=""
        />
      </div>

      {/* card */}
      <div className="rounded-xl  relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-lg text-white">
          <p className="font-bold text-2xl px-2 pt-4">Horror Anime</p>
          <p className="px-2 text-gray-400">Through 8/26</p>
          <button className="btn  inline-flex items-center mx-2  bottom-4 absolute justify-start overflow-hidden transition-all bg-white rounded-xl hover:bg-white group">
            {/* purple box */}
            <span className="w-0 h-0 rounded bg-green-600 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
            <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
            Watch Anime
            </span>
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/85ec6aca-4849-4485-ba56-cce30eb0a325/dfy5pfc-a4c9f10e-10ec-4713-b002-0ce66862be5e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg1ZWM2YWNhLTQ4NDktNDQ4NS1iYTU2LWNjZTMwZWIwYTMyNVwvZGZ5NXBmYy1hNGM5ZjEwZS0xMGVjLTQ3MTMtYjAwMi0wY2U2Njg2MmJlNWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6s7xaX5IKn0eXISBxQFUrlznwrYcOJWr4IIogvsET40"
          alt=""
        />
      </div>

      {/* card */}
      <div className="rounded-xl  relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-lg text-white">
          <p className="font-bold text-2xl px-2 pt-4">Thriller Anime</p>
          <p className="px-2 text-gray-400">Through 8/26</p>
          <button className="btn  inline-flex items-center mx-2  bottom-4 absolute justify-start overflow-hidden transition-all bg-white rounded-xl hover:bg-white group">
            {/* purple box */}
            <span className="w-0 h-0 rounded bg-green-600 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
            <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
            Watch Anime
            </span>
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://miro.medium.com/v2/resize:fit:1200/0*n3q148eqv5zttsw5.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
