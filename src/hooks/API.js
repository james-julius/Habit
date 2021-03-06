const baseURL = "http://localhost:4000";

const API = {
    fetchUser: () => {
        return 0;
    },
    getTasks: async (userID = 0) => {
        const taskData = await fetch(`${baseURL}/taskdata/${userID}`)
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