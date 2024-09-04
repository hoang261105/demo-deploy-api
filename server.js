const jsonServer = require("json-server");

// Tạo máy chủ
const server = jsonServer.create();

const router = jsonServer.router("db.json");

const middleWares = jsonServer.defaults();

server.use(middleWares);
server.use(router);

// Lang nghe cong cua ung dung
server.listen(3000, () => {
  console.log("https://localhost:3000");
});
