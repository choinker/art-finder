const { response } = require('express');

const login = async (req, res = response) => {
    const { email, password } = req.body;

    // Ideally search and verify user in a database.
    // Throw error if not found
    if (password != '1234') {
        return res.status(400).json({
            msg: 'User / Password is incorrect'
        });
    }

    // TODO: check why/where this gets returned, and where the status code goes
    res.json({
        name: 'Test User',
        token: 'A JWT token to keep the user loggin in',
        msg: 'Successful login', 
    });
};

module.exports = {
    login
};