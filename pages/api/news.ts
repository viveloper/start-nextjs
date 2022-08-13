// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export type Article = {
  id: number;
  title: string;
  description: string;
  category: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Article[]>
) {
  res.status(200).json([
    {
      id: 1,
      title: 'News Article 1',
      description: 'Description 1',
      category: 'sports',
    },
    {
      id: 2,
      title: 'News Article 2',
      description: 'Description 2',
      category: 'politics',
    },
    {
      id: 3,
      title: 'News Article 3',
      description: 'Description 3',
      category: 'sports',
    },
  ]);
}
