import type { ReactNode } from 'react'
import Nav from './Nav'

interface LayoutProps {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
        <Nav />
        <main>{children}</main>
    </>
  )
}

export default Layout
