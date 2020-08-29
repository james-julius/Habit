const baseURL = "http://localhost:4000";

const API = {
    getTasks: (userID) => {
        fetch(`${baseURL}/taskdata/0`, {headers: {method: "GET"}})
            .then(response => {
                console.log(response)
                console.log(response.body);
                console.log(JSON.parse(response.body))
                return response.data;
            })
            .catch(err => {
                console.log(err);
                return err;
            });
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