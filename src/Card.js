import Button from './Button';

export default function Card({ currywurst, onToggleDetails }) {
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

      <Button
        text={currywurst ? 'Hide' : 'Show'}
        clickHandler={onToggleDetails}
      />
    </div>
  );
}
