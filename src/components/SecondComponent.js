function SecondComponent(props) {
    function clickMe():void{
        alert("You clicked me 2!");
}
    return (
        <div>
            <h1>The Second Component, First Function</h1>
            <button onClick={clickMe}>Click Me 2</button>

            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    )
        ;
}

export default SecondComponent;