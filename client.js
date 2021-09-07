const axois = require('axios');
const initget = async () => {
  const res = await axois.get('http://localhost:5000/api/ninjas');
  console.log('res', res.data);
};
const initPost = async () => {
  try {
    const res = await axois.post('http://localhost:5000/api/ninjas', {
      namei: 'Peter',
      rank: 'Black Belt',
      available: true,
    });
    console.log('res', res.data);
  } catch (e) {
    console.log(e.message);
  }
};
// initget();
initPost();
