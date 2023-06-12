const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const unsureAdmin = async (req, res, next) => {
    //Recebe o token inserido pela aplicação
    const authToken = req.headers.authorization;

    //Valida se o token está preenchido
    if (!authToken) {
        res.status(401).json({
            message: "UNAUTHORIZED",
            code: 401
        })
        return
    }

    //Desestrutura o header "Bearer 'token'"
    [, token] = authToken.split(" ")

    //Valida se o token é válido
    try {
        //Verifica o Token
        const { id } = jwt.verify(token, process.env.TOKEN_USER_AUTH)

        try {
            const user = await prisma.user.findUnique({
                where: {
                    id: id
                }
            })

            console.log(user)

            if (user.isAdmin) {
                req.id = id
                return next();
            } else {
                res.status(401).json({
                    message: "UNAUTHORIZED",
                    code: 401
                })
                return
            }
        } catch (err) {
            res.status(401).json({
                message: "UNAUTHORIZED",
                code: 401
            })
            return
        }

        //Recupera infos do usuário
        
    } catch(err) {
        //Retorna o erro caso o token não seja válido
        res.status(401).json({
            message: "UNAUTHORIZED",
            code: 401
        })
        return
    }
}


//Exporta como um MIDDLEWARE
module.exports = {
    unsureAdmin
}