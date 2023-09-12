const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send({
        "Author": "Harryguci",
        "Created": "2023-09-12",
        "Time" : "01:29am",
        "finished": "",
    });
})

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));