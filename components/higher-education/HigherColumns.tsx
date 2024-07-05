import { ColumnDef } from "@tanstack/react-table";
import Delete from "@/components/custom ui/Delete";
import Link from "next/link";
import Update from "@/components/custom ui/Update";

export const columns: ColumnDef<ContactType>[] = [
  {
    accessorKey: "invisibleColumn1",
    header: "",
    cell: ({ row }) => (
      <Link href={`/higher-education/${row.original._id}`} className="invisible-column">
        Hidden Content
      </Link>
    ),
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => (
      <Link
        href={`/higher-education/${row.original._id}`}
        className="hover:text-red-1"
      >
        {row.original.title}
      </Link>
    ),
  },
  {
    accessorKey: "Input",
    header: "Input",
    cell: ({ row }) => (
      <Link
        href={`/higher-education/${row.original._id}`}
        className="hover:text-red-1"
      >
        {row.original.field1}
      </Link>
    ),
  },
  {
    accessorKey: "Input",
    header: "Input",
    cell: ({ row }) => (
      <Link
        href={`/higher-education/${row.original._id}`}
        className="hover:text-red-1"
      >
        {row.original.field6}
      </Link>
    ),
  },
  {
    accessorKey: "Input",
    header: "Input",
    cell: ({ row }) => (
      <Link
        href={`/higher-education/${row.original._id}`}
        className="hover:text-red-1"
      >
        {row.original.field7}
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
        {/* <Delete item="higher-education" id={row.original._id} /> */}
        <Update item="higher-education" id={row.original._id} />
      </div>
    ),
  },
];

export default columns;
