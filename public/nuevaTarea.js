const nuevaTarea = async (texto) =>{
    try {
        const response = await fetch('link', {
            method: "POST",
            body: JSON.stringify({name: texto})
        })
    } catch (error) {
        console.error(error);
    }
}

export default nuevaTarea;