module.exports = function(app, db) {
    app.post("/messages", (req, res) => {
        const message = { text: req.body.text, createdAt: new Date() };
        db.collection("messages").insert(message, (err, result) => {
            if (err) {
                res.send({ error: "An error has occurred" });
            } else {
                res.send(result.ops[0]);
            }
        });
    });

    app.get("/messages", (req, res) => {
        db.collection("messages")
            .find({})
            .toArray((err, result) => {
                if (err) {
                    res.send({ error: "An error has occurred" });
                } else {
                    res.send(result);
                }
            });
    });
};