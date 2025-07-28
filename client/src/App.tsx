import "./App.css";

function App() {
  return (
    <>
      <div className="content">
        <div className="header">
          <div className="rightSide">
            <div className="minBtn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="2"
                viewBox="0 0 6 2"
              >
                <path
                  d="M 0,1 H 6"
                  stroke="#FFF"
                  stroke-width="1"
                  stroke-linecap="square"
                  fill="none"
                ></path>
              </svg>
            </div>
            <div className="maxBtn">
              <svg
                width="17"
                height="15"
                viewBox="0 0 17 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 1H1V14H16V1Z" stroke="white" />
              </svg>
            </div>
            <div className="closeBtn">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_16)">
                  <path d="M0 0L15 15" stroke="white" stroke-linecap="round" />
                  <path d="M15 0L0 15" stroke="white" stroke-linecap="round" />
                </g>
                <defs>
                  <clipPath id="clip0_1_16">
                    <rect width="15" height="15" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="profileBtn"></div>
          </div>
          <div className="lastBtn"></div>
          <div className="contactsBtn"></div>
          <div className="titleHead"></div>
        </div>
      </div>
    </>
  );
}

export default App;
