const axois = require('axios');
const init = async () => {
  const res = await axois.get('http://localhost:5000/api/ninjas');
  console.log('res', res.data);
};
init();
