const CommentRepository = require('../repository/commentRepository')

module.exports = class CommentService {
    //TODO: Criar metodos necessarios para listar os comentrios
    static async listById(idComment) {
        return await CommentRepository.listById(idComment)
    }

    //Método para criar comentário no post
    static async create(comment) {
        return await CommentRepository.create(comment)
    }
}