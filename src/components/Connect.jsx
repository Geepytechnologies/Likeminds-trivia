import { useRef } from "react";

export default function Connect({ setUsername }) {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  return (
    <div className="connect">
      <input
        className="connectInput"
        placeholder="enter your name"
        ref={inputRef}
      />
      <button className="connectButton" onClick={handleClick}>
        Connect
      </button>
    </div>
  );
}