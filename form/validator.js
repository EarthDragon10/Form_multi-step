const checkForm = (conf) => {
  switch (conf.currentStep) {
    case 1:
      checkStep1(conf);
      break;

    case 2:
      checkStep2(conf);
      break;

    case 3:
      checkStep3(conf);
      break;

    default:
      break;
  }
};

function checkStep1(conf) {
  resetErrorMessage(conf);
  if (
    conf.formApp.elements["name"].value.length >= 2 &&
    conf.formApp.elements["lastname"].value.length >= 2
  ) {
    return (conf.stepValid = true);
  }

  showErrorMessage(conf, "Compilare i campi obbligatori *");

  console.log(conf.formApp.elements["lastname"].value);
}

function checkStep2(conf) {
  resetErrorMessage(conf);

  if (conf.formApp.elements["email"].value.length >= 2) {
    return (conf.stepValid = true);
  }

  showErrorMessage(conf, "Compilare i campi obbligatori *");
}

function checkStep3(conf) {
  resetErrorMessage(conf);
  alert("I moduli sono stati compilati correttamente!");
  conf.formApp.submit();
}

function showErrorMessage(conf, msg) {
  conf.errorMessage.textContent = msg;
}

function resetErrorMessage(conf) {
  conf.errorMessage.textContent = "";
}

export default checkForm;
