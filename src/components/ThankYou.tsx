import { lazy } from "react";
import Btn from "./Btn";
const IconComplete = lazy(() =>
  import("../icons").then((module) => ({
    default: module.IconComplete,
  }))
);

const ThankYou = () => {
  return (
    <div className="w-full grid justify-items-center bg-white rounded-md">
      <IconComplete />
      <div className="mt-10 mb-12 text-center space-y-5">
        <p className="text-thank-you uppercase">Thank you!</p>
        <p className="text-btn text-secondary">We've added your card details</p>
      </div>
      <Btn>Continue</Btn>
    </div>
  );
};

export default ThankYou;
