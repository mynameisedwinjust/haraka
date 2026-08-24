import { createFileRoute } from '@tanstack/react-router'
import { Studio } from 'sanity'
import config from '../sanity/sanity.config'

export const Route = createFileRoute('/admin')({
  component: AdminPage,
})

function AdminPage() {
  return (
    <div style={{ height: '100vh', width: '100vw', position: 'absolute', top: 0, left: 0, zIndex: 9999 }}>
      <Studio config={config} />
    </div>
  )
}
