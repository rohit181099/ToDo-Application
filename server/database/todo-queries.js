const knex = require("./connection.js");

async function all() {
    return knex('todos');
}

async function get(id) {
    const results = await knex('todos').where({ id });
    return results[0];
}

async function searchbyTitle(keyword) {
    const results = await knex('todos').where({ title: keyword});
    return results;
}

async function searchbyDate(keyword) {
    const results = await knex('todos').where({ date: keyword});
    return results;
}

async function searchbyPriority(keyword) {
    const results = await knex('todos').where({ priority: keyword});
    return results;
}

async function searchbyStatus(keyword) {
    const results = await knex('todos').where({ completed: keyword});
    return results;
}


async function create(title, order) {
    const results = await knex('todos').insert({ title }).returning('*');
    return results[0];
}

async function update(id, properties) {
    const results = await knex('todos').where({ id }).update({ ...properties }).returning('*');
    return results[0];
}

// delete is a reserved keyword
async function del(id) {
    const results = await knex('todos').where({ id }).del().returning('*');
    return results[0];
}

async function clear() {
    return knex('todos').del().returning('*');
}

module.exports = {
    all,
    get,
    create,
    searchbyTitle,
    searchbyDate,
    searchbyPriority,
    searchbyStatus,
    update,
    delete: del,
    clear
}