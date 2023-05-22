import "../styles/css/home.css"

import Container from "../components/Container.jsx";

const Home = () => {

    return <div className="home">
        <Container color="red" color2="white" size="22px" shadow="0px 2px 4px" pad="1rem"/>
        <Container color="green" color2="white" size="22px" shadow="0px 2px 4px" />
        <Container color="blue" color2="white" size="22px" shadow="0px 2px 4px" />
        <Container />
    </div>
}

export default Home;