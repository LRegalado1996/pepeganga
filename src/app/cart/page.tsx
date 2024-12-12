import { CreateOrderButton, OrderSummary, ProductInCart, Title } from "@/components";

export default function CartPage() {
  return (
    <div className="flex flex-col justify-center items-center m-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {/* carrito */}
        <div className="flex flex-col">
          <Title name="Carrito" />
          {/* Items */}
          <ProductInCart />
        </div>

        {/* checkout */}
        <div className="bg-white rounded-xl shadow-xl p-7 h-fit">
          <h2 className="text-2xl mb-2">Resumen de orden</h2>
          <OrderSummary />

          <CreateOrderButton />
        </div>
      </div>
    </div>
  );
}
