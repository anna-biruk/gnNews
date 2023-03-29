import { useSelector } from "react-redux";
import { selectNews } from "../features/news/newsSlice";

const Footer = () => {
  const articles = useSelector(selectNews);

  const today = new Date();
  const day = today.toUTCString();
  return (
    <div className="mt-10 flex flex-col justify-center  items-center border-t-2 p-2">
      <div>{day}</div>
      <div> Number of articles: {articles.articles.length}</div>
    </div>
  );
};

export default Footer;
