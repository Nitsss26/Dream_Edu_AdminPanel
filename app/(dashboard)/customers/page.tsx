// import { DataTable } from '@/components/custom ui/DataTable'
// import { columns } from '@/components/customers/CustomerColumns'
// import { Separator } from '@/components/ui/separator'
// import Customer from '@/lib/models/Customer'
// import { connectToDB } from '@/lib/mongoDB'

// const Customers = async () => {
//   await connectToDB()

//   const customers = await Customer.find().sort({ createdAt: "desc" })

//   return (
//     <div className='px-8 py-9'>
//       <p className='text-heading2-bold'>Customers</p>
//       <Separator className='bg-grey-1 my-5' />
//       <DataTable columns={columns} data={customers} searchKey='name' />
//     </div>
//   )
// }

// export const dynamic = "force-dynamic";

// export default Customers
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";

import { columns } from "@/components/collections/CollectionColumns";
import { DataTable } from "@/components/custom ui/DataTable";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Loader from "@/components/custom ui/Loader";

const Collections = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [collections, setCollections] = useState([]);

  const getCollections = async () => {
    try {
      const res = await fetch("/api/collections", {
        method: "GET",
      });
      const data = await res.json();
      setCollections(data);
      setLoading(false);
    } catch (err) {
      console.log("[collections_GET]", err);
    }
  };

  useEffect(() => {
    getCollections();
  }, []);

  return loading ? <Loader /> : (
    <div className="px-8 py-9">
      <div className="flex items-center justify-between">
        <p className="text-heading2-bold">Collections</p>
        <Button className="bg-blue-1 text-white" onClick={() => router.push("/collections/new")}>
          <Plus className="h-4 w-4 mr-2" />
          Create Collection
        </Button>
      </div>
      <Separator className="bg-grey-1 my-4" />
      <DataTable columns={columns} data={collections} searchKey="title" />
    </div>
  );
};

export default Collections;
