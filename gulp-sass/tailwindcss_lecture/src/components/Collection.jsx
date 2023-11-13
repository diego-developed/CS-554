import Card from "./Card";

export default function Collection({ data }) {
  const characters = data?.results;
  console.log("characters", characters);

  return (
    <div className="grid-auto-fit grid w-full gap-12">
      {characters &&
        characters.map((character) => (
          <Card>
            <h2 className="text-2xl">{character.name}</h2>
            <p>{character.description}</p>
            <a className="btn" href={character.resourceURI}>
              View Character
            </a>
          </Card>
        ))}
    </div>
  );
}
