export default function Person({name, desciption}) {
    return (
        <div className="person">
            <h1>{name}</h1>
            <p>{desciption}</p>
        </div>
    );
}