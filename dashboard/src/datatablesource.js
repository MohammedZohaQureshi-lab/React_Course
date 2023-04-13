
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
        id: "user1",
        username: "Snow",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "active",
        email: "snow@gmail.com",
        age: 35,
        phone: "+91-7554352617",
        address: "Elton St. 234 Garden Yd. Mumbai",
        state: "Maharashtra",
        circle: "Mumbai",
        tickets: [
            { name: "January", open: 590, closed: 800, total: 1400, pending: 490 },
            { name: "February", open: 868, closed: 967, total: 1506, pending: 590 },
            { name: "March", open: 1397, closed: 1098, total: 989, pending: 350 },
            { name: "April", open: 1480, closed: 1200, total: 1228, pending: 480 },
            { name: "May", open: 1520, closed: 1108, total: 1100, pending: 460 },
            { name: "June", open: 1400, closed: 680, total: 1700, pending: 380 }
        ]
    },
    {
        id: "user2",
        username: "Jamie",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "jamie@gmail.com",
        status: "passive",
        age: 42,
        phone: "+91-8997866322",
        address: "Elton St. 234 Garden Yd. Pune",
        state: "Maharashtra",
        circle: "Pune",
        tickets: [
            { name: "January", open: 590, closed: 800, total: 1400, pending: 490 },
            { name: "February", open: 868, closed: 967, total: 1506, pending: 590 },
            { name: "March", open: 1397, closed: 1098, total: 989, pending: 350 },
            { name: "April", open: 1480, closed: 1200, total: 1228, pending: 480 },
            { name: "May", open: 1520, closed: 1108, total: 1100, pending: 460 },
            { name: "June", open: 1400, closed: 680, total: 1700, pending: 380 }
        ]
    },
    {
        id: "user3",
        username: "Lannister",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "lannister@gmail.com",
        status: "pending",
        age: 45,
        phone: "+91-9969543627",
        address: "Elton St. 234 Garden Yd. Surat",
        state: "Gujrat",
        circle: "Surat",
        tickets: [
            { name: "January", open: 590, closed: 800, total: 1400, pending: 490 },
            { name: "February", open: 868, closed: 967, total: 1506, pending: 590 },
            { name: "March", open: 1397, closed: 1098, total: 989, pending: 350 },
            { name: "April", open: 1480, closed: 1200, total: 1228, pending: 480 },
            { name: "May", open: 1520, closed: 1108, total: 1100, pending: 460 },
            { name: "June", open: 1400, closed: 680, total: 1700, pending: 380 }
        ]
    },
    {
        id: "user4",
        username: "Stark",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "stark@gmail.com",
        status: "active",
        age: 16,
        phone: "+91-7729284536",
        address: "Elton St. 234 Garden Yd. Ahemadabad",
        state: "Gujrat",
        circle: "Ahemadabad",
        tickets: [
            { name: "January", open: 590, closed: 800, total: 1400, pending: 490 },
            { name: "February", open: 868, closed: 967, total: 1506, pending: 590 },
            { name: "March", open: 1397, closed: 1098, total: 989, pending: 350 },
            { name: "April", open: 1480, closed: 1200, total: 1228, pending: 480 },
            { name: "May", open: 1520, closed: 1108, total: 1100, pending: 460 },
            { name: "June", open: 1400, closed: 680, total: 1700, pending: 380 }
        ]
    },
    {
        id: "user5",
        username: "John",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "john@gmail.com",
        status: "passive",
        age: 22,
        phone: "+91-7729284536",
        address: "Elton St. 234 Garden Yd. Srinagar",
        state: "Kashmir",
        circle: "Srinagar",
        tickets: [
            { name: "January", open: 590, closed: 800, total: 1400, pending: 490 },
            { name: "February", open: 868, closed: 967, total: 1506, pending: 590 },
            { name: "March", open: 1397, closed: 1098, total: 989, pending: 350 },
            { name: "April", open: 1480, closed: 1200, total: 1228, pending: 480 },
            { name: "May", open: 1520, closed: 1108, total: 1100, pending: 460 },
            { name: "June", open: 1400, closed: 680, total: 1700, pending: 380 }
        ]
    },
    {
        id: "user6",
        username: "Smith",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "smith@gmail.com",
        status: "active",
        age: 15,
        phone: "+91-7729284536",
        address: "Elton St. 234 Garden Yd. Gulmarg",
        state: "Kashmir",
        circle: "Gulmarg",
        tickets: [
            { name: "January", open: 590, closed: 800, total: 1400, pending: 490 },
            { name: "February", open: 868, closed: 967, total: 1506, pending: 590 },
            { name: "March", open: 1397, closed: 1098, total: 989, pending: 350 },
            { name: "April", open: 1480, closed: 1200, total: 1228, pending: 480 },
            { name: "May", open: 1520, closed: 1108, total: 1100, pending: 460 },
            { name: "June", open: 1400, closed: 680, total: 1700, pending: 380 }
        ]
    },
    {
        id: "user7",
        username: "Clifford",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "clifford@gmail.com",
        status: "passive",
        age: 44,
        phone: "+91-9596478333",
        address: "Elton St. 234 Garden Yd. Lonavla",
        state: "Maharashtra",
        circle: "Lonavla",
        tickets: [
            { name: "January", open: 590, closed: 800, total: 1400, pending: 490 },
            { name: "February", open: 868, closed: 967, total: 1506, pending: 590 },
            { name: "March", open: 1397, closed: 1098, total: 989, pending: 350 },
            { name: "April", open: 1480, closed: 1200, total: 1228, pending: 480 },
            { name: "May", open: 1520, closed: 1108, total: 1100, pending: 460 },
            { name: "June", open: 1400, closed: 680, total: 1700, pending: 380 }
        ]

    },
    {
        id: "user8",
        username: "Frances",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "frances@gmail.com",
        status: "active",
        age: 36,
        phone: "+91-7729284536",
        address: "Elton St. 234 Garden Yd. Gulmarg",
        state: "Maharashtra",
        circle: "Satara",
        tickets: [
            { name: "January", open: 590, closed: 800, total: 1400, pending: 490 },
            { name: "February", open: 868, closed: 967, total: 1506, pending: 590 },
            { name: "March", open: 1397, closed: 1098, total: 989, pending: 350 },
            { name: "April", open: 1480, closed: 1200, total: 1228, pending: 480 },
            { name: "May", open: 1520, closed: 1108, total: 1100, pending: 460 },
            { name: "June", open: 1400, closed: 680, total: 1700, pending: 380 }
        ]
    },
    {
        id: "user9",
        username: "Roxie",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "roxie@gmail.com",
        status: "pending",
        age: 65,
        phone: "+91-7729284536",
        address: "Elton St. 234 Garden Yd. Gulmarg",
        state: "Navsari",
        circle: "Gujrat",
        tickets: [
            { name: "January", open: 590, closed: 800, total: 1400, pending: 490 },
            { name: "February", open: 868, closed: 967, total: 1506, pending: 590 },
            { name: "March", open: 1397, closed: 1098, total: 989, pending: 350 },
            { name: "April", open: 1480, closed: 1200, total: 1228, pending: 480 },
            { name: "May", open: 1520, closed: 1108, total: 1100, pending: 460 },
            { name: "June", open: 1400, closed: 680, total: 1700, pending: 380 }
        ]
    },
    {
        id: "user10",
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
            { name: "January", open: 80, closed: 800, total: 1400, pending: 70 },
            { name: "February", open: 30, closed: 967, total: 1506, pending: 20 },
            { name: "March", open: 50, closed: 1098, total: 989, pending: 350 },
            { name: "April", open: 1480, closed: 1200, total: 1228, pending: 480 },
            { name: "May", open: 60, closed: 1108, total: 1100, pending: 460 },
            { name: "June", open: 200, closed: 680, total: 1700, pending: 380 }
        ]
    },
];