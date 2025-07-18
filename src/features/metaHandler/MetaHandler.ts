import { useMatches } from 'react-router-dom';
import { useEffect } from 'react';
import type { RouteMeta } from '@shared/types';
import { useTranslation } from 'react-i18next';

export const MetaHandler = () => {
  const matches = useMatches();
  const { t } = useTranslation();

  const matchWithMeta = matches
    .slice()
    .reverse()
    .find((m) => (m as { data?: { meta?: RouteMeta } })?.data?.meta) as
    | { data?: { meta?: RouteMeta } }
    | undefined;
  const meta: RouteMeta = matchWithMeta?.data?.meta || {};

  useEffect(() => {
    document.title = meta.title ? t(meta.title) : t('tasks.title');

    if (meta.description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', 'description');
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', t(meta.description));
    }
  }, [meta.title, meta.description, t]);

  return null;
};
