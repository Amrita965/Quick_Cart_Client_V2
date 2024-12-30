const HappyClientSpotlight = ({ client }) => {
  const {name, title, photo} = client;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img
            className="w-full"
          src={photo}
          alt="Shoes"
        />
      </figure>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title text-2xl">{name}</h2>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default HappyClientSpotlight;
