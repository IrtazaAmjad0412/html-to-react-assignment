import "./CharacterList.css";

export const CharacterList = ({ data }) => {
  return (
    <section id="character-cards">
      {data.map((char, index) => {
        const { name, nickName, imageUrl, background } = char;
        return (
          <div className="card" key={index}>
            <div className="card-titles">
              <h3>{name}</h3>
              {nickName && <h4>{nickName}</h4>}
            </div>
            <img src={imageUrl} alt="" />
            <p>{background}</p>
          </div>
        );
      })}
    </section>
  );
};
