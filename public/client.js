const socket=io.connect('http://localhost:5000', { transports: ['websocket'] });

const messageDiv=document.getElementById('message-div');
const container=document.getElementById('container');
const sendDiv=document.getElementById('send-div');