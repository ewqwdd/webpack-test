import { lazy } from 'react'

export const RootAsync = lazy(async () => await import('./Root'))
