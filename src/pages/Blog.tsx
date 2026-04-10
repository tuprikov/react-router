import { useParams } from 'react-router-dom'

const Blog = () => {
    const { category, id } = useParams()

    return (
        <div className="container mx-auto flex flex-col px-4 py-8">
            <h1 className="text-3xl font-bold">Blog Page</h1>
            <p className="">Category: {category}</p>
            <p className="">ID: {id}</p>
        </div>
    )
}

export default Blog
