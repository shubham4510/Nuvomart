import { Column } from "react-table"
import TableHOC from "./TableHOC"

const columns:Column<DataType>[] = [
    {
        Header:"Id",
        accessor:"id",
    },
    {
        Header:"Quantity",
        accessor:"quantity",
    },
    {
        Header:"Discount",
        accessor:"discount",
    },
    {
        Header:"Amount",
        accessor:"amount",
    },
    {
        Header:"Id",
        accessor:"id",
    },
    {
        Header:"Status",
        accessor:"status",
    },
]
const DashboardTable = ({data=[]}:{data:DataType[]}) => {

    interface DataType{
        id:string,
        quantity:number,
        discount:number,
        amount:number,
        status:string,
    }


  return (
    TableHOC<string>(columns,[],"transactionBox","Top Transaction")
)
}

export default DashboardTable