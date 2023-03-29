import { useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchData,
  selectLayout,
  selectStatus,
} from "../features/news/newsSlice";
import { useAppDispatch } from "../app/store";
import { selectNews } from "../features/news/newsSlice";
import NewsListItem from "./NewsListItem";
import clsx from "clsx";
import { useParams } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const NewsList = () => {
  const dispatch = useAppDispatch();
  const data = useSelector(selectNews);
  const layout = useSelector(selectLayout);
  const status = useSelector(selectStatus);

  const { countryCode = "us" } = useParams();

  useEffect(() => {
    dispatch(fetchData(countryCode as string));
  }, [dispatch, countryCode]);

  return (
    <>
      {status === "loading" ? (
        <div className="flex justify-center items-center w-full">
          <LoadingSpinner />
        </div>
      ) : (
        <div
          className={clsx({
            "grid grid-cols-1 gap-3 mt-10 justify-items-center max-w-[1180px] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3":
              layout === "CARDS",
            "grid grid-cols-1 gap-3 mt-10 w-[1180px]": layout === "LIST",
          })}
        >
          {data.articles.map((article) => {
            return (
              <NewsListItem
                article={article}
                key={article.title}
                layout={layout}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default NewsList;
