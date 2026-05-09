import db from "../config/db.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async(req,res)=>{
    const {email , password} = req.body;
    try{
        const sql = "select * from Users WHERE email = ?"
        db.query(sql,[email], async(err, result)=>{
            if (err) {
                return res.status(500).json(err);
            }
            if(result.length > 0){
                res.status(400).json({
                     message: "Email already exists"
                });
            }
            const hashedPassword = await bcrypt.hash(password,10);
            const query2 = "insert into Users (email,password) VALUES (?,?)"
            db.query(query2,[email,hashedPassword],(err,result)=>{
                 if(err){
                        return res.status(500).json(err);
                    }

                    res.status(201).json({
                        message: "User Registered"
                    });
            })
        } )
    }
    catch(error){
        return res.status(500).json(error);
    }
}