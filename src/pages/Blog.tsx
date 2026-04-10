import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const Blog = () => {
    const { category, id } = useParams()
    const categoryTitle = category || 'All Posts'
    const postSuffix = id ? ` - Post ${id}` : ''

    return (
        <>
            <Helmet>
                <title>
                    Blog - {categoryTitle}
                    {postSuffix}
                </title>
                <meta
                    name="description"
                    content={`Read our latest ${category || 'blog'} posts.`}
                />
            </Helmet>
            <div className="container mx-auto flex flex-col px-4 py-8">
                <h1 className="text-3xl font-bold">Blog Page</h1>
                <p className="">Category: {category}</p>
                <p className="">ID: {id}</p>
            </div>
        </>
    )
}

export default Blog
