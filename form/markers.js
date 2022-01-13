const setStepForm = (conf) => {
  const stepMargin = (conf.currentStep - 1) * (100 + conf.GAP);
  console.log(stepMargin);
  conf.formStepWrapper.style.marginLeft = `-${stepMargin}%`;
};

const setMarker = (conf) => {
  conf.markersStep.forEach((item, i) => {
    item.className = "n-step " + (i < conf.currentStep - 1 ? "valid" : "next");
    item.className =
      i === conf.currentStep - 1 ? "n-step current" : item.className;
  });

  conf.btnPrev.style.display = conf.currentStep > 1 ? "inline" : "none";
  conf.btnNext.textContent =
    conf.currentStep === conf.STEP_NUM ? "Completa" : "Next";
};

export { setStepForm, setMarker };
