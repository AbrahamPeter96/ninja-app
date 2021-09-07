const axois = require('axios');
const initget = async () => {
  const res = await axois.get('http://localhost:5000/api/ninjas');
  console.log('res', res.data);
};
const initPost = async () => {
  try {
    const res = await axois.post('http://localhost:5000/api/ninjas', {
      name: 'Peter',
      rank: 'Black Belt',
      available: true,
    });
    console.log('res', res.data);
  } catch (e) {
    console.log(e.message);
  }
};
const initDel = async () => {
  try {
    const res = await axois.delete('http://localhost:5000/api/ninjas/1');
    console.log('res', res.data);
  } catch (e) {
    console.log(e.message);
  }
};
// initget();
// initPost();
initDel();
