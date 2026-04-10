import { Helmet } from 'react-helmet'

const About = () => {
    return (
        <>
            <Helmet>
                <title>About</title>
                <meta
                    name="description"
                    content="Learn more about our company!"
                />
            </Helmet>
            <div className="container mx-auto flex px-4 py-8">
                <h1 className="text-3xl font-bold">About Page</h1>
            </div>
        </>
    )
}

export default About
