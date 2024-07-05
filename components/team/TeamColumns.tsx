import { ColumnDef } from "@tanstack/react-table";
import Delete from "@/components/custom ui/Delete";
import Link from "next/link";
import Update from "@/components/custom ui/Update";

export const columns: ColumnDef<ContactType>[] = [
  {
    accessorKey: "invisibleColumn1",
    header: "",
    cell: ({ row }) => (
      <Link href={`/team/${row.original._id}`} className="invisible-column">
        Hidden Content
      </Link>
    ),
  },
  {
    accessorKey: "invisibleColumn2",
    header: "",
    cell: ({ row }) => (
      <Link href={`/team/${row.original._id}`} className="invisible-column">
        Hidden Content
      </Link>
    ),
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => (
      <Link
        href={`/team/${row.original._id}`}
        className="hover:text-red-1"
      >
        {row.original.field1}
      </Link>
    ),
  },
  {
    accessorKey: "Name",
    header: "Name",
    cell: ({ row }) => (
      <Link
        href={`/team/${row.original._id}`}
        className="hover:text-red-1"
      >
        {row.original.field4}
      </Link>
    ),
  },
  {
    accessorKey: "Designation",
    header: "Designation",
    cell: ({ row }) => (
      <Link
        href={`/team/${row.original._id}`}
        className="hover:text-red-1"
      >
        {row.original.field5}
      </Link>
    ),
  },
  // {
  //   accessorKey: "Address",
  //   header: "Address",
  //   cell: ({ row }) => (
  //     <Link
  //       href={`/team/${row.original._id}`}
  //       className="hover:text-red-1"
  //     >
  //       {row.original.field3}
  //     </Link>
  //   ),
  // },
  // {
  //   accessorKey: "products",
  //   header: "Index",
  //   cell: ({ row }) => <p>0</p>,
  // },
  {
    id: "actions",
    cell: ({ row }) => (
      <div className="flex space-x-2">
        {/* <Delete item="team" id={row.original._id} /> */}
        <Update item="team" id={row.original._id} />
      </div>
    ),
  },
];

export default columns;
