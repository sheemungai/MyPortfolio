import Skill from '@/components/Skill'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/skill')({
  component: Skill,
})


