import { ColumnDef } from "@tanstack/react-table";
import Delete from "@/components/custom ui/Delete";
import Link from "next/link";
import Update from "@/components/custom ui/Update";

export const columns: ColumnDef<ContactType>[] = [
  {
    accessorKey: "invisibleColumn1",
    header: "",
    cell: ({ row }) => (
      <Link href={`/accessibility-services/${row.original._id}`} className="invisible-column">
        Hidden Content
      </Link>
    ),
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => (
      <Link
        href={`/accessibility-services/${row.original._id}`}
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
        href={`/accessibility-services/${row.original._id}`}
        className="hover:text-red-1"
      >
        {row.original.field4}
      </Link>
    ),
  },
  {
    accessorKey: "Input",
    header: "Input",
    cell: ({ row }) => (
      <Link
        href={`/accessibility-services/${row.original._id}`}
        className="hover:text-red-1"
      >
        {row.original.field5}
      </Link>
    ),
  },
  {
    accessorKey: "Input",
    header: "Input",
    cell: ({ row }) => (
      <Link
        href={`/accessibility-services/${row.original._id}`}
        className="hover:text-red-1"
      >
        {row.original.field6}
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
        {/* <Delete item="accessibility-services" id={row.original._id} /> */}
        <Update item="accessibility-services" id={row.original._id} />
      </div>
    ),
  },
];

export default columns;
