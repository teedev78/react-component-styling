// Start coding here
import { css } from "@emotion/css";

function Button(props) {
  return (
    <button
      className={css`
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 24px;
        color: white;
        border: none;
        border-radius: 5px;
        width: 170px;
        height: 50px;
        background-color: ${props.bgColor};
      `}
    >
      {props.text}
    </button>
  );
}

export default Button;
