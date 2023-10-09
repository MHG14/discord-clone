// const username = prompt("what is yout username?");
// const password = prompt("what is your password");

const username = "MHG14";
const password = "1234";

const socket = io("http://localhost:8000");

socket.on("connect", () => {
  console.log("connected");
  socket.emit("clientConnect");
});

socket.on("welcome", (data) => {
  console.log(data);
});

socket.on("nsList", (nsData) => {
  console.log(nsData);
  const namespacesDiv = document.querySelector(".namespaces");
  nsData.forEach((namespace) => {
    namespacesDiv.innerHTML += `<div class="namespace" ns="${namespace.endpoint}"><img src="${namespace.image}"></div>`;
  });
  Array.from(document.getElementsByClassName("namespace")).forEach((el) => {
    el.addEventListener("click", () => {
      const clickedNamespace = nsData.find(
        (ns) => ns.endpoint === el.getAttribute("ns")
      );
      const rooms = clickedNamespace.rooms;
      let roomList = document.querySelector(".room-list");
      roomList.innerHTML = "";
      rooms.forEach((room) => {
        roomList.innerHTML += `<li><span class="glyphicon glyphicon-lock"></span>${room.title}</li>`;
      });
    });
  });
});
