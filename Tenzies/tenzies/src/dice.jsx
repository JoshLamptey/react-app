
export default function Die(prop){
    const styles = {
        backgroundColor : prop.held ? "#59E391" : "white"
    }
    return (
        <div className="die" style={styles}>
            <h2 className="die-num">{prop.value}</h2>
        </div>
    )
}