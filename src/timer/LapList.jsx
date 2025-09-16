export default function LapList({laps}) {
  return (
    <>
      <h2>Lap Times</h2>
      <ul>
        {laps.map((lap, index) => (
          <li key={index}>Lap {index + 1}: {lap} ms</li>
        ))}
      </ul>
    </>
  );
}
