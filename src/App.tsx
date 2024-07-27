import { useState } from "react";
import LoginForm from "./common/fragments/login-form";
import SuccessFragment from "./common/fragments/qoutes-fragment";


const App = () =>{
  
  const [isLogged, setIsLogged] = useState(false);

  const successAction = () => {
    setIsLogged(true)
  }

  const onClickBack = () => {
    console.log("Clicked");
    setIsLogged(false);
  }

  return (
      <main className='flex flex-col min-h-screen justify-center items-center'>
        { !isLogged && <LoginForm successAction={successAction} />}
        { isLogged && <SuccessFragment onClickBack={onClickBack} />}
      </main>
  );
};

export default App;
