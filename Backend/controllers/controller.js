import db from "../config/db.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    const { email, password } = req.body;
    try {
        const sql = "select * from Users WHERE email = ?"
        db.query(sql, [email], async (err, result) => {
            if (err) {
                return res.status(500).json(err);
            }
            if (result.length > 0) {
                res.status(400).json({
                    message: "Email already exists"
                });
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const query2 = "insert into Users (email,password) VALUES (?,?)"
            db.query(query2, [email, hashedPassword], (err, result) => {
                if (err) {
                    return res.status(500).json(err);
                }

                res.status(201).json({
                    message: "User Registered"
                });
            })
        })
    }
    catch (error) {
        return res.status(500).json(error);
    }
}

export const login = (req, res) => {

    const { email, password } = req.body;

    const query = "SELECT * FROM Users WHERE email = ?";

    db.query(query, [email], async (err, result) => {

        if (err) {
            return res.status(400).json({
                message: "user not found"
            })
        }
        if (result.length === 0) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const user = result[0];

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid Password"
            });
        }

        const token = jwt.sign(
            { id: user.id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.status(200).json({
            message: "Login Success",
            token
        });

    });

};

export const addTodo = (req, res) => {

    const {title} = req.body;

    const userId = req.user.id;

    const query = `
        INSERT INTO todos(title, user_id)
        VALUES(?,?)
    `;
    db.query(query, [title, userId], (err, result) => {

        if(err){
            return res.status(500).json(err);
        }

        res.status(201).json({
            message: "Todo Added"
        });

    });
};