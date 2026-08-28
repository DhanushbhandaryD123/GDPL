// Fires once, the moment the intro SplashScreen has fully finished (its
// exit animation included) and the real page becomes visible to the user.
// Pages use this instead of guessing the splash's duration, so an
// entrance animation timed to page-load doesn't play out hidden behind
// the splash overlay and finish before the user ever sees it.
type Listener = () => void;

const listeners = new Set<Listener>();
let hasFired = false;

export function markSplashComplete() {
  if (hasFired) return;
  hasFired = true;
  listeners.forEach((fn) => fn());
  listeners.clear();
}

// Calls `fn` once the splash has completed. If it already has (e.g. the
// user navigated here client-side after the first page load), `fn` runs
// immediately since nothing is blocking the view.
export function onSplashComplete(fn: Listener): () => void {
  if (hasFired) {
    fn();
    return () => {};
  }
  listeners.add(fn);
  return () => listeners.delete(fn);
}
