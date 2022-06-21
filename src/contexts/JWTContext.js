import PropTypes from 'prop-types';
import { createContext, useEffect, useState, useReducer } from 'react';

// third-party
import { Chance } from 'chance';
import jwtDecode from 'jwt-decode';
import jwt from 'jsonwebtoken';
import { JWT_API } from 'config';
import jwt_decode from 'jwt-decode'
// reducer - state management
import { LOGIN, LOGOUT } from 'store/actions';
import accountReducer from 'store/accountReducer';

// project imports
import Loader from 'components/ui-component/Loader';
import axios from 'utils/axios';

// constant
const JWT_SECRET = JWT_API.secret;
const JWT_EXPIRES_TIME = JWT_API.timeout;

const chance = new Chance();
let users = [
  {
    id: '5e86809283e28b96d2d38537',
    email: 'info@codedthemes.com',
    password: '123456',
    name: 'JWT User'
  }
];
// constant
const initialState = {
  isLoggedIn: false,
  isInitialized: false,
  user: null
};

const verifyToken = (serviceToken) => {
  if (!serviceToken) {
    return false;
  }
  const decoded = jwtDecode(serviceToken);

  return decoded.exp > Date.now() / 1000;
};

const setSession = (serviceToken) => {
  if (serviceToken) {
    localStorage.setItem('serviceToken', serviceToken);
    axios.defaults.headers.common.Authorization = `Bearer ${serviceToken}`;
  } else {
    localStorage.removeItem('serviceToken');
    delete axios.defaults.headers.common.Authorization;
  }
};

// ==============================|| JWT CONTEXT & PROVIDER ||============================== //
const JWTContext = createContext(null);

export const JWTProvider = ({ children }) => {
  const [state, dispatch] = useReducer(accountReducer, initialState);
	const [isLoading, setIsLoading] = useState(false)
	const [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : undefined) 
	const [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
	const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem('loggedStatus') ? localStorage.getItem('loggedStatus') : false )
	const [pageLoading, setPageLoading] = useState(true)
	const [currentBook, setCurrentBook] = useState('')
	// const [url, setUrl] = useState('https://uniquebackend.malingreatssmartsystems.co.zw')
	const [url, setUrl] = useState('http://localhost:8000')
  useEffect(() => {
    const init = async () => {
      try {
        const serviceToken = window.localStorage.getItem('serviceToken');
        if (serviceToken && verifyToken(serviceToken)) {
          setSession(serviceToken);
          if (window.localStorage.getItem('users') !== undefined && window.localStorage.getItem('users') !== null) {
            const localUsers = window.localStorage.getItem('users');
            users = JSON.parse(localUsers);
          }

          const jwData = jwt.verify(serviceToken, JWT_SECRET);
          const { userId } = jwData;
          const user = users.find((_user) => _user.id === userId);

          if (!user) {
            return;
          }

          dispatch({
            type: LOGIN,
            payload: {
              isLoggedIn: true,
              user: {
                email: user.email,
                id: user.id,
                name: user.name
              }
            }
          });
        } else {
          dispatch({
            type: LOGOUT
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: LOGOUT
        });
      }
    };

    init();
  }, []);

  // const login = async (email, password) => {
  //   if (window.localStorage.getItem('users') !== undefined && window.localStorage.getItem('users') !== null) {
  //     const localUsers = window.localStorage.getItem('users');
  //     users = JSON.parse(localUsers);

  //   }
  //   const userFound = users.find((_user) => _user.email === email);
  //   if (!userFound || userFound.password !== password) {
  //     return;
  //   }
  //   const serviceToken = jwt.sign({ userId: userFound.id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_TIME });
  //   const user = {
  //     id: userFound.id,
  //     email: userFound.email,
  //     name: userFound.name
  //   };

  //   setSession(serviceToken);
  //   console.log('users')
  //   console.log(serviceToken)
  //   dispatch({
  //     type: LOGIN,
  //     payload: {
  //       isLoggedIn: true,
  //       user
  //     }
  //   });
  // };

      const login = async (email, password) => {
            const response = await axios.post('/auth/login/', {
              email,
              password,

            });
                console.log(response)
                const data = await response.data
				if (response.status === 200) {
					setAuthTokens(data)
					setUser(jwt_decode(data.access_token))
					setIsLoggedIn(true)
					localStorage.setItem('authTokens', JSON.stringify(data))
					localStorage.setItem('loggedStatus', true)
					console.log('Real User', data.user)
					console.log('Decoded Data', jwt_decode(data.access_token))
					dispatch({
						type: LOGIN,
						payload: {
							isLoggedIn: true,
							user : data.user
						}
					});
				}
            };

  const register = async (email, password, firstName, lastName) => {
    // todo: this flow need to be recode as it not verified
    const id = chance.bb_pin();
    const response = await axios.post('/api/account/register', {
      id,
      email,
      password,
      firstName,
      lastName
    });
    let users = response.data;

    if (window.localStorage.getItem('users') !== undefined && window.localStorage.getItem('users') !== null) {
      const localUsers = window.localStorage.getItem('users');
      users = [
        ...JSON.parse(localUsers),
        {
          id,
          email,
          password,
          name: `${firstName} ${lastName}`
        }
      ];
    }

    window.localStorage.setItem('users', JSON.stringify(users));
  };

  const logout = () => {
    setSession(null);
    dispatch({ type: LOGOUT });
  };
  const updatePersonalDetails =() => {}
   
  const resetPassword = (email) => console.log(email);

  const updateProfile = () => {};

  if (state.isInitialized !== undefined && !state.isInitialized) {
    return <Loader />;
  }

  return <JWTContext.Provider value={{ ...state, updatePersonalDetails, login, logout, register, resetPassword, updateProfile }}>{children}</JWTContext.Provider>;
};

JWTProvider.propTypes = {
  children: PropTypes.node
};

export default JWTContext;
