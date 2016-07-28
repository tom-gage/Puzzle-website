var express = require('express');
    app = express();
    port = 3000;

app.use(express.static('public'));

app.listen(port, function () {
    console.log('express listening on port ' + port);
});
