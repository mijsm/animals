function App() {
    const handleClick = () => {
        console.log("button was clicked");
    }

    return (
        <div>
            <button onClick={handleClick}>Add Animals</button>
        </div>
    )
}   

export default App;