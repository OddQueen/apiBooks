const app = require('./app');

app.listen(app.get("port"), function() {
    console.log(`Servidor API escuchando en el puerto ` + app.get("port"));
});