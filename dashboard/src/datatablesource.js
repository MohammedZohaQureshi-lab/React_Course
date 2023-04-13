
export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
        field: "user",
        headerName: "User",
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.username}
                </div>
            );
        },
    }
];

//temporary data
export const userRows = [
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
        email: "lannister@gmail.com",
        status: "pending",
        age: 45,
        phone: "+91-9969543627",
        address: "Elton St. 234 Garden Yd. Surat",
        state: "Gujrat",
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
        email: "stark@gmail.com",
        status: "active",
        age: 16,
        phone: "+91-7729284536",
        address: "Elton St. 234 Garden Yd. Ahemadabad",
        state: "Gujrat",
        circle: "Ahemadabad",
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
        address: "Elton St. 234 Garden Yd. Srinagar",
        state: "Kashmir",
        circle: "Srinagar",
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
        id: "12981001",
        username: "Anthony",
        img: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        email: "smith@gmail.com",
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
    },
    {
        id: "11330029",
        username: "Emma",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
        email: "clifford@gmail.com",
        status: "passive",
        age: 44,
        phone: "+91-9596478333",
        address: "Elton St. 234 Garden Yd. Lonavla",
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
        id: "14410256",
        username: "Roxie",
        img: "https://shuswap-revelstoke.cmha.bc.ca/wp-content/uploads/slider/cache/18792386594ddbbfecb53d3ce9a7077f/portrait-gb0d1532ff_1920.jpg",
        email: "roxie@gmail.com",
        status: "pending",
        age: 65,
        phone: "+91-7729284536",
        address: "Elton St. 234 Garden Yd. Navsari",
        state: "Navsari",
        circle: "Gujrat",
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
        id: "12984422",
        username: "Clarke",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "clarke@gmail.com",
        status: "active",
        age: 31,
        phone: "+91-8889792558",
        address: "New Orleons St. 234 Garden Yd. Gulmarg",
        state: "Kashmir",
        circle: "Gulmarg",
        tickets: [
            { name: "JAN", open: 80, closed: 800, total: 1400, pending: 70 },
            { name: "FEB", open: 30, closed: 967, total: 1506, pending: 20 },
            { name: "MAR", open: 50, closed: 1098, total: 989, pending: 350 },
            { name: "APR", open: 1480, closed: 1200, total: 1228, pending: 480 },
            { name: "MAY", open: 60, closed: 1108, total: 1100, pending: 460 },
            { name: "JUN", open: 200, closed: 680, total: 1700, pending: 380 }
        ]
    }
];