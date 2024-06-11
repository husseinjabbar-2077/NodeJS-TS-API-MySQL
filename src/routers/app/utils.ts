import express from "express";
const router = express.Router();
import db from "../../db";
import { validateApiKey } from "../../config";

// accounts example
router.get("/accounts", validateApiKey, (_req, res) => {
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });

    const query = `SELECT title , _id FROM accounts `;
    db.query(query, (err, results) => {
        if (err) {
            throw err;
        }
        res.end(JSON.stringify(results));
    });
});

export default router;