
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function (table) {      // Cria uma nova tabela com o nome 'ongs'
        table.string('id').primary();                        // Cria uma coluna com o nome ''id' onde os valores são 'strings' e esse é o campo primário
        table.string('name').notNullable();                  // '.notNullable' informa que o valor não pode ser vazio
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();                  // O parametro '2' os valores devem ter apenas 2 caracteres. 
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('ongs');                             // Deleta a tabela
};
