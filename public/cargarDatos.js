const cargarDatos = async () => {
    try {
        const response = await fetch('/api/v1/tasks/tester', {method:"GET"})
        .then(datos => datos.json())
        return response; // esto es un arreglo [] con {_id: "123", name: "..."}
    } catch (error) {
        console.error(error);
    }
}

export default cargarDatos;