import React from 'react';

export default function CustomLoadable(opts) {
  const LazyComponent = React.lazy(opts.loader);

  return (props) => (
    <React.Suspense fallback={null}>
      <LazyComponent {...props} />
    </React.Suspense>
  );
}
