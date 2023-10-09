class Room {
  constructor(id, title, namespaceId, isPrivate = false) {
    this.id = id;
    this.title = title;
    this.namespaceId = namespaceId;
    this.isPrivate = isPrivate;
    this.history = [];
  }

  addMessage(message) {
    this.history.push(message);
  }

  clearHistory() {
    this.histroy = [];
  }
}

module.exports = Room;
