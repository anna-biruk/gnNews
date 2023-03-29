import { Article } from "../features/news/newsSlice";
import truncate from "lodash/truncate";
import { useState } from "react";
import { createPortal } from "react-dom";
import CardInformationModal from "./CardInformationModal";

type Props = {
  article: Article;
  layout: string;
};

const NewsListItem = ({ article, layout }: Props) => {
  const [showModal, setShowModal] = useState(false);

  if (layout === "CARDS") {
    return (
      <div className="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700 ">
        {article.urlToImage ? (
          <img
            className="rounded-t-lg w-full object-cover h-[200px]"
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

        <div className="p-6 h-[100%] flex flex-col">
          <h5 className="mb-2 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {truncate(article.title, { length: 70, separator: " " })}
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {truncate(article.description, { length: 100, separator: " " })}
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="mt-auto w-fit text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            More info
          </button>
        </div>
        {showModal &&
          createPortal(
            <CardInformationModal
              onClose={() => {
                setShowModal(false);
              }}
              article={article}
            />,
            document.body
          )}
      </div>
    );
  } else {
    return (
      <div className="w-full rounded-lg bg-white shadow-lg dark:bg-neutral-700 flex items-center justify-between ">
        {article.urlToImage ? (
          <img
            className="rounded-lg w-[100px] object-cover h-[100px]"
            src={article.urlToImage}
            alt={article.urlToImage}
          />
        ) : (
          <img
            className="rounded-lg w-[100px] object-cover h-[100px]"
            src="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
            alt="noImage"
          />
        )}
        <h5 className="mb-2 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {truncate(article.title, { length: 70, separator: " " })}
        </h5>
        <button
          onClick={() => {
            setShowModal(true);
          }}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          More info
        </button>
        {showModal &&
          createPortal(
            <CardInformationModal
              onClose={() => {
                setShowModal(false);
              }}
              article={article}
            />,
            document.body
          )}
      </div>
    );
  }
};

export default NewsListItem;
