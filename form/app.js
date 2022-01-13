// Entry Point
// import checkForm from "./validator.js";
import { setStepForm, setMarker } from "./markers.js";

const conf = {
  btnNext: document.querySelector("#btn-next"),
  btnPrev: document.querySelector("#btn-prev"),
  formStepWrapper: document.querySelector("#form-step-wrapper"),
  errorMessage: document.querySelector("#error-message"),
  markersStep: document.querySelectorAll("#markers > div"),
  formApp: document.forms["form-app"],
  STEP_NUM: 3,
  GAP: 20,
  currentStep: 1,
  stepValid: true,
};

const stepValidatorEvent = (e) => {
  e.stopPropagation();
  e.preventDefault();

  // check fields validity
  // checkForm(conf);
};

const stepEvent = (e) => {
  e.stopPropagation();
  e.preventDefault();

  // Step management

  if (e.target.id === "btn-next") {
    if (conf.currentStep === conf.STEP_NUM || !conf.stepValid) return;
    conf.currentStep++;
    conf.stepValid = true;
  } else {
    conf.currentStep--;
  }

  setMarker(conf);
  setStepForm(conf);
};

export default () => {
  console.log("App in esecuzione...");
  // console.log(conf);
  conf.btnNext.addEventListener("click", stepValidatorEvent);
  conf.btnNext.addEventListener("click", stepEvent);
  conf.btnPrev.addEventListener("click", stepEvent);
};
