import { getProviders, signIn } from "next-auth/react"

export default function SignIn({ providers }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-2xl font-bold mb-4">Sign in to Kel's Gadget Hub</h1>
      {Object.values(providers).map((provider: any) => (
        <div key={provider.name}>
          <button
            className="px-4 py-2 bg-brown-600 text-white rounded-lg shadow"
            onClick={() => signIn(provider.id)}
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()
  return { props: { providers } }
}
