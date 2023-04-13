export const regionList = [
    {
        state: "Maharashtra",
        id: "Mah",
        circles: [{ id: "mah1", title: "Mumbai" }, { id: "mah2", title: "Pune" }, { id: "mah3", title: "Satara" }]
    },
    {
        state: "Gujrat",
        id: "Guj",
        circles: [{ id: "guj1", title: "Surat" }, { id: "guj2", title: "Ahemadabad" }, { id: "guj3", title: "Navsari" }]
    },
    {
        state: "Kashmir",
        id: "Kas",
        circles: [{ id: "kas1", title: "Srinagar" }, { id: "kas2", title: "Gulmarg" }, { id: "kas3", title: "Sonmarg" }]
    }
]

export const initialCircleData = [
    { name: "January", total: 1000, open: 200, closed: 450, pending: 350 },
    { name: "February", total: 500, open: 300, closed: 50, pending: 150 },
    { name: "March", total: 800, open: 200, closed: 300, pending: 300 },
    { name: "April", total: 1275, open: 475, closed: 500, pending: 300 },
    { name: "May", total: 240, open: 100, closed: 40, pending: 100 },
    { name: "June", total: 500, open: 150, closed: 100, pending: 150 }
]
export const circleData = [
    {
        id: "mah1",
        circle: "Mumbai",
        tickets: [
            { name: "January", open: 1520, closed: 1108, total: 800, pending: 460 },
            { name: "February", open: 868, closed: 967, total: 1506, pending: 590 },
            { name: "March", open: 1480, closed: 1200, total: 2100, pending: 480 },
            { name: "April", open: 1000, closed: 300, total: 1900, pending: 600 },
            { name: "May", open: 300, closed: 200, total: 1000, pending: 500 },
            { name: "June", open: 200, closed: 1000, total: 1500, pending: 300 }
        ]
    },
    {
        id: "mah2",
        circle: "Pune",
        tickets: [
            { name: "January", open: 1480, closed: 1200, total: 1228, pending: 480 },
            { name: "February", open: 1520, closed: 1108, total: 1100, pending: 460 },
            { name: "March", open: 868, closed: 967, total: 1506, pending: 590 },
            { name: "April", open: 1400, closed: 680, total: 1700, pending: 380 },
            { name: "May", open: 590, closed: 800, total: 1400, pending: 490 },
            { name: "June", open: 1397, closed: 1098, total: 989, pending: 350 }
        ]
    },
    {
        id: "mah3",
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
        id: "guj1",
        circle: "Surat",
        tickets: [
            { name: "January", open: 1480, closed: 1200, total: 1228, pending: 480 },
            { name: "February", open: 1520, closed: 1108, total: 1100, pending: 460 },
            { name: "March", open: 868, closed: 967, total: 1506, pending: 590 },
            { name: "April", open: 1400, closed: 680, total: 1700, pending: 380 },
            { name: "May", open: 590, closed: 800, total: 1400, pending: 490 },
            { name: "June", open: 1397, closed: 1098, total: 989, pending: 350 }
        ]
    },
    {
        id: "guj2",
        circle: "Ahemadabad",
        tickets: [
            { name: "January", open: 590, closed: 800, total: 1400, pending: 490 },
            { name: "February", open: 868, closed: 967, total: 1506, pending: 590 },
            { name: "March", open: 1397, closed: 1098, total: 989, pending: 350 },
            { name: "April", open: 1480, closed: 1200, total: 1228, pending: 480 },
            { name: "May", open: 1520, closed: 1108, total: 1100, pending: 460 },
            { name: "June", open: 1400, closed: 680, total: 1700, pending: 380 }
        ]
    }, {
        id: "guj3",
        circle: "Navsari",
        tickets: [
            { name: "January", open: 1520, closed: 1108, total: 800, pending: 460 },
            { name: "February", open: 868, closed: 967, total: 1506, pending: 590 },
            { name: "March", open: 1480, closed: 1200, total: 2100, pending: 480 },
            { name: "April", open: 1000, closed: 300, total: 1900, pending: 600 },
            { name: "May", open: 300, closed: 200, total: 1000, pending: 500 },
            { name: "June", open: 200, closed: 1000, total: 1500, pending: 300 }
        ]
    },
    {
        id: "kas1",
        circle: "Srinagar",
        tickets: [
            { name: "January", open: 590, closed: 800, total: 1400, pending: 490 },
            { name: "February", open: 868, closed: 967, total: 1506, pending: 590 },
            { name: "March", open: 1397, closed: 1098, total: 989, pending: 350 },
            { name: "April", open: 1480, closed: 1200, total: 1228, pending: 480 },
            { name: "May", open: 1520, closed: 1108, total: 1100, pending: 460 },
            { name: "June", open: 1400, closed: 680, total: 1700, pending: 380 }
        ]
    }, {
        id: "kas2",
        circle: "Gulmarg",
        tickets: [
            { name: "January", open: 1520, closed: 1108, total: 800, pending: 460 },
            { name: "February", open: 868, closed: 967, total: 1506, pending: 590 },
            { name: "March", open: 1480, closed: 1200, total: 2100, pending: 480 },
            { name: "April", open: 1000, closed: 300, total: 1900, pending: 600 },
            { name: "May", open: 300, closed: 200, total: 1000, pending: 500 },
            { name: "June", open: 200, closed: 1000, total: 1500, pending: 300 }
        ]
    },
    {
        id: "kas3",
        circle: "Sonmarg",
        tickets: [
            { name: "January", open: 1480, closed: 1200, total: 1228, pending: 480 },
            { name: "February", open: 1520, closed: 1108, total: 1100, pending: 460 },
            { name: "March", open: 868, closed: 967, total: 1506, pending: 590 },
            { name: "April", open: 1400, closed: 680, total: 1700, pending: 380 },
            { name: "May", open: 590, closed: 800, total: 1400, pending: 490 },
            { name: "June", open: 1397, closed: 1098, total: 989, pending: 350 }
        ]
    }
];


export const initialTrendData = [
    { name: "January", total: 1000, open: 200, closed: 450, pending: 350 },
    { name: "February", total: 500, open: 300, closed: 50, pending: 150 },
    { name: "March", total: 800, open: 200, closed: 300, pending: 300 },
    { name: "April", total: 1275, open: 475, closed: 500, pending: 300 },
    { name: "May", total: 240, open: 100, closed: 40, pending: 100 },
    { name: "June", total: 500, open: 150, closed: 100, pending: 150 }
]
export const trendData = [
    {
        id: "mah1",
        circle: "Mumbai",
        tickets: [
            { name: "January", open: 1520, closed: 1108, total: 800, pending: 460 },
            { name: "February", open: 868, closed: 967, total: 1506, pending: 590 },
            { name: "March", open: 1480, closed: 1200, total: 2100, pending: 480 },
            { name: "April", open: 1000, closed: 300, total: 1900, pending: 600 },
            { name: "May", open: 300, closed: 200, total: 1000, pending: 500 },
            { name: "June", open: 200, closed: 1000, total: 1500, pending: 300 }
        ]
    },
    {
        id: "mah2",
        circle: "Pune",
        tickets: [
            { name: "January", open: 1480, closed: 1200, total: 1228, pending: 480 },
            { name: "February", open: 1520, closed: 1108, total: 1100, pending: 460 },
            { name: "March", open: 868, closed: 967, total: 1506, pending: 590 },
            { name: "April", open: 1400, closed: 680, total: 1700, pending: 380 },
            { name: "May", open: 590, closed: 800, total: 1400, pending: 490 },
            { name: "June", open: 1397, closed: 1098, total: 989, pending: 350 }
        ]
    },
    {
        id: "mah3",
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
        id: "guj1",
        circle: "Surat",
        tickets: [
            { name: "January", open: 1480, closed: 1200, total: 1228, pending: 480 },
            { name: "February", open: 1520, closed: 1108, total: 1100, pending: 460 },
            { name: "March", open: 868, closed: 967, total: 1506, pending: 590 },
            { name: "April", open: 1400, closed: 680, total: 1700, pending: 380 },
            { name: "May", open: 590, closed: 800, total: 1400, pending: 490 },
            { name: "June", open: 1397, closed: 1098, total: 989, pending: 350 }
        ]
    },
    {
        id: "guj2",
        circle: "Ahemadabad",
        tickets: [
            { name: "January", open: 590, closed: 800, total: 1400, pending: 490 },
            { name: "February", open: 868, closed: 967, total: 1506, pending: 590 },
            { name: "March", open: 1397, closed: 1098, total: 989, pending: 350 },
            { name: "April", open: 1480, closed: 1200, total: 1228, pending: 480 },
            { name: "May", open: 1520, closed: 1108, total: 1100, pending: 460 },
            { name: "June", open: 1400, closed: 680, total: 1700, pending: 380 }
        ]
    }, {
        id: "guj3",
        circle: "Navsari",
        tickets: [
            { name: "January", open: 1520, closed: 1108, total: 800, pending: 460 },
            { name: "February", open: 868, closed: 967, total: 1506, pending: 590 },
            { name: "March", open: 1480, closed: 1200, total: 2100, pending: 480 },
            { name: "April", open: 1000, closed: 300, total: 1900, pending: 600 },
            { name: "May", open: 300, closed: 200, total: 1000, pending: 500 },
            { name: "June", open: 200, closed: 1000, total: 1500, pending: 300 }
        ]
    },
    {
        id: "kas1",
        circle: "Srinagar",
        tickets: [
            { name: "January", open: 590, closed: 800, total: 1400, pending: 490 },
            { name: "February", open: 868, closed: 967, total: 1506, pending: 590 },
            { name: "March", open: 1397, closed: 1098, total: 989, pending: 350 },
            { name: "April", open: 1480, closed: 1200, total: 1228, pending: 480 },
            { name: "May", open: 1520, closed: 1108, total: 1100, pending: 460 },
            { name: "June", open: 1400, closed: 680, total: 1700, pending: 380 }
        ]
    }, {
        id: "kas2",
        circle: "Gulmarg",
        tickets: [
            { name: "January", open: 1520, closed: 1108, total: 800, pending: 460 },
            { name: "February", open: 868, closed: 967, total: 1506, pending: 590 },
            { name: "March", open: 1480, closed: 1200, total: 2100, pending: 480 },
            { name: "April", open: 1000, closed: 300, total: 1900, pending: 600 },
            { name: "May", open: 300, closed: 200, total: 1000, pending: 500 },
            { name: "June", open: 200, closed: 1000, total: 1500, pending: 300 }
        ]
    },
    {
        id: "kas3",
        circle: "Sonmarg",
        tickets: [
            { name: "January", open: 1480, closed: 1200, total: 1228, pending: 480 },
            { name: "February", open: 1520, closed: 1108, total: 1100, pending: 460 },
            { name: "March", open: 868, closed: 967, total: 1506, pending: 590 },
            { name: "April", open: 1400, closed: 680, total: 1700, pending: 380 },
            { name: "May", open: 590, closed: 800, total: 1400, pending: 490 },
            { name: "June", open: 1397, closed: 1098, total: 989, pending: 350 }
        ]
    }
];

