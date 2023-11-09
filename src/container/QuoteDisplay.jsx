import {
  BsFillBookmarkDashFill,
  BsFillBookmarkCheckFill,
} from "react-icons/bs";



const QuoteDisplay = ({ quote, handleBookmark, mark }) => {
  return (
    <div  className=" flex flex-col  justify-between card w-full shadow-lg border-t-8 border-yellow-400 rounded-md py-7 px-5 my-10 ">
      <div className="h-5/6">
        <p className=" text-center text-lg ">{quote?.content}</p>
      </div>

      <div className=" h-20  mt-4">
        <div className=" text-zinc-700 font-semibold text-sm">
          ~{quote?.author}
        </div>
        <div
          className=" text-xl font-bold m-2"
          onClick={() => {
            handleBookmark(quote._id);
          }}
        >
          {" "}
          <span className="flex justify-center text-yellow-500 cursor-pointer ">
            {mark ? (
              <BsFillBookmarkDashFill className="text-gray-300 hover:text-gray-400" />
            ) : (
              <BsFillBookmarkCheckFill className="text-yellow-400 hover:text-yellow-500" />
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuoteDisplay;
