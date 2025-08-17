'use client'

import React from 'react'
import { CheckCircle } from 'lucide-react'
import { Button, Card } from '@/components/ui'

interface SuccessCardProps {
  title: string
  message: string
  additionalInfo?: string
  primaryAction?: {
    label: string
    href: string
  }
  secondaryAction?: {
    label: string
    href: string
  }
  className?: string
}

export function SuccessCard({
  title,
  message,
  additionalInfo,
  primaryAction,
  secondaryAction,
  className = ''
}: SuccessCardProps) {
  return (
    <div className={className}>
      <Card className="p-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold mb-4 text-gray-900">
            {title}
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            {message}
          </p>
          {additionalInfo && (
            <p className="text-gray-600 mb-8">
              {additionalInfo}
            </p>
          )}
          {(primaryAction || secondaryAction) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {primaryAction && (
                <Button asChild>
                  <a href={primaryAction.href}>{primaryAction.label}</a>
                </Button>
              )}
              {secondaryAction && (
                <Button variant="outline" asChild>
                  <a href={secondaryAction.href}>{secondaryAction.label}</a>
                </Button>
              )}
            </div>
          )}
        </div>
      </Card>
    </div>
  )
} 