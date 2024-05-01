const routes = [
    {
        id: 'partner1',
        url: '/api/partner1',
        method: '*',
        variants: [
            {
                id: 'success',
                type: 'json',
                options: {
                    status: 200,
                    body: [{
                        "id": "1",
                        "account": {
                            "number": "98765"
                        },
                        "personData": {
                            "firstName": "Juancho",
                            "lastName": "Roi"
                        }
                    },
                    {
                        "id": "2",
                        "account": {
                            "number": "56789"
                        },
                        "personData": {
                            "firstName": "Pancracio",
                            "lastName": "Esmerejildo"
                        }
                    }],
                },
            },
        ],
    },
    {
        id: 'partner2',
        url: '/api/partner2',
        method: '*',
        variants: [
            {
                id: 'success',
                type: 'json',
                options: [{
                    "id": "1",
                    "fullName": "Carlos Ponton",
                    "accountNumber": "1234567"
                },
                {
                    "id": "2",
                    "fullName": "Pepe Perez",
                    "accountNumber": "7654321"
                }],
            },
        ],
    },
];
module.exports = routes;
