const baseURL = "http://localhost:4000";

const API = {
    getTasks: async (userID) => {
        const taskData = await fetch(`${baseURL}/taskdata/0`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                return data;
            })
            .catch(err => {
                console.log(err);
                return err;
            });
        return taskData;
    },
    createTask: async ({}) => {
        return "task created"
    },
    updateTask: async ({}) => {
        return "task updated"
    },
    deleteTask: async (taskID) => {
        return `${taskID} deleted`;
    }
}

export default API;