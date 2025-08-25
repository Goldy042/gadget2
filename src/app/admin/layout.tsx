import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white/10 backdrop-blur-md text-white p-6 shadow-xl">
        <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>
        <nav className="space-y-4">
          <Link href="/admin/products">Products</Link>
          <Link href="/admin/orders">Orders</Link>
          <Link href="/admin/users">Users</Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 bg-gradient-to-br from-brown-900 via-white/5 to-brown-700 text-white">
        {children}
      </main>
    </div>
  )
}
