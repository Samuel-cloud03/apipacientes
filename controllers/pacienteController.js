    //importando el modelo del paciente
    const Paciente = require('../models/paciente');

    // controlador para crear nuevo paciente
    // exportar controlador con funciones
    exports.getPacientes = async (req, res) => {
        try{
            const pacientes = await Paciente.find();
            res.json(pacientes);
        }catch(error){
            //error de que no pudo encontrar info
            res.status(500).json({message: error.message});
        }
    };

    //funciona para crear un nuevo paciente
    exports.addPaciente = async (req, res) =>{
        const { nombre } = req.body;
        const paciente = new Paciente({nombre});
        try{
            await paciente.save();
            res.status(201).json(paciente);
        }catch(error){
            //error en tiempo de ejcucion
            res.status(400).json({message: error.message});
        }
    }

    //funcion para actualizar un paciente
    exports.updatePaciente = async (req, res) =>{
        const { id } = req.params;
        const { nombre } = req.body;
        try{
            const paciente = await Paciente.findByIdAndUpdate(id, {nombre}, {new: true});
            if(!paciente){
                return res.status(404).json({message: 'Paciente no encontrado'});
            }else{
                res.status(200).json(paciente);
            }
        }catch(error){
            res.status(400).json({message: error.message});
        }
    }

    // Funcion para eliminar
    exports.deletePaciente = async (req, res) =>{
        const {id} = req.params;
        try{
            await Paciente.findByIdAndDelete(id);
            res.status(200).json({ message: 'Paciente eliminado'});
        }catch(error){
            res.status(400).json({message: error.message})
        }
    }