const app = require('./app');

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log('API listening on PORT', PORT));

module.exports = app;
