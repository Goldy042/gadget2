import { withAuth } from "next-auth/middleware"

export default withAuth({
  callbacks: {
    authorized: ({ token }) => token?.role === "admin", // only admins
  },
})

export const config = {
  matcher: ["/admin/:path*"], // protect all admin routes
}
