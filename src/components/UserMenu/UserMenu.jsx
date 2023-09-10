import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import './UserMenu.css';
import { Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Notify } from 'notiflix';
import { useNavigate } from 'react-router-dom';
const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const IsLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  const handleExit = () => {
    dispatch(logOut())
      .unwrap()
      .then(() => {
        Notify.success(`Successfully log out`);
        navigate('/login');
        return;
      })
      .catch(Error => {
        Notify.failure("Sorry, something's wrong");
        console.log(Error);
      });
  };
  return (
    <>
      {' '}
      {IsLoggedIn && (
        <div className="UserMenu">
          <p>You enter as {user.name}</p>{' '}
          <Button onClick={handleExit}>Exit</Button>
        </div>
      )}
    </>
  );
};

export default UserMenu;
