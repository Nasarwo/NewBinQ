import "./App.css";

function App() {
  return (
    <>
      <div className="content">
        <div className="header">
          <div className="minBtn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="2"
              viewBox="0 0 6 2"
            >
              <path
                d="M 0,1 H 6"
                stroke="#000"
                stroke-width="1"
                stroke-linecap="square"
                fill="none"
              ></path>
            </svg>
          </div>
          <div className="maxBtn"></div>
          <div className="closeBtn"></div>
          <div className="profileBtn"></div>
          <div className="lastBtn"></div>
          <div className="contactsBtn"></div>
          <div className="titleHead"></div>
        </div>
      </div>
    </>
  );
}

export default App;
