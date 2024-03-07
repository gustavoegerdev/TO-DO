import * as taskModels from '../models/tasksModels.js';

export const getAll = async (request, response) => {
    const tasks = await taskModels.getAll();

    return response.status(200).json();
};
