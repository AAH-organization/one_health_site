// create_product_table.js

exports.up = function (knex) {
  return knex.schema.createTable("products", function (table) {
    table.increments("id").primary();
    table.string("name");
    table.text("description");
    table.integer("quantity");
    table.string("status");
    table.string("imageLink");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("products");
};