const db = require('../../data/db-config');

const getAll = () => {
  // DO YOUR MAGIC
  return db('accounts');

}

const getById = id => {
  // DO YOUR MAGIC
  return db('accounts').where('id', id).first()
}

async function create(account) {
  // DO YOUR MAGIC
  let [id] = await db('accounts').insert(account)
  return getById(id);
}

async function updateById(id, account) {
  // DO YOUR MAGIC
  await db('accounts')
    .where('id', id)
    .update(account)
  return getById(id);
}

async function deleteById (id) {
  // DO YOUR MAGIC
  let result = await getById(id)
  await db('accounts')
    .where('id', id)
    .del()
  return result;
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
