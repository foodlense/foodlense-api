exports = function() {
  const mongodb = context.services.get("mongodb-atlas");
  const mycollection = mongodb.db("food").collection("foods");

  return { data: mycollection.find().toArray() };
};