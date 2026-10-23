export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            WhatsApp Sales Agent
          </h1>
          <p className="mt-2 text-gray-600">
            Turn WhatsApp conversations into customers and orders.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid gap-4 md:grid-cols-4">
          
          <div className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Customers</p>
            <p className="mt-2 text-3xl font-bold text-gray-900">0</p>
          </div>

          <div className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Orders</p>
            <p className="mt-2 text-3xl font-bold text-gray-900">0</p>
          </div>

          <div className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Sales</p>
            <p className="mt-2 text-3xl font-bold text-gray-900">
              ₦0
            </p>
          </div>

          <div className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Pending Orders</p>
            <p className="mt-2 text-3xl font-bold text-gray-900">0</p>
          </div>

        </div>

        {/* Main sections */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">

          {/* AI Agent */}
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              🤖 AI Sales Agent
            </h2>

            <p className="mt-2 text-gray-600">
              Your AI assistant will answer customer questions,
              recommend products and help capture orders.
            </p>

            <button className="mt-5 rounded-lg bg-green-600 px-5 py-3 font-medium text-white hover:bg-green-700">
              Test AI Agent
            </button>
          </div>

          {/* Products */}
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              🛒 Products
            </h2>

            <p className="mt-2 text-gray-600">
              Add your products, prices and availability so the AI
              can give customers accurate information.
            </p>

            <button className="mt-5 rounded-lg bg-gray-900 px-5 py-3 font-medium text-white hover:bg-gray-800">
              Manage Products
            </button>
          </div>

          {/* Customers */}
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              👥 Customers
            </h2>

            <p className="mt-2 text-gray-600">
              Keep track of customers, conversations and previous
              orders.
            </p>

            <button className="mt-5 rounded-lg bg-gray-900 px-5 py-3 font-medium text-white hover:bg-gray-800">
              View Customers
            </button>
          </div>

          {/* Orders */}
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              📦 Orders
            </h2>

            <p className="mt-2 text-gray-600">
              See pending, confirmed and completed customer orders.
            </p>

            <button className="mt-5 rounded-lg bg-gray-900 px-5 py-3 font-medium text-white hover:bg-gray-800">
              View Orders
            </button>
          </div>

        </div>

      </div>
    </main>
  );
}