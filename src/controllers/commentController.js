const CommentService = require('../service/commentService')

module.exports = class CommentController {
    //TODO: Criar metodo que retorna a lista de comentarios no banco de dados

    static listById(request, response, next) {
        CommentService.listById(request.params.id)
            .then((unities) => response.status(200).send(unities))
            .catch(next)
    }

    static create(request, response, next) {

        console.log(request.body)
        CommentService.create(request.body)
            .then((unities) => response.status(200).send(unities))
            .catch(next)
    }
}