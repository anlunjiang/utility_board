import classes from "./ItemDate.module.css"

const ItemDate = (props) => {
    const year = props.date.getFullYear()
    const month = props.date.toLocaleString("en-US", {month: "long"})
    const day = props.date.toLocaleString("en-US", {day: "2-digit"})

    return (
        <div className={classes["item-date"]}>
            <div className={classes["itemDate__month"]}>{month}</div>
            <div className={classes["itemDate__year"]}>{year}</div>
            <div className={classes["itemDate__day"]}>{day}</div>
        </div>
    )
}

export default ItemDate;