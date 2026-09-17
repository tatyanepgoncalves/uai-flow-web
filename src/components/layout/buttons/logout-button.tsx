'use client'

import { LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import useUserLogout from '@/hooks/cadastrar/use-user-logout'

export default function LogoutButton() {
  const { handleLogout, isLoggingOut } = useUserLogout()

  return (
    <Button
      className="w-full gap-2"
      disabled={isLoggingOut}
      onClick={handleLogout}
      type="button"
      variant="destructive"
    >
      <LogOut />
      <span className="group-data-[collapsible=icon]:sr-only">Sair</span>
    </Button>
  )
}
