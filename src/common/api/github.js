import axios from 'axios';

if (!process.env.REACT_APP_GITHUB_TOKEN) {
  console.error('Place your GitHub token in .env file');
}

export default axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
  },
});
