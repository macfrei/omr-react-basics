export default function Button({ text, clickHandler }) {
  return <button onClick={clickHandler}>{text}</button>;
}
