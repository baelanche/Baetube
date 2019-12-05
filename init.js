import app from "./app";

const PORT = 4000;

const handleListening = () => console.log(`Listening port ${PORT}`);

app.listen(PORT, handleListening);