import "./Widgets.scss";


const Widgets = ({ type }) => {
    let data;

    //temporary
    const amount = 100;
    const diff = 20;

    if (type === "user") {
        data = {
            title: "USERS",
            isMoney: false,
            link: "See all users",

        };
    }
    if (type === "order") {
        data = {
            title: "ORDERS",
            isMoney: false,
            link: "View all orders",

        };
    }
    if (type === "earning") {
        data = {
            title: "EARNINGS",
            isMoney: true,
            link: "View net earnings",
        };
    }
    if (type === "balance") {
        data = {
            title: "BALANCE",
            isMoney: true,
            link: "See details",

        };
    }


    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">
                    {data.isMoney && "$"} {amount}
                </span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    {diff} %
                </div>

            </div>
        </div>
    );
};

export default Widgets;