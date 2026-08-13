import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * Catches render-time errors anywhere in the tree so a single failing
 * component (e.g. a third-party script) never blanks the whole page.
 */
class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    if (import.meta.env.DEV) {
      console.error("Uncaught error:", error, info);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-5 text-center text-foreground">
          <p className="label-eyebrow">Error</p>
          <h1 className="text-2xl font-medium tracking-[-0.025em]">
            Something went wrong
          </h1>
          <p className="max-w-sm text-[13px] leading-[1.625] text-foreground/60">
            The page failed to load correctly. Please refresh to try again.
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="h-9 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-all active:translate-y-px"
          >
            Refresh
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
