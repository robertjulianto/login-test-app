import axios from "axios";
import { useState, FormEvent } from "react";
import Button from "../components/button";
import FormInput from "../components/form-input";
import Title from "../components/title";
import ErrorPanel from "../components/error-panel";

type LoginFormProps = {
    successAction: () => void
}

const LoginForm = (props: LoginFormProps) => {

    const [errorText, setErrorText] = useState('');
    
    const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const target = e.target as typeof e.target & {
        username: { value: string};
        password: { value: string};
      };
  
      const username = target.username.value;
      const password = target.password.value;
  
      if (username == '' || password == '') {
        setErrorText('Input is empty');
      }
  
      else {
        const data =  {
          username: username, 
          password: password
        }
  
        axios.post(`${import.meta.env.VITE_SERVICE_URI}/login`, data, {
          headers: {
            "Content-Type": "application/json"
          },
        }).then(res => {
          if (!res.data["is_success"]) 
            setErrorText(res.data.message);
          else
            props.successAction();
        }).catch(err => {
          setErrorText(err.message);
        })
      }
      
    };

    return (
        <>
            <form method="post" onSubmit={onSubmitForm} className='border rounded-2xl p-4 w-1/4'> 
                <Title text="Welcome to my Login" />
                <ErrorPanel errorMessage={errorText} />
                <FormInput textLabel='Username' name='username'  />
                <FormInput  textLabel='Password' name='password' type='password' />
                <Button text='Submit' type='submit' />
            </form>
        </>
    );
};

export default LoginForm;