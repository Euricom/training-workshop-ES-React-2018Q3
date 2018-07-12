import axios from 'axios';

export default axios.create({
  baseURL: 'https://euri-test-api-xupvkdbwnb.now.sh/api',
  // baseURL: 'http://localhost:3000/api',
  timeout: 5000,
});
