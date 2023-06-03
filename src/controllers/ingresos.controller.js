// import  Ingreso  from "../models/model.ingreso.js";

// export const getIngresos = async (req, res) => {
//     const data = await Ingreso.find()
//     try { res.json(data) }
//     catch (error) { res.json({ message: error }) }
// }

// export const getIngresoById = async (req, res) => {
//     const id = (req.params.id);
//     const data = await Ingreso.findById(id);
//     try { res.json(data) }
//     catch (error) { res.json({ message: error }) }
// }

// export const createIngreso = async (req, res) => {
//     const ingreso = new Ingreso(req.body);
//     const data = await ingreso.save()
//     try { res.statu(201).json(data) }
//     catch (error) { res.json({ message: error }) }
// }

// export const updateIngreso = async (req, res) => {
//     const id = (req.params.id);
//     const { fecha, concepto, valor, tipo } = req.body;
//     const data = await Ingreso.updateOne({ _id: id }, { $set: { fecha, concepto, tipo, valor } })
//     try { res.json(data) }
//     catch (error) { res.json({ message: error }) }
// }

// export const deleteIngreso = async (req, res) => {
//     const id = req.params.id;
//     const data = await Ingreso.deleteOne({ _id: id })
//     try { res.json(data) }
//     catch (error) { res.json({ message: error }) }
// }

// export const getTotalIngresos = (req, res) => {

// const data = (Ingreso.aggregate([{ $group: { _id: "$tipo", ingresoTotal: { $sum: "$valor" } } } ]));
//   try {res.json(data)}
//   catch (error) {res.json({ message: error })}
// }