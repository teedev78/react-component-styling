import "./App.css";
import { css } from "@emotion/css";
import Button from "./components/Button";
import Alert from "./components/Alert";
import alertCircle from "./assets/icons/alert-circle.svg";
import alertTriangle from "./assets/icons/alert-triangle.svg";
import checkCircle from "./assets/icons/check-circle.svg";
import frown from "./assets/icons/frown.svg";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <h1
          className={css`
            color: #074ee8;
            margin-bottom: 20px;
          `}
        >
          Button
        </h1>
        <div
          className={css`
            width: 330px;
            color: black;
          `}
        >
          <div
            className={css`
              display: flex;
              justify-content: space-between;
              align-items: start;
              width: 100%;
              margin: 0 0 30px 0;
            `}
          >
            <p>Primary</p> <Button text="Large" bgColor="#074ee8" />
          </div>
          <div
            className={css`
              display: flex;
              justify-content: space-between;
              align-items: start;
              width: 100%;
              margin: 0 0 100px 0;
            `}
          >
            <p>Secondary</p> <Button text="Large" bgColor="#07a4e8" />
          </div>
        </div>
        <div
          className={css`
            width: 330px;
            color: black;
          `}
        >
          <div
            className={css`
              display: flex;
              justify-content: space-between;
              align-items: start;
              width: 100%;
              margin: 0 0 30px 0;
            `}
          >
            <p>Error</p> <Button text="Large" bgColor="#de5753" />
          </div>
          <div
            className={css`
              display: flex;
              justify-content: space-between;
              align-items: start;
              width: 100%;
              margin: 0 0 30px 0;
            `}
          >
            <p>Success</p> <Button text="Large" bgColor="#26b795" />
          </div>
        </div>
      </div>
      <hr />
      <div className="alert-components-section">
        <h1
          className={css`
            color: #074ee8;
            margin-bottom: 20px;
          `}
        >
          Alert Component
        </h1>
        {/* Render ตัว Alert 4 แบบ */}
        <Alert text="This is error alert box" bgColor="#f9c8c8" icon={frown} />
        <Alert
          text="This is warning alert box"
          bgColor="#f9d9c8"
          icon={alertTriangle}
        />
        <Alert
          text="This is info alert box"
          bgColor="#f9ebc8"
          icon={alertCircle}
        />
        <Alert
          text="This is success alert box"
          bgColor="#cef7cd"
          icon={checkCircle}
        />
      </div>
    </div>
  );
}

export default App;
