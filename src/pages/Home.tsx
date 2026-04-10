import { Helmet } from 'react-helmet'

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home</title>
                <meta name="description" content="Welcome to our home page!" />
            </Helmet>
            <div className="container mx-auto flex px-4 py-8">
                <h1 className="text-3xl font-bold">Home Page</h1>
            </div>
        </>
    )
}

export default Home
