/**
 * axios setup to use mock service
 */

import axios from 'axios';
import { toast } from 'react-toastify';

const LOCAL_API_URL = 'http://127.0.0.1:8000/'
const HOSTED_API_URL = 'http://api.csw.org.zw/api/v1/'
const CURRENT_API_URL = LOCAL_API_URL
const axiosServices = axios.create({
  baseURL: CURRENT_API_URL
});

// interceptor for http
axiosServices.interceptors.response.use(function(response){
  return response
}, function (error) {
  if (error?.message == 'Network Error')
  {
      toast.error('Network error')
      return
  }
  if (error?.response?.status === 401)
  {
      toast.error('Session expired')
      window.location = '/login'
      return
  }

  return Promise.reject(error)
});
export {CURRENT_API_URL}
export default axiosServices;
