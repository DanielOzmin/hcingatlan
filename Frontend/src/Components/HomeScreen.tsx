import "./HomeScreen.css"

const HomeScreen=()=>{

    const handleClick=async()=>{
        const response = await fetch("/api/Test/Test")
        const data = await response.json()
        console.log(data)
    }
    
    return (
        <div className="container">
            <h1>Welcome on hcingatlan!</h1>
            <button onClick={handleClick}>Get api test</button>
        </div>
)
}

export default HomeScreen