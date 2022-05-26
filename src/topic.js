function Topic(){
    let age = 20;
    let url = "https://via.placeholder.com/150";

    return (
        <div>
            <h2>I am {age} years old</h2>
            <img src={url} alt="" />
        </div>
    )
}

export default Topic;