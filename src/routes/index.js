export default app => {
  app.get('/', (req, res) => res.status(200).send(`
    <h1>the-socket-project</h1>
    <div>
      Status: <span style="color: #a5fc15;">UP</span>
    </div>
  `));
}