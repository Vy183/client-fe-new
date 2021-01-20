
import avatar1 from '../img/ava1.jpg';
import avatar2 from '../img/ava2.jpg';

const random_id = Math.floor(Math.random() * 10); 

const datatComment = [
  {
    id: random_id, 
    avartar: avatar1,
    name: 'VyyPii',
    content: 'Cho em hỏi muốn xem tài khoản mình có bao nhiêu điểm thì xem ở đâu vậy add?',
    date: Date().toLocaleString(),
  },
  {
    id: random_id,
    avartar: avatar2,
    name: 'Doraemon',
    content: 'Bao nhiêu điểm thì xem ở đâu vậy add? ',
    date: Date().toLocaleString(),
  },
]

export default datatComment;