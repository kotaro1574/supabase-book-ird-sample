import { ReactNode } from 'react'
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'

const ErrorFallback = (props: FallbackProps) => (
  <div>
    <p>Something went wrong:</p>
    <pre>{props.error.message}</pre>
  </div>
)

type Props = {
  children: ReactNode
}

export const LayoutErrorBoundary = ({ children }: Props) => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
)
