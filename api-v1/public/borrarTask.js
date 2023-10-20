const borrarTask = async (id) => {
    try {
        const response = await fetch(`/api/v1/tasks/tester/${id}`, {
            method: "DELETE"
        })
        return response
    } catch (error) {
        console.error(error);
    }
}

export default borrarTask;