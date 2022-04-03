"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameServer = void 0;
const socket_io_1 = require("socket.io");
class GameServer {
    constructor() {
        this.io = new socket_io_1.Server();
        this.rooms = [];
    }
    newRoom() {
        let roomId = "";
        for (let i = 0; i < 6; i++) {
            roomId = roomId.concat(String.fromCharCode(65 + Math.floor(Math.random() * 26)));
        }
        this.rooms.push(roomId);
        return roomId;
    }
    isValidRoom(id) {
        return this.rooms.includes(id);
    }
}
exports.GameServer = GameServer;
let testServer = new GameServer();
console.log(testServer.newRoom());
//# sourceMappingURL=GameServer.js.map