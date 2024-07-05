// import { DataTable } from "@/components/custom ui/DataTable"
// import { columns } from "@/components/orderItems/OrderItemsColums"

// const OrderDetails = async ({ params }: { params: { orderId: string } }) => {
//   const res = await fetch(`${process.env.ADMIN_DASHBOARD_URL}/api/orders/${params.orderId}`)
//   const { orderDetails, customer } = await res.json()

//   const { street, city, state, postalCode, country } = orderDetails.shippingAddress

//   return (
//     <div className="flex flex-col p-10 gap-5">
//       <p className="text-base-bold">
//         Order ID: <span className="text-base-medium">{orderDetails._id}</span>
//       </p>
//       <p className="text-base-bold">
//         Customer name: <span className="text-base-medium">{customer.name}</span>
//       </p>
//       <p className="text-base-bold">
//         Shipping address: <span className="text-base-medium">{street}, {city}, {state}, {postalCode}, {country}</span>
//       </p>
//       <p className="text-base-bold">
//         Total Paid: <span className="text-base-medium">${orderDetails.totalAmount}</span>
//       </p>
//       <p className="text-base-bold">
//         Shipping rate ID: <span className="text-base-medium">{orderDetails.shippingRate}</span>
//       </p>
//       <DataTable columns={columns} data={orderDetails.products} searchKey="product" />
//     </div>
//   )
// }

// export default OrderDetails

"use client"

import { useEffect, useState } from "react"

import Loader from "@/components/custom ui/Loader"
import TeamForm from "@/components/teams/TeamForm"
import CollectionForm from "@/components/collections/CollectionForm"

const TeamDetails = ({ params }: { params: { teamId: string } }) => {
  const [loading, setLoading] = useState(true)
  const [teamDetails, setTeamDetails] = useState<CollectionType | null>(null)

  const getTeamDetails = async () => {
    try {
      const res = await fetch(`/api/teams/${params.teamId}`, {
        method: "GET"
      })
      const data = await res.json()
      setTeamDetails(data)
      setLoading(false)
    } catch (err) {
      console.log("[teamId_GET]", err)
    }
  }

  useEffect(() => {
    getTeamDetails()
  }, [])

  return loading ? <Loader /> : (
    <TeamForm initialData={teamDetails} />
  )
}

export default TeamDetails