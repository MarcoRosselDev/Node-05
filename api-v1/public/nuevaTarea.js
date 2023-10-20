const nuevaTarea = async (texto) => {
  try {
    const response = await fetch('/api/v1/tasks', {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name: texto})
    })
    return response;
  } catch (error) {
    console.error(error);
  }
}

export default nuevaTarea;