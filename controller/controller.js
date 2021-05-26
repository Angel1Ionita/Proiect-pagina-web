var express = require("express");
var router = express.Router();
const service = require("../service/service");

router.get("/table", (req, res) => {                          //GET table
    const list = service.getAllElements("table");
    if (list != undefined && list.length != 0)
        res.status(200).send(list);
    else
        res.status(404).send("Nu s-au gasit table !");

});
router.get("/piese", (req, res) => {                          //GET piese
    const list = service.getAllElements("piese");
    if (list != undefined && list.length != 0)
        res.status(200).send(list);
    else
        res.status(404).send("Nu s-au gasit piese !");

});
router.get("/ceasuri", (req, res) => {                        //GET ceasuri
    const list = service.getAllElements("ceasuri");
    if (list != undefined && list.length != 0)
        res.status(200).send(list);
    else
        res.status(404).send("Nu s-au gasit ceasuri !");

});
router.get("/comanda", (req, res) => {                        //GET comanda
    const list = service.getAllElements("comanda");
    if (list != undefined && list.length != 0)
        res.status(200).send(list);
    else
        res.status(404).send("Cosul este gol !");

});
router.post("/comanda", (req, res) => {                       //POST comanda
    let newElement = service.addElement(req.body);
    if (newElement != null && newElement != undefined)
        res.status(200).send(newElement);
    else
        res.status(500).send("Produsul se afla deja in cos !");
});
router.put("/comanda/:id", (req, res) => {                    //PUT comanda/id
    let id = req.params.id;
    let element = service.updateElement(id, req.body);

    if (element != null && element != undefined)
        res.status(200).send(element);
    else
        res.status(404).send("Produsul nu poate fi actualizat deoarece nu exista in cos !");

});
router.delete("/comanda/:id", (req, res) => {                 //DELETE comanda/id
    let id = req.params.id;
    let flag = service.deleteElement(id);
    if (flag === true)
        res.status(200).send("Produsul a fost sters din cos !");
    else
        res.status(404).send("Produsul nu exista in cos !");

});
module.exports = router;