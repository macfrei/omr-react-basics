export default function Card({ currywurst }) {
  return (
    <div>
      <h2>React is awesome</h2>
      {currywurst && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ducimus
          accusamus velit eaque officia quidem maiores iure consectetur cumque
          consequuntur.
        </p>
      )}
    </div>
  );
}
