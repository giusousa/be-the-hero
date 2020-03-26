
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {     
        table.increments();                                    // Cria um valor incremental

        table.string('title').notNullable();                  
        table.string('description').notNullable();
        table.decimal('value').notNullable();                   // Indica que os valores devem ser do tipo decimais

        table.string('ong_id').notNullable();

        table.foreign('ong_id').references('id').inTable('ongs');  // Indica que o campo 'ong_id' é uma referencia ao campo 'id' da tabela 'ongs'

    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');                   // Deleta a tabela
};