import {
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { IoFilterOutline } from "react-icons/io5";
import img1 from "../../assets/images/t1.png";
import img2 from "../../assets/images/t2.png";
import img3 from "../../assets/images/t3.png";

interface Transaction {
  service: string;
  amount: string;
  totalAmount: string;
  status: string;
  paymentMethod: string;
  transactionNo: string;
  date: string;
  image: string;
}

const columnHelper = createColumnHelper<Transaction>();

const columns = [
  columnHelper.accessor("service", {
    header: "Service",
    cell: info => {
      const [serviceName, serviceNumber] = info.getValue().split("\n");
      const image = info.row.original.image;
      return (
        <div className="flex items-center space-x-3">
          <img src={image} alt="Service" className="w-10 h-10 rounded-full" />{" "}
          <div>
            <div>{serviceName}</div>
            <div className="text-gray-500 text-sm">{serviceNumber}</div>
          </div>
        </div>
      );
    },
  }),
  columnHelper.accessor("amount", {
    header: "Amount",
    cell: info => info.getValue(),
  }),
  columnHelper.accessor("totalAmount", {
    header: "Total Amount",
    cell: info => info.getValue(),
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: info => (
      <span
        className={
          info.getValue() === "Successful"
            ? "text-green-500"
            : info.getValue() === "Failed"
            ? "text-red-500"
            : "text-orange-200"
        }
      >
        {info.getValue()}
      </span>
    ),
  }),
  columnHelper.accessor("paymentMethod", {
    header: "Payment Method",
    cell: info => <p className="text-[#4C689E]">{info.getValue()}</p>,
  }),

  columnHelper.accessor("transactionNo", {
    header: "Transaction No",
    cell: info => {
      const transactionNo = info.getValue();
      const date = info.row.original.date;
      return (
        <div>
          <div>{transactionNo}</div>
          <div className="text-gray-500 text-xs">{date}</div>
        </div>
      );
    },
  }),
  columnHelper.display({
    header: "Actions",
    cell: () => (
      <button className="text-[#4169E1] bg-[#EFF3FB] p-1 px-2 rounded-lg">
        Open
      </button>
    ),
  }),
];

const data: Transaction[] = [
  {
    service: "Mtn Airtime VTU\n09068562949",
    amount: "₦100.00",
    totalAmount: "₦100.00",
    status: "Initiated",
    paymentMethod: "Transfer",
    transactionNo: "17045621860850336938179613",
    date: "6th January, 2024, 06:29PM",
    image: img1,
  },
  {
    service: "Airtel DATA VTU\n07089075584",
    amount: "₦2000.00",
    totalAmount: "₦100.00",
    status: "Successful",
    paymentMethod: "Wallet",
    transactionNo: "17045621860850336938179614",
    date: "6th January, 2024, 06:30PM",
    image: img2,
  },
  {
    service: "Airtel DATA VTU\n07089075584",
    amount: "₦2000.00",
    totalAmount: "₦100.00",
    status: "Failed",
    paymentMethod: "Wallet",
    transactionNo: "17045621860850336938179614",
    date: "6th January, 2024, 06:30PM",
    image: img3,
  },
  {
    service: "Airtel DATA VTU\n07089075584",
    amount: "₦2000.00",
    totalAmount: "₦100.00",
    status: "Initiated",
    paymentMethod: "Wallet",
    transactionNo: "17045621860850336938179614",
    date: "6th January, 2024, 06:30PM",
    image: img1,
  },
  {
    service: "Airtel DATA VTU\n07089075584",
    amount: "₦2000.00",
    totalAmount: "₦100.00",
    status: "Successful",
    paymentMethod: "Wallet",
    transactionNo: "17045621860850336938179614",
    date: "6th January, 2024, 06:30PM",
    image: img2,
  },
  {
    service: "Airtel DATA VTU\n07089075584",
    amount: "₦2000.00",
    totalAmount: "₦100.00",
    status: "Failed",
    paymentMethod: "Wallet",
    transactionNo: "17045621860850336938179614",
    date: "6th January, 2024, 06:30PM",
    image: img3,
  },
  {
    service: "Airtel DATA VTU\n07089075584",
    amount: "₦2000.00",
    totalAmount: "₦100.00",
    status: "Initiated",
    paymentMethod: "Wallet",
    transactionNo: "17045621860850336938179614",
    date: "6th January, 2024, 06:30PM",
    image: img1,
  },
  {
    service: "Airtel DATA VTU\n07089075584",
    amount: "₦2000.00",
    totalAmount: "₦100.00",
    status: "Successful",
    paymentMethod: "Wallet",
    transactionNo: "17045621860850336938179614",
    date: "6th January, 2024, 06:30PM",
    image: img2,
  },
  {
    service: "Airtel DATA VTU\n07089075584",
    amount: "₦2000.00",
    totalAmount: "₦100.00",
    status: "Failed",
    paymentMethod: "Wallet",
    transactionNo: "17045621860850336938179614",
    date: "6th January, 2024, 06:30PM",
    image: img3,
  },
];

const TransactionTable: React.FC = () => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-9 ml-64">
      <span className="bg-[#D7E1F4] p-2 w-36 flex items-center gap-1 text-[#6882B6] rounded-xl">
        <IoFilterOutline />
        Filter
      </span>
      <table className="min-w-full bg-white  rounded">
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id} className="">
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  className="p-3 text-left text-sm font-semibold text-gray-700"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} className="border-t">
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="p-3 text-sm text-gray-700">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
