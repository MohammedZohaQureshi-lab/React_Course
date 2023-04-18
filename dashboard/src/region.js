export const regionList = [
    {
        state: "Maharashtra",
        id: "Mah",
        circles: [{ id: "mah1", title: "Mumbai" }, { id: "mah2", title: "Pune" }, { id: "mah3", title: "Satara" }]
    },
    {
        state: "Gujarat",
        id: "Guj",
        circles: [{ id: "guj1", title: "Surat" }, { id: "guj2", title: "Ahmedabad" }, { id: "guj3", title: "Rajkot" }]
    },
    {
        state: "Kashmir",
        id: "Kas",
        circles: [{ id: "kas1", title: "Srinagar " }, { id: "kas2", title: "Gulmarg" }, { id: "kas3", title: "Pahalgam" }]
    }
]

export const initialCircle = {
    tickets: [
        { name: "Week 1", total: 1000, open: 200, closed: 450, pending: 350 },
        { name: "Week 2", total: 500, open: 300, closed: 50, pending: 150 },
        { name: "Week 3", total: 800, open: 200, closed: 300, pending: 300 },
        { name: "Week 4", total: 1275, open: 475, closed: 500, pending: 300 },
        { name: "Week 5", total: 240, open: 100, closed: 40, pending: 100 },
    ], users: [
        {
            id: "11337611",
            username: "Snow",
            img: "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=956",
            status: "active",
            email: "snow@gmail.com",
            age: 35,
            phone: "+91-7554352617",
            address: "Elton St. 234 Garden Yd. Mumbai",
            state: "Maharashtra",
            circle: "Mumbai",
            tickets: [
                { name: "JAN", open: 590, closed: 800, total: 1400, pending: 490 },
                { name: "FEB", open: 868, closed: 967, total: 1506, pending: 590 },
                { name: "MAR", open: 1397, closed: 1098, total: 989, pending: 350 },
                { name: "APR", open: 1480, closed: 1200, total: 1228, pending: 480 },
                { name: "MAY", open: 1520, closed: 1108, total: 1100, pending: 460 },
                { name: "JUN", open: 1400, closed: 680, total: 1700, pending: 380 }
            ]
        },
        {
            id: "11337929",
            username: "Jamie",
            img: "https://media.nngroup.com/media/people/photos/2022-portrait-page-3.jpg.600x600_q75_autocrop_crop-smart_upscale.jpg",
            email: "jamie@gmail.com",
            status: "passive",
            age: 42,
            phone: "+91-8997866322",
            address: "Elton St. 234 Garden Yd. Pune",
            state: "Maharashtra",
            circle: "Pune",
            tickets: [
                { name: "JAN", open: 590, closed: 800, total: 1400, pending: 490 },
                { name: "FEB", open: 868, closed: 967, total: 1506, pending: 590 },
                { name: "MAR", open: 1397, closed: 1098, total: 989, pending: 350 },
                { name: "APR", open: 1480, closed: 1200, total: 1228, pending: 480 },
                { name: "MAY", open: 1520, closed: 1108, total: 1100, pending: 460 },
                { name: "JUN", open: 1400, closed: 680, total: 1700, pending: 380 }
            ]
        },
        {
            id: "14415601",
            username: "Julianna",
            img: "https://img.freepik.com/premium-photo/portrait-asian-smiling-satisfied-girl-user-student-freelancer-buyer-blogger-business-woman-20s-lady_717737-294.jpg",
            email: "jullie@gmail.com",
            status: "pending",
            age: 45,
            phone: "+91-9969543627",
            address: "Elton St. 234 Garden Yd. Surat",
            state: "Gujarat",
            circle: "Surat",
            tickets: [
                { name: "JAN", open: 590, closed: 800, total: 1400, pending: 490 },
                { name: "FEB", open: 868, closed: 967, total: 1506, pending: 590 },
                { name: "MAR", open: 1397, closed: 1098, total: 989, pending: 350 },
                { name: "APR", open: 1480, closed: 1200, total: 1228, pending: 480 },
                { name: "MAY", open: 1520, closed: 1108, total: 1100, pending: 460 },
                { name: "JUN", open: 1400, closed: 680, total: 1700, pending: 380 }
            ]
        },
        {
            id: "14410243",
            username: "Ryan",
            img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHVvbW98ZW58MHx8MHx8&w=1000&q=80",
            email: "ryan@gmail.com",
            status: "active",
            age: 16,
            phone: "+91-7729284536",
            address: "Elton St. 234 Garden Yd. Ahmedabad",
            state: "Gujarat",
            circle: "Ahmedabad",
            tickets: [
                { name: "JAN", open: 590, closed: 800, total: 1400, pending: 490 },
                { name: "FEB", open: 868, closed: 967, total: 1506, pending: 590 },
                { name: "MAR", open: 1397, closed: 1098, total: 989, pending: 350 },
                { name: "APR", open: 1480, closed: 1200, total: 1228, pending: 480 },
                { name: "MAY", open: 1520, closed: 1108, total: 1100, pending: 460 },
                { name: "JUN", open: 1400, closed: 680, total: 1700, pending: 380 }
            ]
        },
        {
            id: "12981313",
            username: "John",
            img: "https://media.istockphoto.com/id/1183038871/photo/the-epitome-of-corporate-experience.jpg?s=612x612&w=0&k=20&c=-ofeRtum43ztPE2LrG-LDeIW4UCkJCORHaA6S_pMHb4=",
            email: "john@gmail.com",
            status: "passive",
            age: 22,
            phone: "+91-7729284536",
            address: "High St. 218 Garden Yd. Srinagar",
            state: "Kashmir",
            circle: "Srinagar ",
            tickets: [
                { name: "JAN", open: 590, closed: 800, total: 1400, pending: 490 },
                { name: "FEB", open: 868, closed: 967, total: 1506, pending: 590 },
                { name: "MAR", open: 1397, closed: 1098, total: 989, pending: 350 },
                { name: "APR", open: 1480, closed: 1200, total: 1228, pending: 480 },
                { name: "MAY", open: 1520, closed: 1108, total: 1100, pending: 460 },
                { name: "JUN", open: 1400, closed: 680, total: 1700, pending: 380 }
            ]
        }
    ]
}

export const circleData = [
    {
        id: "mah1",
        circle: "Mumbai",
        tickets: [
            { name: "Week 1", open: 1520, closed: 1108, total: 800, pending: 460 },
            { name: "Week 2", open: 868, closed: 967, total: 1506, pending: 590 },
            { name: "Week 3", open: 1480, closed: 1200, total: 2100, pending: 480 },
            { name: "Week 4", open: 1000, closed: 300, total: 1900, pending: 600 },
            { name: "Week 5", open: 300, closed: 200, total: 1000, pending: 500 }
        ],
        users: [
            {
                id: "11330029",
                username: "Emma",
                img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
                email: "emma@gmail.com",
                status: "passive",
                age: 44,
                phone: "+91-9596478333",
                address: "Elton St. 234 Garden Yd. Mumbai",
                state: "Maharashtra",
                circle: "Mumbai",
                tickets: [
                    { name: "JAN", open: 590, closed: 800, total: 1400, pending: 490 },
                    { name: "FEB", open: 868, closed: 967, total: 1506, pending: 590 },
                    { name: "MAR", open: 1397, closed: 1098, total: 989, pending: 350 },
                    { name: "APR", open: 1480, closed: 1200, total: 1228, pending: 480 },
                    { name: "MAY", open: 1520, closed: 1108, total: 1100, pending: 460 },
                    { name: "JUN", open: 1400, closed: 680, total: 1700, pending: 380 }
                ]
            },
            {
                id: "11337611",
                username: "Snow",
                img: "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=956",
                status: "active",
                email: "snow@gmail.com",
                age: 35,
                phone: "+91-7554352617",
                address: "Elton St. 234 Garden Yd. Mumbai",
                state: "Maharashtra",
                circle: "Mumbai",
                tickets: [
                    { name: "JAN", open: 590, closed: 800, total: 1400, pending: 490 },
                    { name: "FEB", open: 868, closed: 967, total: 1506, pending: 590 },
                    { name: "MAR", open: 1397, closed: 1098, total: 989, pending: 350 },
                    { name: "APR", open: 1480, closed: 1200, total: 1228, pending: 480 },
                    { name: "MAY", open: 1520, closed: 1108, total: 1100, pending: 460 },
                    { name: "JUN", open: 1400, closed: 680, total: 1700, pending: 380 }
                ]
            }
        ]
    },
    {
        id: "mah2",
        circle: "Pune",
        tickets: [
            { name: "Week 1", open: 1480, closed: 1200, total: 1228, pending: 480 },
            { name: "Week 2", open: 1520, closed: 1108, total: 1100, pending: 460 },
            { name: "Week 3", open: 868, closed: 967, total: 1506, pending: 590 },
            { name: "Week 4", open: 1400, closed: 680, total: 1700, pending: 380 },
            { name: "Week 5", open: 590, closed: 800, total: 1400, pending: 490 }
        ],
        users: [
            {
                id: "11337929",
                username: "Jamie",
                img: "https://media.nngroup.com/media/people/photos/2022-portrait-page-3.jpg.600x600_q75_autocrop_crop-smart_upscale.jpg",
                email: "jamie@gmail.com",
                status: "passive",
                age: 42,
                phone: "+91-8997866322",
                address: "Elton St. 234 Garden Yd. Pune",
                state: "Maharashtra",
                circle: "Pune",
                tickets: [
                    { name: "JAN", open: 590, closed: 800, total: 1400, pending: 490 },
                    { name: "FEB", open: 868, closed: 967, total: 1506, pending: 590 },
                    { name: "MAR", open: 1397, closed: 1098, total: 989, pending: 350 },
                    { name: "APR", open: 1480, closed: 1200, total: 1228, pending: 480 },
                    { name: "MAY", open: 1520, closed: 1108, total: 1100, pending: 460 },
                    { name: "JUN", open: 1400, closed: 680, total: 1700, pending: 380 }
                ]
            },
            {
                id: "11339921",
                username: "Frances",
                img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
                email: "frances@gmail.com",
                status: "active",
                age: 36,
                phone: "+91-7729284536",
                address: "Elton St. 234 Garden Yd. Pune",
                state: "Maharashtra",
                circle: "Pune",
                tickets: [
                    { name: "JAN", open: 590, closed: 800, total: 1400, pending: 490 },
                    { name: "FEB", open: 868, closed: 967, total: 1506, pending: 590 },
                    { name: "MAR", open: 1397, closed: 1098, total: 989, pending: 350 },
                    { name: "APR", open: 1480, closed: 1200, total: 1228, pending: 480 },
                    { name: "MAY", open: 1520, closed: 1108, total: 1100, pending: 460 },
                    { name: "JUN", open: 1400, closed: 680, total: 1700, pending: 380 }
                ]
            },
            {
                id: "11331166",
                username: "Clinton",
                img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
                email: "clint@gmail.com",
                status: "active",
                age: 31,
                phone: "+91-8889792558",
                address: "New Orleons St. 234 Garden Yd. Pune",
                state: "Maharashtra",
                circle: "Pune",
                tickets: [
                    { name: "JAN", open: 80, closed: 800, total: 1400, pending: 70 },
                    { name: "FEB", open: 30, closed: 967, total: 1506, pending: 20 },
                    { name: "MAR", open: 50, closed: 1098, total: 989, pending: 350 },
                    { name: "APR", open: 1480, closed: 1200, total: 1228, pending: 480 },
                    { name: "MAY", open: 60, closed: 1108, total: 1100, pending: 460 },
                    { name: "JUN", open: 200, closed: 680, total: 1700, pending: 380 }
                ]
            }
        ]
    },
    {
        id: "mah3",
        circle: "Satara",
        tickets: [
            { name: "Week 1", open: 590, closed: 800, total: 1400, pending: 490 },
            { name: "Week 2", open: 868, closed: 967, total: 1506, pending: 590 },
            { name: "Week 3", open: 1397, closed: 1098, total: 989, pending: 350 },
            { name: "Week 4", open: 1480, closed: 1200, total: 1228, pending: 480 },
            { name: "Week 5", open: 1520, closed: 1108, total: 1100, pending: 460 }
        ],
        users: [
            {
                id: "11333640",
                username: "Alexis",
                img: "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=956",
                status: "active",
                email: "alexi@gmail.com",
                age: 35,
                phone: "+91-7554352617",
                address: "Elton St. 234 Garden Yd. Satara",
                state: "Maharashtra",
                circle: "Satara",
                tickets: [
                    { name: "JAN", open: 590, closed: 800, total: 1400, pending: 490 },
                    { name: "FEB", open: 868, closed: 967, total: 1506, pending: 590 },
                    { name: "MAR", open: 1397, closed: 1098, total: 989, pending: 350 },
                    { name: "APR", open: 1480, closed: 1200, total: 1228, pending: 480 },
                    { name: "MAY", open: 1520, closed: 1108, total: 1100, pending: 460 },
                    { name: "JUN", open: 1400, closed: 680, total: 1700, pending: 380 }
                ]
            },
            {
                id: "11330029",
                username: "Anita",
                img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
                email: "anita@gmail.com",
                status: "passive",
                age: 44,
                phone: "+91-9596478333",
                address: "Elton St. 234 Garden Yd. Satara",
                state: "Maharashtra",
                circle: "Satara",
                tickets: [
                    { name: "JAN", open: 590, closed: 800, total: 1400, pending: 490 },
                    { name: "FEB", open: 868, closed: 967, total: 1506, pending: 590 },
                    { name: "MAR", open: 1397, closed: 1098, total: 989, pending: 350 },
                    { name: "APR", open: 1480, closed: 1200, total: 1228, pending: 480 },
                    { name: "MAY", open: 1520, closed: 1108, total: 1100, pending: 460 },
                    { name: "JUN", open: 1400, closed: 680, total: 1700, pending: 380 }
                ]
            }
        ]
    },
    {
        id: "guj1",
        circle: "Surat",
        tickets: [
            { name: "Week ", open: 1480, closed: 1200, total: 1228, pending: 480 },
            { name: "Week 2", open: 1520, closed: 1108, total: 1100, pending: 460 },
            { name: "Week 3", open: 868, closed: 967, total: 1506, pending: 590 },
            { name: "Week 4", open: 1400, closed: 680, total: 1700, pending: 380 },
            { name: "Week 5", open: 590, closed: 800, total: 1400, pending: 490 }
        ],
        users: [
            {
                id: "14415601",
                username: "Julianna",
                img: "https://img.freepik.com/premium-photo/portrait-asian-smiling-satisfied-girl-user-student-freelancer-buyer-blogger-business-woman-20s-lady_717737-294.jpg",
                email: "lannister@gmail.com",
                status: "pending",
                age: 45,
                phone: "+91-9969543627",
                address: "Elton St. 234 Garden Yd. Surat",
                state: "Gujarat",
                circle: "Surat",
                tickets: [
                    { name: "JAN", open: 590, closed: 800, total: 1400, pending: 490 },
                    { name: "FEB", open: 868, closed: 967, total: 1506, pending: 590 },
                    { name: "MAR", open: 1397, closed: 1098, total: 989, pending: 350 },
                    { name: "APR", open: 1480, closed: 1200, total: 1228, pending: 480 },
                    { name: "MAY", open: 1520, closed: 1108, total: 1100, pending: 460 },
                    { name: "JUN", open: 1400, closed: 680, total: 1700, pending: 380 }
                ]
            }
        ]
    },
    {
        id: "guj2",
        circle: "Ahmedabad",
        tickets: [
            { name: "Week 1", open: 590, closed: 800, total: 1400, pending: 490 },
            { name: "Week 2", open: 868, closed: 967, total: 1506, pending: 590 },
            { name: "Week 3", open: 1397, closed: 1098, total: 989, pending: 350 },
            { name: "Week 4", open: 1480, closed: 1200, total: 1228, pending: 480 },
            { name: "Week 5", open: 1520, closed: 1108, total: 1100, pending: 460 }
        ],
        users: [
            {
                id: "14410243",
                username: "Ryan",
                img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHVvbW98ZW58MHx8MHx8&w=1000&q=80",
                email: "ryan@yahoomail.com",
                status: "active",
                age: 16,
                phone: "+91-7729284536",
                address: "Elton St. 234 Garden Yd. Ahmedabad",
                state: "Gujarat",
                circle: "Ahmedabad",
                tickets: [
                    { name: "JAN", open: 590, closed: 800, total: 1400, pending: 490 },
                    { name: "FEB", open: 868, closed: 967, total: 1506, pending: 590 },
                    { name: "MAR", open: 1397, closed: 1098, total: 989, pending: 350 },
                    { name: "APR", open: 1480, closed: 1200, total: 1228, pending: 480 },
                    { name: "MAY", open: 1520, closed: 1108, total: 1100, pending: 460 },
                    { name: "JUN", open: 1400, closed: 680, total: 1700, pending: 380 }
                ]
            }
        ]
    },
    {
        id: "guj3",
        circle: "Rajkot",
        tickets: [
            { name: "Week 1", open: 1520, closed: 1108, total: 800, pending: 460 },
            { name: "Week 2", open: 868, closed: 967, total: 1506, pending: 590 },
            { name: "Week 3", open: 1480, closed: 1200, total: 2100, pending: 480 },
            { name: "Week 4", open: 1000, closed: 300, total: 1900, pending: 600 },
            { name: "Week 5", open: 300, closed: 200, total: 1000, pending: 500 }
        ],
        users: [
            {
                id: "14410256",
                username: "Roxie",
                img: "https://shuswap-revelstoke.cmha.bc.ca/wp-content/uploads/slider/cache/18792386594ddbbfecb53d3ce9a7077f/portrait-gb0d1532ff_1920.jpg",
                email: "roxie@yahoomail.com",
                status: "pending",
                age: 65,
                phone: "+91-7729284536",
                address: "Elton St. 234 Garden Yd. Rajkot",
                state: "Rajkot",
                circle: "Gujarat",
                tickets: [
                    { name: "JAN", open: 590, closed: 800, total: 1400, pending: 490 },
                    { name: "FEB", open: 868, closed: 967, total: 1506, pending: 590 },
                    { name: "MAR", open: 1397, closed: 1098, total: 989, pending: 350 },
                    { name: "APR", open: 1480, closed: 1200, total: 1228, pending: 480 },
                    { name: "MAY", open: 1520, closed: 1108, total: 1100, pending: 460 },
                    { name: "JUN", open: 1400, closed: 680, total: 1700, pending: 380 }
                ]
            }
        ]
    },
    {
        id: "kas1",
        circle: "Srinagar ",
        tickets: [
            { name: "Week 1", open: 590, closed: 800, total: 1400, pending: 490 },
            { name: "Week 2", open: 868, closed: 967, total: 1506, pending: 590 },
            { name: "Week 3", open: 1397, closed: 1098, total: 989, pending: 350 },
            { name: "Week 4", open: 1480, closed: 1200, total: 1228, pending: 480 },
            { name: "Week 5", open: 1520, closed: 1108, total: 1100, pending: 460 }
        ],
        users: [
            {
                id: "12981313",
                username: "John",
                img: "https://media.istockphoto.com/id/1183038871/photo/the-epitome-of-corporate-experience.jpg?s=612x612&w=0&k=20&c=-ofeRtum43ztPE2LrG-LDeIW4UCkJCORHaA6S_pMHb4=",
                email: "john@gmail.com",
                status: "passive",
                age: 22,
                phone: "+91-7729284536",
                address: "Elton St. 234 Garden Yd. Srinagar",
                state: "Kashmir",
                circle: "Srinagar ",
                tickets: [
                    { name: "JAN", open: 590, closed: 800, total: 1400, pending: 490 },
                    { name: "FEB", open: 868, closed: 967, total: 1506, pending: 590 },
                    { name: "MAR", open: 1397, closed: 1098, total: 989, pending: 350 },
                    { name: "APR", open: 1480, closed: 1200, total: 1228, pending: 480 },
                    { name: "MAY", open: 1520, closed: 1108, total: 1100, pending: 460 },
                    { name: "JUN", open: 1400, closed: 680, total: 1700, pending: 380 }
                ]
            }
        ]
    },
    {
        id: "kas2",
        circle: "Gulmarg",
        tickets: [
            { name: "Week 1", open: 1520, closed: 1108, total: 800, pending: 460 },
            { name: "Week 2", open: 868, closed: 967, total: 1506, pending: 590 },
            { name: "Week 3", open: 1480, closed: 1200, total: 2100, pending: 480 },
            { name: "Week 4", open: 1000, closed: 300, total: 1900, pending: 600 },
            { name: "Week 5", open: 300, closed: 200, total: 1000, pending: 500 }
        ],
        users: [
            {
                id: "12981001",
                username: "Anthony",
                img: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
                email: "anthony@gmail.com",
                status: "active",
                age: 15,
                phone: "+91-7729284536",
                address: "Elton St. 234 Garden Yd. Gulmarg",
                state: "Kashmir",
                circle: "Gulmarg",
                tickets: [
                    { name: "JAN", open: 590, closed: 800, total: 1400, pending: 490 },
                    { name: "FEB", open: 868, closed: 967, total: 1506, pending: 590 },
                    { name: "MAR", open: 1397, closed: 1098, total: 989, pending: 350 },
                    { name: "APR", open: 1480, closed: 1200, total: 1228, pending: 480 },
                    { name: "MAY", open: 1520, closed: 1108, total: 1100, pending: 460 },
                    { name: "JUN", open: 1400, closed: 680, total: 1700, pending: 380 }
                ]
            }
        ]
    },
    {
        id: "kas3",
        circle: "Pahalgam",
        tickets: [
            { name: "Week 1", open: 1480, closed: 1200, total: 1228, pending: 480 },
            { name: "Week 3", open: 1520, closed: 1108, total: 1100, pending: 460 },
            { name: "Week 3", open: 868, closed: 967, total: 1506, pending: 590 },
            { name: "Week 4", open: 1400, closed: 680, total: 1700, pending: 380 },
            { name: "Week 5", open: 590, closed: 800, total: 1400, pending: 490 }
        ],
        users: [
            {
                id: "12984422",
                username: "Clarke",
                img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
                email: "clarke@gmail.com",
                status: "active",
                age: 31,
                phone: "+91-8889792558",
                address: "New Orleons St. 234 Garden Yd. Pahalgam",
                state: "Kashmir",
                circle: "Pahalgam",
                tickets: [
                    { name: "JAN", open: 80, closed: 800, total: 1400, pending: 70 },
                    { name: "FEB", open: 30, closed: 967, total: 1506, pending: 20 },
                    { name: "MAR", open: 50, closed: 1098, total: 989, pending: 350 },
                    { name: "APR", open: 1480, closed: 1200, total: 1228, pending: 480 },
                    { name: "MAY", open: 60, closed: 1108, total: 1100, pending: 460 },
                    { name: "JUN", open: 200, closed: 680, total: 1700, pending: 380 }
                ]
            }
        ]
    }
];


export const initialTrend = [
    { name: "JAN", total: 500, open: 300, closed: 50, pending: 150 },
    { name: "FEB", total: 1000, open: 200, closed: 450, pending: 350 },
    { name: "MAR", total: 1275, open: 475, closed: 500, pending: 300 },
    { name: "APR", total: 800, open: 200, closed: 300, pending: 300 },
    { name: "MAY", total: 500, open: 150, closed: 100, pending: 150 },
    { name: "JUN", total: 240, open: 100, closed: 40, pending: 100 },
]
export const trendData = [
    {
        id: "mah1",
        circle: "Mumbai",
        tickets: [
            { name: "JAN", open: 1480, closed: 1200, total: 1228, pending: 480 },
            { name: "FEB", open: 1520, closed: 1108, total: 1100, pending: 460 },
            { name: "MAR", open: 868, closed: 967, total: 1506, pending: 590 },
            { name: "APR", open: 1400, closed: 680, total: 1700, pending: 380 },
            { name: "MAY", open: 590, closed: 800, total: 1400, pending: 490 },
            { name: "JUN", open: 1397, closed: 1098, total: 989, pending: 350 }
        ]
    },
    {
        id: "mah2",
        circle: "Pune",
        tickets: [
            { name: "JAN", open: 590, closed: 800, total: 1400, pending: 490 },
            { name: "FEB", open: 868, closed: 967, total: 1506, pending: 590 },
            { name: "MAR", open: 1397, closed: 1098, total: 989, pending: 350 },
            { name: "APR", open: 1480, closed: 1200, total: 1228, pending: 480 },
            { name: "MAY", open: 1520, closed: 1108, total: 1100, pending: 460 },
            { name: "JUN", open: 1400, closed: 680, total: 1700, pending: 380 }
        ]

    },
    {
        id: "mah3",
        circle: "Satara",

        tickets: [
            { name: "JAN", open: 1520, closed: 1108, total: 800, pending: 460 },
            { name: "FEB", open: 868, closed: 967, total: 1506, pending: 590 },
            { name: "MAR", open: 1480, closed: 1200, total: 2100, pending: 480 },
            { name: "APR", open: 1000, closed: 300, total: 1900, pending: 600 },
            { name: "MAY", open: 300, closed: 200, total: 1000, pending: 500 },
            { name: "JUN", open: 200, closed: 1000, total: 1500, pending: 300 }
        ]
    },
    {
        id: "guj1",
        circle: "Surat",
        tickets: [
            { name: "JAN", open: 1480, closed: 1200, total: 1228, pending: 480 },
            { name: "FEB", open: 1520, closed: 1108, total: 1100, pending: 460 },
            { name: "MAR", open: 868, closed: 967, total: 1506, pending: 590 },
            { name: "APR", open: 1400, closed: 680, total: 1700, pending: 380 },
            { name: "MAY", open: 590, closed: 800, total: 1400, pending: 490 },
            { name: "JUN", open: 1397, closed: 1098, total: 989, pending: 350 }
        ]
    },
    {
        id: "guj2",
        circle: "Ahmedabad",
        tickets: [
            { name: "JAN", open: 590, closed: 800, total: 1400, pending: 490 },
            { name: "FEB", open: 868, closed: 967, total: 1506, pending: 590 },
            { name: "MAR", open: 1397, closed: 1098, total: 989, pending: 350 },
            { name: "APR", open: 1480, closed: 1200, total: 1228, pending: 480 },
            { name: "MAY", open: 1520, closed: 1108, total: 1100, pending: 460 },
            { name: "JUN", open: 1400, closed: 680, total: 1700, pending: 380 }
        ]
    }, {
        id: "guj3",
        circle: "Rajkot",
        tickets: [
            { name: "JAN", open: 1520, closed: 1108, total: 800, pending: 460 },
            { name: "FEB", open: 868, closed: 967, total: 1506, pending: 590 },
            { name: "MAR", open: 1480, closed: 1200, total: 2100, pending: 480 },
            { name: "APR", open: 1000, closed: 300, total: 1900, pending: 600 },
            { name: "MAY", open: 300, closed: 200, total: 1000, pending: 500 },
            { name: "JUN", open: 200, closed: 1000, total: 1500, pending: 300 }
        ]
    },
    {
        id: "kas1",
        circle: "Srinagar ",
        tickets: [
            { name: "JAN", open: 590, closed: 800, total: 1400, pending: 490 },
            { name: "FEB", open: 868, closed: 967, total: 1506, pending: 590 },
            { name: "MAR", open: 1397, closed: 1098, total: 989, pending: 350 },
            { name: "APR", open: 1480, closed: 1200, total: 1228, pending: 480 },
            { name: "MAY", open: 1520, closed: 1108, total: 1100, pending: 460 },
            { name: "JUN", open: 1400, closed: 680, total: 1700, pending: 380 }
        ]
    }, {
        id: "kas2",
        circle: "Gulmarg",
        tickets: [
            { name: "JAN", open: 1520, closed: 1108, total: 800, pending: 460 },
            { name: "FEB", open: 868, closed: 967, total: 1506, pending: 590 },
            { name: "MAR", open: 1480, closed: 1200, total: 2100, pending: 480 },
            { name: "APR", open: 1000, closed: 300, total: 1900, pending: 600 },
            { name: "MAY", open: 300, closed: 200, total: 1000, pending: 500 },
            { name: "JUN", open: 200, closed: 1000, total: 1500, pending: 300 }
        ]
    },
    {
        id: "kas3",
        circle: "Pahalgam",
        tickets: [
            { name: "JAN", open: 1480, closed: 1200, total: 1228, pending: 480 },
            { name: "FEB", open: 1520, closed: 1108, total: 1100, pending: 460 },
            { name: "MAR", open: 868, closed: 967, total: 1506, pending: 590 },
            { name: "APR", open: 1400, closed: 680, total: 1700, pending: 380 },
            { name: "MAY", open: 590, closed: 800, total: 1400, pending: 490 },
            { name: "JUN", open: 1397, closed: 1098, total: 989, pending: 350 }
        ]
    }
];

