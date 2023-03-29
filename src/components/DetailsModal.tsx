type Props = {
  onClose: () => void;
};

const DetailsModal = ({ onClose }: Props) => {
  return (
    <div className="fixed flex justify-center items-center bg-white/40 left-0 right-0 bottom-0 top-0">
      <div className="bg-white shadow-md  w-[500px]  rounded p-4 flex justify-center flex-col items-center">
        <div className="font-semibold pl-3 pr-3">
          Dziękuję bardzo za możliwość pokazania swojej wiedzy i umiejętności.
          Mam nadzieję, że w przyszłości będziemy mogli o tym porozmawiać.
        </div>
        <ul className="list-disc p-6">
          <li>
            Bardzo lubię tworzyć strony internetowe za pomocą React i Redux,
            ponieważ dzięki nim można szybko tworzyć funkcjonalne i kompleksowe
            aplikacje internetowe.
          </li>

          <li>
            Największą przyjemność sprawiło mi stworzenie bocznego menu.
            Ponieważ jest to bardzo wygodne że użytkownik może szybko zobaczyć
            wiadomości dla kraju, który go interesuje.
          </li>
        </ul>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default DetailsModal;
