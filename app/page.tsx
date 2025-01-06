import Layout from '@/_components/Layout';
import Main from '@/_components/Main';
import { LIMIT } from '@/_constants';
import { getArticleList } from '@/_libs/microcms';
import Cards from '@/_components/Cards';
import { ReadMore } from '@/_components/ReadMore';

export const revalidate = 60;

type Props = {
  searchParams: {
    rankingDraftKey?: string;
    pickupDraftKey?: string;
  };
};

export default async function Page({ searchParams }: Props) {
  const data = await getArticleList({
    limit: LIMIT,
  });
  return (
    <Layout>
      <Main>
        <h1>新着情報</h1>
        <Cards articles={data.contents} />
        <ReadMore totalCount={data.totalCount} />
      </Main>
    </Layout>
  );
}
