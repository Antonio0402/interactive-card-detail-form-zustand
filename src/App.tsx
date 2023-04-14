import Btn from "./components/Btn";
import Footer from "./components/Footer";
import CardFront from "./components/CardFront";
import CardBack from "./components/CardBack";
import images from "./images";
import {
  Suspense,
  lazy,
  startTransition,
  useDeferredValue,
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from "react";
import {
  type Name,
  useCVC,
  useFormActions,
  useHolder,
  useIsValidCVC,
  useIsValidDate,
  useIsValidNumber,
  useMonth,
  useNumber,
  useYear,
} from "./store";
import { submitPaymentCard } from "./api/submitApi";
import { AxiosError } from "axios";

const ThankYou = lazy(() => import("./components/ThankYou"));
const IconInfo = lazy(() =>
  import("./icons").then((module) => ({
    default: module.IconInfo,
  }))
);

function App() {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const holderRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (holderRef.current) {
      holderRef.current.focus();
    }
  }, []);

  const month = useMonth();
  const year = useYear();
  const number = useNumber();
  const holder = useHolder();
  const cvc = useCVC();
  const isValidDate = useIsValidDate();
  const isValidNumber = useIsValidNumber();
  const isValidCVC = useIsValidCVC();
  const defferedIsValidDate = useDeferredValue(isValidDate);
  const defferedIsValidNumber = useDeferredValue(isValidNumber);
  const defferedIsValidCVC = useDeferredValue(isValidCVC);
  const { setValue, setIsValidDate, setIsValidNumber, setIsValidCVC } =
    useFormActions();

  async function handleClick(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const res = await submitPaymentCard({ holder, number, month, year, cvc });
      console.log(res?.data);
      console.log(JSON.stringify(res));
      startTransition(() => setIsConfirmed(true));
      ["holder", "number", "month", "year", "cvc"].forEach((name) => {
        setValue("", name as Name);
      });
    } catch (error: typeof AxiosError | unknown | any) {
      if (!error?.response) {
        setErrMsg("No Server Response");
      } else {
        setErrMsg(error.response.data.message);
      }
    }
  }
  return (
    <>
      <div className="basis-1/4 flex relative">
        <img
          src={images.bgMainDesktop.src}
          alt={images.bgMainDesktop.alt}
          loading="lazy"
          className="object-cover h-full hidden sm:block min-h-screen"
        />
        <img
          src={images.bgMainMobile.src}
          alt={images.bgMainMobile.alt}
          loading="lazy"
          className="w-full sm:hidden"
        />
        <CardFront />
        <CardBack />
      </div>

      <main className="basis-3/4 grid grid-rows-[1fr,auto] mt-20 sm:mt-0 px-4 z-10 min-h-[60vh]">
        <div className="grid place-items-center mx-auto w-full max-w-sm">
          {!isConfirmed ? (
            <form
              data-netlify="true"
              name="card-payment"
              method="POST"
              className="w-full grid gap-6 bg-white rounded-md"
            >
              <input type="hidden" name="form-name" value="card-payment" />
              <div className="grid gap-2">
                <label className="text-label" htmlFor="holder-name">
                  Cardholder Name
                </label>
                <input
                  className="rounded-lg text-lg font-medium placeholder:text-light text-primary invalid:border-error focus:outline-none invalid:focus:ring-error"
                  required
                  id="holder-name"
                  name="holder"
                  type="text"
                  aria-invalid={holder ? true : false}
                  placeholder="e.g. Jane Appleseed"
                  ref={holderRef}
                  aria-describedby="holdernote"
                  autoComplete="off"
                  value={holder}
                  onChange={(e) => setValue(e.target.value, "holder")}
                />
                <div
                  id="holdernote"
                  className="text-input-error flex gap-2 items-center"
                >
                  {!holder && <IconInfo />}
                  {!holder && <p>Can't be blank.</p>}
                </div>
              </div>
              <div className="grid gap-2">
                <label className="text-label" htmlFor="card-number">
                  Card Number
                </label>
                <input
                  className="rounded-lg text-lg font-medium placeholder:text-light text-primary invalid:border-error focus:outline-none invalid:focus:ring-error"
                  required
                  type="text"
                  name="number"
                  placeholder=" e.g. 1234 5678 9123 0000"
                  maxLength={16}
                  pattern="\d{16}"
                  id="card-number"
                  aria-invalid={defferedIsValidNumber ? true : false}
                  aria-describedby="numbernode"
                  value={number}
                  onChange={(e) => {
                    setValue(e.target.value, "number");
                    setIsValidNumber();
                  }}
                />
                <div
                  id="numbernode"
                  className="text-input-error flex gap-2 items-center"
                >
                  {(!defferedIsValidNumber || !number) && <IconInfo />}
                  <p>
                    {!number && "Can't be blank"}{" "}
                    {!defferedIsValidNumber &&
                      number &&
                      " Wrong format, number only."}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-start gap-4">
                <div className="grid gap-2 basis-1/2">
                  <label className="text-label" htmlFor="exp-date">
                    Exp. Date (MM/YY)
                  </label>
                  <div className="flex gap-2 peer">
                    <input
                      className="rounded-lg basis-full text-lg font-medium placeholder:text-light text-primary invalid:border-error focus:outline-none invalid:focus:ring-error"
                      required
                      name="month"
                      id="exp-date"
                      type="text"
                      aria-invalid={defferedIsValidDate ? true : false}
                      aria-describedby="datenote"
                      placeholder="MM"
                      size={2}
                      maxLength={2}
                      pattern="\d{2}"
                      value={month}
                      onChange={(e) => {
                        setValue(e.target.value, "month");
                        setIsValidDate();
                      }}
                    />
                    <input
                      className="rounded-lg basis-full text-lg font-medium placeholder:text-light text-primary invalid:border-error focus:outline-none invalid:focus:ring-error"
                      required
                      name="year"
                      type="text"
                      placeholder="YY"
                      size={2}
                      maxLength={2}
                      pattern="\d{2}"
                      aria-describedby="datenote"
                      aria-invalid={defferedIsValidDate ? true : false}
                      value={year}
                      onChange={(e) => {
                        setValue(e.target.value, "year");
                        setIsValidDate();
                      }}
                    />
                  </div>
                  <div
                    id="datenote"
                    className="text-input-error flex gap-2 items-center"
                  >
                    {(!defferedIsValidDate || !month || !year) && <IconInfo />}
                    <p>
                      {(!month || !year) && "Can't be blank"}{" "}
                      {!defferedIsValidDate &&
                        month &&
                        year &&
                        " Wrong format, number only."}
                    </p>
                  </div>
                </div>
                <div className="grid gap-2 basis-1/2">
                  <label className="text-label" htmlFor="cvc">
                    CVC
                  </label>
                  <input
                    className="rounded-lg text-lg font-medium placeholder:text-light text-primary invalid:border-error focus:outline-none invalid:focus:ring-error"
                    required
                    id="cvc"
                    type="text"
                    placeholder="e.g. 123"
                    size={3}
                    maxLength={3}
                    pattern="\d{3}"
                    aria-describedby="cvcnote"
                    aria-invalid={defferedIsValidCVC ? true : false}
                    value={cvc}
                    onChange={(e) => {
                      setValue(e.target.value, "cvc");
                      setIsValidCVC();
                    }}
                  />
                  <div
                    id="cvcnote"
                    className="text-input-error flex gap-2 items-center"
                  >
                    {(!defferedIsValidCVC || !cvc) && <IconInfo />}
                    <p>
                      {!cvc && "Can't be blank"}{" "}
                      {!defferedIsValidCVC &&
                        cvc &&
                        " Wrong format, number only."}
                    </p>
                  </div>
                </div>
              </div>
              <Btn
                disabled={
                  !isValidNumber || !isValidDate || !isValidCVC ? true : false
                }
                handleClick={handleClick}
              >
                Confirm
              </Btn>
              <p
                className={`text-error text-btn ${
                  errMsg ? "visible" : "invisible"
                }`}
                aria-live="assertive"
              >
                {errMsg}
              </p>
            </form>
          ) : (
            <Suspense fallback={<h1>Loading...</h1>}>
              <ThankYou />
            </Suspense>
          )}
        </div>

        <Footer />
      </main>
    </>
  );
}

export default App;
