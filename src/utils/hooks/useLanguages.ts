'use client';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/utils/i18n/client';
import { Languages } from '@/@types/common';

export const useLanguages = () => {
  const lng = useParams()?.lang as unknown as Languages;
  const { t: swLanguages } = useTranslation(lng);

  return {
    lng,
    swLanguages
  };
};
