const mongoose = require('mongoose')
const Atendente = mongoose.model('Atendente')

exports.get = async () => {
    const result = await Atendente.find({})
    return result
}

exports.create = async (data) => {
    const atendente = Atendente(data)
    await atendente.save()
}

exports.update = async (id, data) => {
    await Atendente.findByIdAndUpdate(id, {
        $set: {
            idPessoa: data.idPessoa,
            idDepartamento: data.idDepartamento,
            idSetor: data.idSetor
        }
    })
}