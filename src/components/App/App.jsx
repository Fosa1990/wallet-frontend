import './App.css';
import Loader from '../Loader';

//-------DELETE IF DO NOT NEED--------------------------------
import { useState } from 'react';
import {
  useRegisterNewUserMutation,
  useLogOutUserMutation,
  useLogInUserMutation,
} from '../../redux/auth/authOperation';
import { useNavigate, NavLink } from 'react-router-dom';
import {
  useCreateContactMutation,
  useGetContactsQuery,
} from '../../redux/Example_DELET/contact-operation';
//--------------------------------------------

import React, { useEffect } from 'react';
import { Route, Routes, Navigate, Outlet } from 'react-router-dom';
import { useCurrentUserQuery } from '../../redux/auth/authOperation';
import { useSelector } from 'react-redux';
import { getIsLoggedIn, getUserName } from '../../redux/auth/authSelectors';

export default function App() {
  const { refetch } = useCurrentUserQuery();

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <main>
        <Loader />
        {/* так виглядає switch у 6 версії */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<PrivateOutlet />}>
            <Route path="" element={<Contacts />} />
          </Route>
          <Route path="/register" element={<PublicOutlet />}>
            <Route path="" element={<Register />} />
          </Route>
          <Route path="/login" element={<PublicOutlet />}>
            <Route path="" element={<Login />} />
          </Route>
          <Route path="*" elements={<Navigate to="/" />} />
        </Routes>
      </main>
    </>
  );
}
//функції приватності реалізація у 6 версії
function PrivateOutlet() {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/login" />;
}
function PublicOutlet() {
  const auth = useAuth();
  return !auth ? <Outlet /> : <Navigate to="/contacts" />;
}
function useAuth() {
  const logget = useSelector(getIsLoggedIn);
  return logget;
}

//------------ALL FILE UNDER, MUST BE DELETE LATER-------------------------------------------------------------
// домашня сторінка
function Home() {
  return <h1>Phonebook</h1>;
}
//контакти
function Contacts() {
  return (
    <>
      <section>
        <Form />
        <div>
          <h2>My Contacts</h2>
          {/* <Filter /> */}
          <ContactList />
        </div>
      </section>
    </>
  );
}
//форма
function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [addContact] = useCreateContactMutation();
  const { data } = useGetContactsQuery();

  const handleSubmitt = e => {
    e.preventDefault();

    if (checkName(name)) {
      console.log(name, 'is already in contacts.');
      return;
    }
    addContact({ name, number });
    setName('');
    setNumber('');
  };

  const checkName = newName => {
    return data.find(
      ({ name }) => name.toLowerCase() === newName.toLowerCase(),
    );
  };

  return (
    <>
      <form onSubmit={handleSubmitt}>
        <label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={({ currentTarget: { value } }) => setName(value)}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Name"
          />
        </label>
        <label>
          <input
            type="tel"
            name="number"
            value={number}
            onChange={({ currentTarget: { value } }) => setNumber(value)}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Phone"
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    </>
  );
}
//Список контактів
function ContactList() {
  const { data, refetch } = useGetContactsQuery();
  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <>
      {data && (
        <ul>
          {data.map(({ id, name, number }) => (
            <li key={id}>
              <div>
                <span>{name}</span>
                <span>{number}</span>
                <button
                  id={id}
                  type="button"
                  onClick={() => {
                    console.log('удалил');
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
//логін
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [logIn] = useLogInUserMutation();

  const handleSubmitt = async e => {
    e.preventDefault();
    try {
      await logIn({ email, password }).unwrap();
      setEmail('');
      setPassword('');
      console.log('Welcome!', 'Login Successful');
      navigate('/contacts', { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmitt}>
        <label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={({ currentTarget: { value } }) => setEmail(value)}
            title="Email"
            required
            placeholder="Email"
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={({ currentTarget: { value } }) => setPassword(value)}
            title="password"
            required
            placeholder="Password"
            autoComplete="false"
          />
        </label>

        <button type="submit">Sign in</button>
      </form>
    </>
  );
}
//форма регістрації
function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [redistrationNewUser] = useRegisterNewUserMutation();

  const handleSubmitt = async e => {
    e.preventDefault();
    try {
      await redistrationNewUser({ name, email, password }).unwrap();
      setName('');
      setEmail('');
      setPassword('');
      // NotificationSuccess('success!', ' registration success!');
      navigate('/contacts', { replace: true });
    } catch (error) {
      console.log('error', error);
      // NotificationError(error?.status, error?.data?._message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmitt} /* className={s.form} */>
        <label>
          <input
            /*  className={s.name} */
            type="text"
            name="name"
            value={name}
            onChange={({ currentTarget: { value } }) => setName(value)}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            placeholder="Name"
            required
          />
        </label>
        <label>
          <input
            /*  className={s.name} */
            type="email"
            name="email"
            value={email}
            onChange={({ currentTarget: { value } }) => setEmail(value)}
            placeholder="Email"
            required
          />
        </label>
        <label>
          <input
            /*  className={s.number} */
            type="password"
            name="password"
            value={password}
            onChange={({ currentTarget: { value } }) => setPassword(value)}
            placeholder="Password"
            autoComplete="false"
            required
          />
        </label>
        <button type="submit" /* className={s.button} */>Join</button>
      </form>
    </>
  );
}
//навігація
function NavigationBar() {
  const logget = useSelector(getIsLoggedIn);
  return (
    <nav>
      <div>
        {/* <NavLink to="/" className={({ isActive }) => s.link + ' ' + (isActive ? s.activeL : '')}> */}
        <NavLink to="/">HomePage</NavLink>

        {logget && (
          <NavLink
            to="/contacts"
            // className={({ isActive }) => s.link + ' ' + (isActive ? s.activeL : '')}
          >
            contacts
          </NavLink>
        )}
      </div>
      {!logget && <NavigationAuth />}
      {logget && <UserMenu />}
    </nav>
  );
}
//Навігація -авторизація
function NavigationAuth() {
  return (
    <div>
      <NavLink to="/register">register</NavLink>
      <NavLink to="/login">login</NavLink>
    </div>
  );
}
// юзер меню
function UserMenu() {
  const userName = useSelector(getUserName);
  const [out] = useLogOutUserMutation();
  const navigate = useNavigate();

  return (
    <>
      <div>
        <h2>{userName}</h2>
        <button
          type="button"
          onClick={() => {
            out();
            navigate('/login', { replace: true });
          }}
        >
          Log out
        </button>
      </div>
    </>
  );
}
