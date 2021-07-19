const users = [];

const userAdd = ({id, name, room}) => {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const sameUser = users.find((user) => user.room === room && user.name === name);

    if (sameUser) {
        return { error: 'Another User with Same username is already present in the room \nPlease pick a different username.'};
    }

    const user = {id, name, room};

    users.push(user);
    return {user}
}

const userDel = (id) => {
    const idx = users.findIndex((user) => user.id === id);

    if (idx != -1) {
        return users.splice(idx, 1)[0];
    }
}

const userGet = (id) => users.find((user) => user.id === id);

const userGetRoom = (room) => users.filter((user) => user.room === room);

module.exports = {userAdd, userDel, userGet, userGetRoom};