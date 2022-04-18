const db = require('../../data/db-config');

const getAll = () => {
  // DO YOUR MAGIC
  return db('accounts');

}

const getById = id => {
  // DO YOUR MAGIC
  return db('accounts').where('id', id).first()
}

const create = async account =>  {
  // DO YOUR MAGIC
  let [id] = await db('accounts').insert(account)
  return getById(id);
}

const updateById = async (id, account) => {
  // DO YOUR MAGIC
  await db('accounts')
    .where('id', id)
    .update(account)
  return getById(id);
}

const deleteById = async (id) => {
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
