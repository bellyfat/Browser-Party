class User
{
    constructor(username){

        this.username = username;
        this.room = null;
        this.isAdmin= false;
    }
}

class Room
{
    constructor(id,admin){

        this.id = id;
        this.admin = admin;
        this.participants = []
    }
}

export {User, Room};