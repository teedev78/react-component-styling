// Start coding here
import { css } from "@emotion/css";

function Alert(props) {
  return (
    <div
      className={css`
        width: 650px;
        height: 76px;
        color: black;
        border: none;
        border-radius: 5px;
        display: flex;
        justify-content: start;
        align-items: center;
        padding: 0 10px;
        margin: 15px 0 15px 0;
        font-weight: 600;
        background-color: ${props.bgColor};
      `}
    >
      <img src={props.icon} alt="icon" className={css`margin: 0 10px`} />{props.text}
    </div>
  );
}

export default Alert;
