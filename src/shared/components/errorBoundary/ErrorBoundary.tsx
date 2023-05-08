import React from "react";
import { ReactNode } from "react";

interface Props {
  fallback: ReactNode;
  children: ReactNode;
}

class ErrorBoundary extends React.Component<Props, { hasError: boolean }> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
