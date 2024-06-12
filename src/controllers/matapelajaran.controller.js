const { kelas:kelasModel, modepembelajaran:modpemModel, matapelajaran:matpelModel } = require('../models')

const index = async (req, res, _next) => {
    let que = req.query

    if (Object.keys(que).length > 0) {
        if ( que.idkelas != null && que.idmodepembelajaran != null) {

            const result = await matpelModel.findAll({
                include: [
                        {
                            model: kelasModel,
                            where: {kelasid: que.idkelas},
                            through: { attributes: []},
                            attributes: ['kelasid', 'name'],
                        },
                        {
                            model: modpemModel,
                            where:{ modepembelajaranid: que.idmodepembelajaran},
                            through: { attributes: []},
                            attributes: ["modepembelajaranid", "name"]
                        }

                ],
                attributes: ['matapelajaranid', 'name'],
            })

            if (result.length == 0) {
                return res.status(400).send({
                    message: "Error query not found"
                })
            }
            return res.status(200).send({
                message: "Query Found",
                data: result
            })
        }
    }

    return res.status(400).send({
        message: "Error, No query given / Query not recognizeable"
    })
}

module.exports = {index}