import { ColumnDef } from "@tanstack/react-table";
import Delete from "../custom ui/Delete";
import Link from "next/link";
import Update from "../custom ui/Update";

export const columns: ColumnDef<ContactType>[] = [
  {
    accessorKey: "invisibleColumn1",
    header: "",
    cell: ({ row }) => (
      <Link href={`/contactus/${row.original._id}`} className="invisible-column">
        Hidden Content
      </Link>
    ),
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => (
      <Link
        href={`/contactus/${row.original._id}`}
        className="hover:text-red-1"
      >
        {row.original.title}
      </Link>
    ),
  },
  {
    accessorKey: "Phone",
    header: "Phone",
    cell: ({ row }) => (
      <Link
        href={`/contactus/${row.original._id}`}
        className="hover:text-red-1"
      >
        {row.original.field1}
      </Link>
    ),
  },
  {
    accessorKey: "Email",
    header: "Email",
    cell: ({ row }) => (
      <Link
        href={`/contactus/${row.original._id}`}
        className="hover:text-red-1"
      >
        {row.original.field2}
      </Link>
    ),
  },
  {
    accessorKey: "Address",
    header: "Address",
    cell: ({ row }) => (
      <Link
        href={`/contactus/${row.original._id}`}
        className="hover:text-red-1"
      >
        {row.original.field3}
      </Link>
    ),
  },
  // {
  //   accessorKey: "products",
  //   header: "Index",
  //   cell: ({ row }) => <p>0</p>,
  // },
  {
    id: "actions",
    cell: ({ row }) => (
      <div className="flex space-x-2">
        {/* <Delete item="contactus" id={row.original._id} /> */}
        <Update item="contactus" id={row.original._id} />
      </div>
    ),
  },
];

export default columns;
