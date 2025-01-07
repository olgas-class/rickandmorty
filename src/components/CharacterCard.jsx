function CharacterCard({ character }) {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-image">
          <img src={character.image} alt={character.name} />
        </div>
        <div className="card-text">
          <h4>{character.name}</h4>
          <p className="status-block">
            <span className={`status ${character.status.toLowerCase()}`}></span> {character.location.name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
