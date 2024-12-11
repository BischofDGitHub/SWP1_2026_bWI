export default function Card({ firstname, lastname, description, imgUrl="https://www.w3schools.com/howto/img_avatar.png"}) {
    return (
        <div className="card">
            <img src={imgUrl} alt="" />
            <h3>{firstname} {lastname}</h3>
            <p>{description}</p>
        </div>
    );
}