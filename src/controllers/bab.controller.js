const {bab:babModel, user:userModel, matapelajaran:matpelModel} = require("../models")
const jwt = require('jsonwebtoken')


const index = async (req, res, _next) => {
    let que = req.query
    let auth = req.headers.authorization
    console.log(auth)

    if (!auth || !auth.startsWith('Bearer ')) {
        if (Object.keys(que).length > 0) {
            if ( que.idmatapelajaran != null) {
                let result = await babModel.findAll({
                    include: [
                        {
                            model: matpelModel,
                            where: {matapelajaranid: que.idmatapelajaran},
                            through: { attributes: []},
                            attributes: ["matapelajaranid", "name"]
                        }
                    ],
                    attributes: ["babid", "name"]
                })

                if (result.length == 0) {
                    return res.status(400).send({
                        message: "Error, Query not found"
                    })
                }

                return res.status(200).send({
                    message: "Query Found",
                    data: result
                })
            } else {
                return res.status(400).send({
                    message: "Error, No query given / Query not recognizeable"
                })
            }
        } else {
            return res.status(400).send({
                message: "Error, No query given / Query not recognizeable"
            })
        }
    }

    const token = auth.split(' ')[1]
    jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
        if (err) {
            return res.status(401).send({ message: err });
          } else {
            if (Object.keys(que).length > 0) {
                if ( que.idmatapelajaran != null) {
                    let result = await babModel.findAll({
                        include: [
                            {
                                model: matpelModel,
                                where: {matapelajaranid: que.idmatapelajaran},
                                through: { attributes: []},
                                attributes: ["matapelajaranid", "name"]
                            },
                            {
                                model: userModel,
                                where: {userid: user.id},
                                through: { attributes: ["progress"]},
                                attributes: ["userid", "name", "email"]
                            }
                        ],
                        attributes: ["babid", "name"]
                    })

                    if (result.length == 0) {
                        return res.status(400).send({
                            message: "Error, Query not found"
                        })
                    }

                    return res.status(200).send({
                        message: "Query Found",
                        data: result
                    })
                } else {
                    return res.status(400).send({
                        message: "Error, No query given / Query not recognizeable"
                    })
                }
            } else {
                return res.status(400).send({
                    message: "Error, No query given / Query not recognizeable"
                })
            }
        }
    })



}

module.exports = {index}