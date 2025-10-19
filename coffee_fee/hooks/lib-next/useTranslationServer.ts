import path from 'path';
import fs from 'fs/promises';
import { headers } from 'next/headers';

export default async function useTranslationServer() {
  const headerObj = await headers();
  const locale = (headerObj.get('NEXT_LOCALE') || 'en') as 'vi' | 'en';

  const filePath = path.join(
    process.cwd(),
    'public',
    'locales',
    `${locale}.json`,
  );
  const fileContents = await fs.readFile(filePath, 'utf-8');
  const translations = JSON.parse(fileContents);

  const trans = (key: string) => {
    return translations[key] ?? key;
  };

  return trans;
}
