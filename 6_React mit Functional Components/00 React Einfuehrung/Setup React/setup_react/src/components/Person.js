export default function Person({name, description, winkel}) {
    return (
        <div className="person">
            <h1>{name}</h1>
            <p>{description}</p>
        </div>
    );
}