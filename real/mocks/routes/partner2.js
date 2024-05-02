const routes = [
    {
        id: 'partner2',
        url: '/api/partner2',
        method: '*',
        variants: [
            {
                id: 'success',
                type: 'json',
                options: {
                    status: 200,
                    body: [{
                        "id": "1",
                        "fullName": "Carlos Ponton",
                        "accountNumber": "1234567"
                    },
                    {
                        "id": "2",
                        "fullName": "Pepe Perez",
                        "accountNumber": "7654321"
                    }]
                },
            },
        ],
    },
];

module.exports = routes;