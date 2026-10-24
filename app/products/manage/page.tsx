"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type Product = {
  _id: string;
  name: string;
  price: number;
  stock: number;
};

export default function ManageProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [loading, setLoading] = useState(false);

  // Load from MongoDB
  async function fetchProducts() {
    const res = await fetch("/api/products");
    const data = await res.json();
    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  async function addProduct(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.trim(),
        price: Number(price),
        stock: Number(stock),
      }),
    });

    if (res.ok) {
      setName("");
      setPrice("");
      setStock("");
      fetchProducts(); // Reload from DB
    }
    setLoading(false);
  }

  async function deleteProduct(id: string) {
    await fetch(`/api/products?id=${id}`, { method: "DELETE" });
    fetchProducts();
  }

  return (
    <main style={{ maxWidth: 1000, margin: "40px auto", padding: 20 }}>
      <Link href="/" style={{ color: "#2563eb" }}>← Back to Dashboard</Link>
      <h1 style={{ fontSize: 30, marginTop: 24 }}>Manage Products</h1>
      <p style={{ color: "#666", marginBottom: 24 }}>
        Products are now saved permanently in MongoDB.
      </p>

      <form onSubmit={addProduct} style={{ display: "grid", gap: 12, maxWidth: 500, marginBottom: 32 }}>
        <input placeholder="Product name" value={name} onChange={(e) => setName(e.target.value)} required style={{ padding: 12 }} />
        <input type="number" placeholder="Price in naira (₦)" value={price} onChange={(e) => setPrice(e.target.value)} min="0.01" step="0.01" required style={{ padding: 12 }} />
        <input type="number" placeholder="Quantity in stock" value={stock} onChange={(e) => setStock(e.target.value)} min="0" step="1" required style={{ padding: 12 }} />
        <button type="submit" disabled={loading} style={{ padding: 12, background: "#15803d", color: "white", border: 0, borderRadius: 6, cursor: "pointer" }}>
          {loading ? "Saving..." : "Add Product"}
        </button>
      </form>

      <h2>Your Products ({products.length})</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead><tr><th style={{ padding: 12, borderBottom: "1px solid #ddd" }}>Product</th><th style={{ padding: 12, borderBottom: "1px solid #ddd" }}>Price</th><th style={{ padding: 12, borderBottom: "1px solid #ddd" }}>Stock</th><th style={{ padding: 12, borderBottom: "1px solid #ddd" }}>Action</th></tr></thead>
        <tbody>
          {products.map((p) => (
            <tr key={p._id}>
              <td style={{ padding: 12, borderBottom: "1px solid #eee" }}>{p.name}</td>
              <td style={{ padding: 12, borderBottom: "1px solid #eee" }}>₦{p.price.toLocaleString("en-NG")}</td>
              <td style={{ padding: 12, borderBottom: "1px solid #eee" }}>{p.stock}</td>
              <td style={{ padding: 12, borderBottom: "1px solid #eee" }}>
                <button onClick={() => deleteProduct(p._id)} style={{ color: "#b91c1c", border: "1px solid #fecaca", padding: "6px 10px" }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{ color: "green", fontSize: 13, marginTop: 20 }}>✅ MongoDB Connected: Products will NOT reset after refresh!</p>
    </main>
  );
}