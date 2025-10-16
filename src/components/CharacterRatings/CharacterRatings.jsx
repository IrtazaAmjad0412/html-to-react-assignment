import "./CharacterRatings.css";

export const CharacterRatings = ({ data }) => {
  return (
    <section id="character-ratings">
      <h4>Top Characters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Skillset</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {data
            .sort((a, b) => b.votes - a.votes)
            .slice(0, 5)
            .map((char, index) => {
              const { name, skillset, votes } = char;
              return (
                <tr className={index % 2 === 0 ? "dark" : "light"} key={index}>
                  <td>{name}</td>
                  <td>{skillset.join(", ")}</td>
                  <td>{votes}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </section>
  );
};
