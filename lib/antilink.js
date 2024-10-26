/*
   Created By ArxzyDev
   My Contact wa.me/6289513081052
   Rxzy-MD V1.0.0
*/

const fs = require('fs')

const addantilinkUser = (userId, name, _dir) => {
    const obj = { id: userId, name: name}
    _dir.push(obj)
    fs.writeFileSync('./src/data/user/antilink-user.json', JSON.stringify(_dir, null, 2))
}
const checkantilinkUser = (userId, _dir) => {
    let status = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            status = true
        }
    })
    return status
}
const getantilinkTime = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].time
    }
}
const getantilinkId = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].id
    }
}
const getantilinkPosition = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    return position
}
module.exports = {
    addantilinkUser,
    checkantilinkUser,
    getantilinkTime,
    getantilinkId,
    getantilinkPosition
}