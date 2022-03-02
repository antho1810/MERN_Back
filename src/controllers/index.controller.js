const PruebaCtrl = {}

PruebaCtrl.obtener = (req, res) =>{
    res.send('Funcionando desde Get')
}

PruebaCtrl.crear = async (req, res) =>{
    const {nombre, apellido, salario} = req.body
    const NuevoRegistro = new Empelado({
        nombre, 
        apellido,
        salario
    })
    await NuevoRegistro.save()
    res.json({
        mensaje:'Empleado guardado.'
    })
}

PruebaCtrl.actualizar = (req, res) =>{
    res.send('Funcionando desde Put')
}

PruebaCtrl.eliminar = (req,res) =>{
    res.send('Funcionando desde Delete')
}
module.exports = PruebaCtrl