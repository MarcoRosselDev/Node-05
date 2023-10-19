const editarDato = async (id, textUpdate)=>{
    try {
        const bodyP = {name: textUpdate}
        const response = await fetch(`/api/v1/tasks/tester/${id}`, {
            method: "PUT",
            body: JSON.stringify({name: textUpdate})
        })
        return response;
    } catch (error) {
        console.error(error);
    }
}

export default editarDato;