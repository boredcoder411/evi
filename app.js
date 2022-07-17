const socket = io('https://eviserver.boredcoder411.repl.co');

socket.on("connect", () => {
  console.log(socket.id);
  const usrname = document.querySelector("#usrname")
  usrname.innerHTML = "Your player id for this session is: " + socket.id;
});

socket.on('message', text => {

    const el = document.createElement('li');
    el.innerHTML = text;
    document.querySelector('ul').appendChild(el)

});

document.querySelector('button').onclick = () => {
    const text = document.querySelector('input').value;
    document.querySelector('input').value = "";
    socket.emit('message', text)
}
