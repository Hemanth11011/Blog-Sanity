import { previewData } from "next/headers"
import { groq } from "next-sanity"
import { client } from "lib/sanity.client"
import PreviewSuspence from "../../components/PreviewSuspence"
import PreviewBlogList from "../../components/PreviewBlogList"
import BlogList from "../../components/BlogList"

const query = groq`
  *[_type == "post"]{
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`
 
async function HomePage() {
  if(previewData()){
    return(
      <PreviewSuspence fallback={(
        <div role="status">
          <p className="text-center text-lg animate-pulse text-[#f7ab0a]">
            Loading...
          </p>
        </div>
      )}>
        <PreviewBlogList query={query}/>
      </PreviewSuspence>
    )
  }

  const posts = await client.fetch(query)
  console.log(posts);
  
  return <BlogList posts={posts}/>
}

export default HomePage