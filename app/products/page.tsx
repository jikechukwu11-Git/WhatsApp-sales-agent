import Link from "next/link";
export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-6xl">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Products
          </h1>

          <p className="mt-2 text-gray-600">
            Manage the products your WhatsApp Sales Agent can sell.
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">
            Your Products
          </h2>

          <p className="mt-2 text-gray-600">
            You haven't added any products yet.
          </p>

          <Link
  href="/products/manage"
  className="mt-5 inline-block rounded-lg bg-gray-900 px-5 py-3 font-medium text-white hover:bg-gray-800"
>
  Manage Products
</Link>
        </div>

      </div>
    </main>
  );
}