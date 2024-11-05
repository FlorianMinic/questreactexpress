import express from "express";
import cors from "cors";

const app = express();
const port = 3310;


app.use(cors({ origin: ["http://localhost:3010"] }));


const sampleEmployee = {
    name: {
        first: "Charlie",
        last: "Thompson",
    },
    email: "charlie.thompson@example.com",
    picture: {
        medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
    },
};


app.get("/api/employees", (req, res) => {
    res.json({ results: [sampleEmployee] });
});


app.listen(port, "0.0.0.0", () => {
    console.log(`Example app listening on port ${port}`);
});
