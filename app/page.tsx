"use client"

import { useWorldAuth } from "@radish-la/world-auth"
import { Button } from "@worldcoin/mini-apps-ui-kit-react"
import Brr from "./Brr"
import NavBar from "@/components/Navigation/NavBar"

export default function Home() {
  const { user, isMiniApp, isConnected, signIn } = useWorldAuth({
    onWrongEnvironment() {
      // something to do when minikit is not installed
      alert("Hey. This only works inside World App")
    },
  })

  return (
    <main className="flex min-h-screen gap-2 flex-col items-center justify-center p-10">
      <h1 className="text-4xl text-center font-bold">You've been World'd!</h1>
      <div className="max-w-xs mt-8 w-full mx-auto">
        <Button onClick={signIn} fullWidth>
          Connect Wallet
        </Button>

      </div>
    </main>
  )
}
