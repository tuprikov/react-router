import { useParams } from 'react-router-dom'
import useDocumentHead from '../hooks/useDocumentHead'

const Blog = () => {
    const { category, id } = useParams()
    const categoryTitle = category || 'All Posts'
    const postSuffix = id ? ` - Post ${id}` : ''

    useDocumentHead({
        title: `Blog - ${categoryTitle}${postSuffix}`,
        description: `Read our latest ${category || 'blog'} posts.`
    })

    return (
        <div className="container mx-auto flex flex-col px-4 py-8">
            <h1 className="text-3xl font-bold">Blog Page</h1>
            <p className="">Category: {category}</p>
            <p className="">ID: {id}</p>
        </div>
    )
}

export default Blog
