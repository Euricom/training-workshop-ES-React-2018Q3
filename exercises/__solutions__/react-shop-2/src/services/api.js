import axios from 'axios';

export default axios.create({
  baseURL: 'https://euri-test-api-xupvkdbwnb.now.sh/api',
  timeout: 5000,
});
