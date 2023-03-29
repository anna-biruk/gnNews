import { Article } from "../features/news/newsSlice";

type Props = {
  onClose: () => void;
  article: Article;
};

const CardInformationModal = ({ onClose, article }: Props) => {
  return (
    <div className="fixed flex justify-center items-center bg-white/40 left-0 right-0 bottom-0 top-0">
      <div className=" bg-white shadow-md  w-[600px] rounded p-4 flex items-center flex-col justify-between">
        <div className="font-semibold text-lg">{article.title}</div>
        <div className="flex gap-3 mt-4 mb-4">
          {article.urlToImage ? (
            <img
              className="rounded-sm max-w-[260px] object-cover h-[200px]"
              src={article.urlToImage}
              alt={article.urlToImage}
            />
          ) : (
            <img
              className="rounded-t-lg w-full object-cover h-[200px]"
              src="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
              alt="noImage"
            />
          )}
          <div className="max-w-[200px]">
            {article.description}
            <div className="font-semibold mt-2">{article.author}</div>
          </div>
        </div>
        <a href={article.url} rel="noreferrer" target="_blank">
          <div className="font-semibold mb-6 text-blue-800">
            Click for more details
          </div>
        </a>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => {
            onClose();
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CardInformationModal;
