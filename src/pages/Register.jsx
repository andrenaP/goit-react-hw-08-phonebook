import ContactAnyInput from 'components/ContactAnyInput';
import { Button } from '@chakra-ui/react';

import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import { Notify } from 'notiflix';

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(originalPromiseResult => {
        Notify.success(`${originalPromiseResult.user.name} welcome!`);
      })
      .catch(() => {
        Notify.failure("Sorry, something's wrong");
      });

    form.reset();
  };

  return (
    <>
      <h2>Register page</h2>
      <form action="" className="MainForm" onSubmit={handleSubmit}>
        <ContactAnyInput
          LableText="name"
          type="name"
          name="name"
          title="name"
        />
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
        <Button type="submit">Register</Button>
      </form>
    </>
  );
};
export default Register;
