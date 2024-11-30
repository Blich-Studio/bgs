export default async function Page({
    params,
  }: {
    params: Promise<{ postId: string }>
  }) {
    const postId = (await params).postId
    return <div>My Post: {postId}</div>
  }