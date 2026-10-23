import Link from "next/link";

export default function ManageProductsPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-4xl">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Manage Products
          </h1>

          <p className="mt-2 text-gray-600">
            Add and manage the products your WhatsApp Sales Agent can sell.
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm">

          <h2 className="text-xl font-semibold text-gray-900">
            Add a Product
          </h2>

          <div className="mt-6 space-y-4">

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Product Name
              </label>

              <input
                type="text"
                placeholder="e.g. Samsung Galaxy A15"
                className="mt-1 w-full rounded-lg border border-gray-300 p-3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Price (₦)
              </label>

              <input
                type="number"
                placeholder="e.g. 250000"
                className="mt-1 w-full rounded-lg border border-gray-300 p-3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>

              <textarea
                placeholder="Describe the product..."
                rows={4}
                className="mt-1 w-full rounded-lg border border-gray-300 p-3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Stock Quantity
              </label>

              <input
                type="number"
                placeholder="e.g. 10"
                className="mt-1 w-full rounded-lg border border-gray-300 p-3"
              />
            </div>

            <button
              type="button"
              className="rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white"
            >
              Add Product
            </button>

          </div>
        </div>

        <div className="mt-6">
          <Link
            href="/products"
            className="text-blue-600 hover:underline"
          >
            ← Back to Products
          </Link>
        </div>

      </div>
    </main>
  );
}