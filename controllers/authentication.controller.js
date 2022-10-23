exports.login = (request, response) => {
    response.json({
        success: true,
        token: 'success-token'
    });
};

exports.logout = (request, response) => {
    response.json({
        success: true,
        message: 'User Logout'
    });
};
