
const app = require('express')();
const PORT = 8080;

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)

app.get('/rain' , async (req, res) => {
    const responses = await ('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&format=flatbuffers');
    res.status(200).send({
        timezone: responses[0]
    })
})