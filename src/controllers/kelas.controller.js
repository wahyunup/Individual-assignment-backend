
const { kelas: kelasModel, modepembelajaran:pembModel } = require('../models')

const index = async (_req, res, _next) => {
    const kelas = await kelasModel.findAll({
        attributes: ['kelasid', 'name'],
        include: [
            {
                model: pembModel,
                through: { attributes: []},
                attributes: ["modepembelajaranid", "name"]
            }
        ]
    })

        return res.status(200).send({
            message: "Kelas successful",
            data: {
                kelas
            }
        })

    
}

module.exports = {index}