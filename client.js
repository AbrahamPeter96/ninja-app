const axois = require('axios');
const init = async () => {
  const res = await axois.get('http://localhost:5000/api');
  console.log('res', res.data);
};
init();
