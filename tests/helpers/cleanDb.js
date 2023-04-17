const mongoose = require("mongoose");
module.exports = async() => {
  const models = mongoose.modelNames();
  const promisesToDeleteAll = models.map(modelName => {
    const Model = mongoose.model(modelName);
    return Model.deleteMany({});
  });
  const a = await Promise.allSettled(promisesToDeleteAll);
}
