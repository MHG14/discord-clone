const joinNs = (el, nsData) => {
  const clickedNamespace = nsData.find(
    (ns) => ns.endpoint === el.getAttribute("ns")
  );
  const rooms = clickedNamespace.rooms;
  let roomList = document.querySelector(".room-list");
  roomList.innerHTML = "";
  rooms.forEach((room) => {
    roomList.innerHTML += `<li><span class="glyphicon glyphicon-lock"></span>${room.title}</li>`;
  });
};
