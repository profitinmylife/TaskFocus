import { useMatches } from 'react-router-dom';
import { useEffect } from 'react';

export const MetaHandler = () => {
  const matches = useMatches();

  const matchWithMeta = [...matches]
    .reverse()
    .find(
      (m) => (m as { data?: { meta?: any } })?.data?.meta,
    );
  const meta =
    (matchWithMeta &&
      (matchWithMeta as { data: { meta: any } }).data
        .meta) ||
    {};

  useEffect(() => {
    document.title = meta.title || 'Task Manager';

    if (meta.description) {
      let tag = document.querySelector(
        'meta[name="description"]',
      );
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', 'description');
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', meta.description);
    }
  }, [meta.title, meta.description]);

  return null;
};
