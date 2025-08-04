import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Volunteer Application - Friern Barnet Community Library',
  description: 'Join our volunteer team at Friern Barnet Community Library. Apply now to help support literacy and community engagement.',
}

export default function VolunteerApplyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 