const getAllTasks = (req,res) => {
    res.send('getAllTasks')
}

const getOneTask = (req,res) => {
    const id = req.params;
    console.log(id)
    res.send(`getOneTask ${id.id}`)
}

const deleteOneTask = (req,res) => {
    res.send('deleteOneTask')
}

const updateOneTask = (req,res) => {
    res.send('updateOneTask')
}


module.exports = {
    getAllTasks,
    getOneTask,
    deleteOneTask,
    updateOneTask, 
}