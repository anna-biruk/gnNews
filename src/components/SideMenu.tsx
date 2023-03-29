import countries from "../constans/countries";
import ReactCountryFlag from "react-country-flag";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <div className="mt-10 flex flex-col w-[150px] gap-2 p-2 ml-4">
      {countries.map((country) => {
        return (
          <Link
            to={`/country/${country.countryCode.toLowerCase()}`}
            key={country.countryCode}
          >
            <button className="text-lg font-semibold flex justify-start items-center">
              <ReactCountryFlag countryCode={country.countryCode} svg />
              <span className="ml-2">{country.countryName}</span>
            </button>
          </Link>
        );
      })}
    </div>
  );
};

export default SideMenu;
