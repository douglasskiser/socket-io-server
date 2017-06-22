export default app => {
  app.get('/', (req, res) => res.status(200).send(`
    Hello
    <script src="/socket.io/socket.io.js"></script>
    <script>
      var socket = io();
    </script>
  `));
}