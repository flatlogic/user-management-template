import React from 'react';

export default function LazyLoad(opts) {
  const LazyComponent = React.lazy(opts.loader);

  return (props) => (
    <React.Suspense fallback={null}>
      <LazyComponent {...props} />
    </React.Suspense>
  );
}
