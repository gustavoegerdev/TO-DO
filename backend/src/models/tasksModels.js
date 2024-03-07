import * as connection from './connections.js';

export const getAll = async () => {
    const tasks = await connection.execute('SELECT * FROM tasks');
    return tasks;
};
