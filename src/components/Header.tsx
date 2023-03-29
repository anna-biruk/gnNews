import { ReactComponent as ListIcon } from "../assets/list.svg";
import { ReactComponent as CardsIcon } from "../assets/cards.svg";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { setLayout } from "../features/news/newsSlice";
import { Layout } from "../features/news/newsSlice";
import { useState } from "react";
import clsx from "clsx";
import DetailsModal from "./DetailsModal";
import { Link } from "react-router-dom";

const Header = () => {
  const [isListButtonActive, setIsListButtonActive] = useState(false);
  const [isCardButtonActive, setIsCardButtonActive] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const handleClickListLayout = (layout: string) => {
    setIsListButtonActive(true);
    setIsCardButtonActive(false);
    dispatch(setLayout(layout));
  };
  const handleClickCardsLayout = (layout: string) => {
    setIsListButtonActive(false);
    setIsCardButtonActive(true);
    dispatch(setLayout(layout));
  };

  return (
    <div className="flex justify-between mt-4">
      <Link to="/">
        <div className="text-xl font-semibold ml-10">gnNews</div>
      </Link>
      <div className="mr-10">
        <button
          className={clsx("mr-4  p-3", {
            "bg-blue-100 rounded": isCardButtonActive,
          })}
          onClick={() => handleClickCardsLayout(Layout.Cards)}
        >
          <CardsIcon />
        </button>

        <button
          className={clsx("mr-4  p-3", {
            "bg-blue-100 rounded": isListButtonActive,
          })}
          onClick={() => handleClickListLayout(Layout.List)}
        >
          <ListIcon />
        </button>
        <button
          onClick={() => setShowModal(true)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Details
        </button>
        {showModal &&
          createPortal(
            <DetailsModal onClose={() => setShowModal(false)} />,
            document.body
          )}
      </div>
    </div>
  );
};
export default Header;
