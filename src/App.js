function App() {
    console.log(process.env["REACT_APP_PROJECTNAME"]);
    return (
        <div className="App">
            <header className="App-header">
                <h1 style={{ textAlign: "center" }}>
                    Hello! from Thengs community
                    <br />
                    We are currently working on our product
                    <br /> please visit us later, Thanks!
                </h1>
            </header>
        </div>
    );
}

export default App;
