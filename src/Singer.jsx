export default function Singer ({singer}){
    const {name, age} = singer;
    console.log(singer);
    return (
        <div className="singer">
            <h3>Singer: {name}</h3>
            <p>Age: {age}</p>
        </div>
    )
}