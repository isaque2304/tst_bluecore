const database = require('../config/database')

module.exports = class CommentRepository {
    //TODO: Criar aqui o metodo que busca os comentarios no banco de dados

    static async listById(idPost) {
        const result = await database
            .select(
                'Id',
                'PostId',
                'UserName',
                'Comment',
                'CreatedAt',
                'UpdatedAt'
            )
            .where({ 'PostId': idPost })
            .from('Comments')

        return result
    }

    //Método responsável por cadastrar Comentário no post
    static async create(comment) {
        const result = await database
            .insert(comment)
            .into('Comments')

        return result
    }
}