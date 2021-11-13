const MusicasService = require('./../services/musicas.service');

const musicasService = new MusicasService;

exports.getAll = async (req,res) => {
    const musicas = await musicasService.findAll();
    res.send(musicas);
}

exports.getbyid = async (req,res) => {
    const musica = await musicasService.findById(req.params.id);
    res.send(musica);
}