db.createUser({
    user: 'socialCode',
    pwd: 'password',
    roles: [
        {
            role: 'dbOwner',
            db: 'socialCode',
        },
    ],
});