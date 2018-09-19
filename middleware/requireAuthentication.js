const jwt = require("jsonwebtoken");

function auth(req, res, next) {
    const token = req.header("Authorization");
    if (!token) return res.status(401).send("missing token");
    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).send("Invalid token");
    }
}

module.exports = auth;