import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'
const getAll = () => axios.get(baseUrl)
const create = newEntry => axios.post(baseUrl, newEntry)
const remove = id => axios.delete(`${baseUrl}/${id}`)
const update = (id, newEntry) => axios.put(`${baseUrl}/${id}`, newEntry)

export default { getAll, create, remove, update }