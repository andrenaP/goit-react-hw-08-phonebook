import ContactAnyInput from 'components/ContactAnyInput';
import { useState } from 'react';

const Login = () => {
  const [login, setlogin] = useState('');
  const [password, setpassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    reset();
    console.log({ login: login, password: password });
  };
  const handleChange = (event, SetFunction) => {
    SetFunction(event.target.value);
  };
  const reset = () => {
    setlogin('');
    setpassword('');
  };

  return (
    <>
      <h2>Login page</h2>
      <form action="" className="MainForm" onSubmit={handleSubmit}>
        <ContactAnyInput
          LableText="login"
          type="text"
          name="login"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          title="login"
          handleChange={event => handleChange(event, setlogin)}
        />
        <ContactAnyInput
          LableText="password"
          type="password"
          name="password"
          //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="password"
          handleChange={event => handleChange(event, setpassword)}
        />
        <button type="submit">Add contact</button>
      </form>
    </>
  );
};
export default Login;
