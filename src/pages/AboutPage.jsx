import Card from "../components/shared/Card"

function AboutPage() {
    return (
        <Card>
           <div className="about">
                <h1>About This Project</h1>
                <p>This is a React project where you can leave feedback about a product or a service</p>
                <p>1.0.0</p>  
                <p>
                    <a href="/">Back to Home</a>    
                </p> 
            </div> 
        </Card>
    )
}

export default AboutPage
