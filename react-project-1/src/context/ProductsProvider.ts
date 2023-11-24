export type ProductType = {
  sku: string;
  name: string;
  price: number;
};

const initState: ProductType[] = [
  {
    sku: "item001",
    name: "Widget",
    price: 9.99,
  },
  {
    sku: "item002",
    name: "Gadget",
    price: 12.99,
  },
  {
    sku: "item003",
    name: "Gizmo",
    price: 14.99,
  },
];

export type UseProductsContextType = {}
