import { Server } from "socket.io";

interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
}

interface ClientToServerEvents {
  hello: () => void;
}

interface InterServerEvents {
  ping: () => void;
}

interface SocketData {
  name: string;
  age: number;
}

class GameServer {
  io: Server
  rooms: Array<String>

  constructor() {
    this.io = new Server();
    this.rooms = [];
  }

  newRoom(): string {
    let roomId = "";
    for (let i = 0; i < 6; i++) {
      roomId = roomId.concat(String.fromCharCode(65 + Math.floor(Math.random() * 26)));
    }
    this.rooms.push(roomId);
    return roomId;
  }

  isValidRoom(id: string): boolean {
    return this.rooms.includes(id);
  }
}

export { GameServer };