const repository = require("../repository/repository");

module.exports.getAllElements = (tag) => {                           ///Read
    let list = repository.readJSONFile(tag);
    return list;
}
module.exports.addElement = (newElement) => {
    const list = repository.readJSONFile("comanda");                 ///Create
    var ok = 1;
    for (let i = 0; i < list.length; i++)
        if (list[i].id === newElement.id)
            return null;
    list.push(newElement);
    repository.writeJSONFile(list);
    return newElement;
}
module.exports.updateElement = (id, newElement) => {
    const list = repository.readJSONFile("comanda");                 ///Update
    for (let i = 0; i < list.length; i++) {
        if (list[i].id == id) {
            if (newElement.cantitate)
                list[i].cantitate = newElement.cantitate;
            repository.writeJSONFile(list);
            return list[i];
        }
    }
    return null;
}
module.exports.deleteElement = (id) => {
    const list = repository.readJSONFile("comanda");               ///Delete
    for (let i = 0; i < list.length; i++) {
        if (list[i].id == id) {
            list.splice(i, 1);
            repository.writeJSONFile(list);
            return true;
        }
    }
    return false;
}