type ContactType = {
  _id: string;
  title: string;
  description: string;
  image: string;
  field1: string,
  field2: string,
  field3: string,
  field4: string,
  field5: string,
  field6: string,
  field7: string,
  field8: string,
  field9: string,
  products: ProductType[];
}

type OneType = {
  _id: string;
  title: string;
  description1: string;
  description2: string;
  description3: string;
  description4: string;
  description5: string;
  description6: string;
  description7: string;
  description8: string;
  description9: string;
  description10: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  image6: string;
  image7: string;
  image8: string;
  image9: string;
  image10: string;
  field1: string,
  field2: string,
  field3: string,
  field4: string,
  field5: string,
  field6: string,
  field7: string,
  field8: string,
  field9: string,
  field10: string,
  field11: string,
  field12: string,
  field13: string,
  field14: string,
  field15: string,
  field16: string,
  field17: string,
  field18: string,
  products: ProductType[];
}

type ProductType = {
  _id: string;
  title: string;
  description: string;
  media: [string];
  category: string;
  collections: [CollectionType];
  tags: [string];
  sizes: [string];
  colors: [string];
  price: number;
  expense: number;
  createdAt: Date;
  updatedAt: Date;
}

// type OrderColumnType = {
//   _id: string;
//   customer: string;
//   products: number;
//   totalAmount: number;
//   createdAt: string;
// }

// type OrderItemType = {
//   product: ProductType
//   color: string;
//   size: string;
//   quantity: number;
// }

// type CustomerType = {
//   clerkId: string;
//   name: string;
//   email: string;
// }