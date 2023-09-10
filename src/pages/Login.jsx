import ContactAnyInput from 'components/ContactAnyInput';
import { Button } from '@chakra-ui/react';
import { logIn } from 'redux/auth/operations';
import { Notify } from 'notiflix';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(originalPromiseResult => {
        Notify.success(`${originalPromiseResult.user.name} welcome back!`);
      })
      .catch(Error => {
        Notify.failure('Incorrect login or password');
        console.log(Error);
      });

    form.reset();
  };

  return (
    <>
      <h2>Login page</h2>
      <form action="" className="MainForm" onSubmit={handleSubmit}>
        <ContactAnyInput
          LableText="email"
          type="email"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          title="email"
        />
        <ContactAnyInput
          LableText="password"
          type="password"
          name="password"
          title="password"
        />
        <Button type="submit">Login</Button>
      </form>
    </>
  );
};
export default Login;
