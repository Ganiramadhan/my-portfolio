import { Component, type ErrorInfo, type ReactNode } from 'react'
import { FiRefreshCcw } from 'react-icons/fi'

type ErrorBoundaryProps = {
  children: ReactNode
}

type ErrorBoundaryState = {
  hasError: boolean
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Application render error', error, info)
  }

  render() {
    if (!this.state.hasError) return this.props.children

    return (
      <main className="grid min-h-dvh place-items-center bg-[color:var(--color-app)] px-6 text-[color:var(--color-ink)]">
        <section className="w-full max-w-md rounded-2xl border border-[color:var(--color-line)] bg-white/82 p-6 text-center shadow-[var(--shadow-lg)] backdrop-blur-xl dark:bg-slate-950/82">
          <p className="text-xs font-black uppercase tracking-[.18em] text-brand-600 dark:text-brand-300">
            Something went wrong
          </p>
          <h1 className="mt-3 text-2xl font-black">The portfolio could not load this view.</h1>
          <p className="mt-3 text-sm leading-7 text-muted">
            Please refresh the page. If the issue persists, contact Gani directly from the contact page.
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 text-sm font-bold text-white transition hover:bg-brand-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/20 dark:bg-brand-400 dark:text-slate-950"
          >
            <FiRefreshCcw />
            Refresh page
          </button>
        </section>
      </main>
    )
  }
}
