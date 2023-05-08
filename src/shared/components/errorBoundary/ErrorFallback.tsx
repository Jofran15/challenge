export const ErrorFallback = () => {
  return (
    <div>
      <h2>An error has occurred!</h2>
      <button type="button" onClick={() => window.location.reload()}>
        Reload the page
      </button>
    </div>
  );
};
