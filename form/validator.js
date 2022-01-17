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

  const email = conf.formApp.elements["email"].value;

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return (conf.stepValid = true);
  }

  return (conf.stepValid = true);

  showErrorMessage(conf, "Email non valida! *");
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
