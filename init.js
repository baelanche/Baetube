import dotenv from "dotenv";
import "./db";
import app from "./app";

dotenv.config();

import "./models/Video";
import "./models/Comment";
import "./models/User";

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 4000;

const handleListening = () => console.log(`Listening port ${PORT}`);

app.listen(PORT, handleListening);
