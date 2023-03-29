type Country = {
  countryName: string;
  countryCode: string;
};

type CountriesArr = Country[];

const countries: CountriesArr = [
  {
    countryName: "USA",
    countryCode: "us",
  },
  {
    countryName: "Poland",
    countryCode: "pl",
  },
  {
    countryName: "Ukraine",
    countryCode: "ua",
  },
  {
    countryName: "Israel",
    countryCode: "il",
  },
  {
    countryName: "Latvia",
    countryCode: "lv",
  },
  {
    countryName: "France",
    countryCode: "fr",
  },
];

export default countries;
