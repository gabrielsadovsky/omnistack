const connection = require("../database/connection");

module.exports = {
  async create(request, response) {
    const { id } = request.body; // buscando id atraves do corpo
    const ong = await connection("ongs").where("id", id).select("name").first(); // como so existe um ong com um unico id

    if (!ong) {
      return response.status(400).json({ error: "No ONG found with this ID" });
    }

    return response.json(ong);
  },
};
