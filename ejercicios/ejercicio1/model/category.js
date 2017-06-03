const api = require("./api");
const mongo = require("../modules/mongo");

exports.getAll = () => api.fetchCategories();

// exports.getById = id => api.getCategoryById(id);
exports.getById = id => (filename, id) => {
    return fetch(filename).then(elements =>
        elements.find(element => element.id == id)
    );
};

exports.add = category => api.addCategory(category);

exports.add = category => {
    return mongo.collection('categories').then(col => {
        categories.id = uuid.v4();
    });
};

// exports.update = category => api.updateCategory(category);
exports.update = category => {
    return mongo.collection("categories").then(col => {
        return col.findOneAndUpdate({id: category.id }, category);
    })
}

exports.remove = id => api.removeCategory(id);
