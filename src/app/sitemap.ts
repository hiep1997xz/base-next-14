import { languages } from '@/utils/i18n/settting';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const array: MetadataRoute.Sitemap = [];
  languages.forEach((lng) => {
    array.push({
      url: `https://example.com/${lng}`,
      lastModified: new Date()
    });
  });
  return array;
}
