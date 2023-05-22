import "../styles/css/container.css"
const Container = ({color, color2, size, shadow,pad}) => {
    return (
    <div className="container" style={{backgroundColor: color,boxShadow:shadow}}>
        <p style={{color: color2, fontSize: size, paddingLeft:pad}}>Container</p>
    </div>
    )
}

export default Container;