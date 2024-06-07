import { toast, Bounce } from "react-toastify";

function checkWordInMessage(message) {
  return message.length >= 100 ? false : true;
}
function checkEmail(email = "taufikisla172@gmail.com") {
  const regexPatten =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  let isEmailValidate = regexPatten.test(email.toLocaleLowerCase());
  return isEmailValidate;
}

function SucessMessage(
  Message = "SomeThing is Wrong",
  positon = "top-right",
  delay = 4000,
) {
  toast.success(Message, {
    position: positon,
    autoClose: delay,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
}

function ErrorMessage(
  errorMessage = "SomeThing is Wrong",
  positon = "top-right",
  delay = 4000,
) {
  toast.error(errorMessage, {
    position: positon,
    autoClose: delay,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
}

export { checkEmail, SucessMessage, ErrorMessage, checkWordInMessage };
