import { CardImage } from '@/components/Project'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/project')({
  component: CardImage ,
})


