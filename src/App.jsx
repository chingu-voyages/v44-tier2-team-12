import { useState, useEffect } from "react";

function App() {
  // f = first bot; s = second bot
  const [botsInfo, setBotsInfo] = useState({
    booleanOperator: "",
    speed: 3,
    fBotName: "",
    fBoolVal: "",
    fDirection: "",
    sBotName: "",
    sBoolVal: "",
    sDirection: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setBotsInfo((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const DIRECTIONS = ["North", "East", "South", "West"];
  const BOOLEAN_OPS = ["AND - &&", "OR - ||", "XOR - ^", "NOT - !"];

  useEffect(() => {
    console.log(botsInfo);
  }, [botsInfo]);
  return (
    <>
      <header>
        <h1>Boole Bots Arena</h1>
      </header>
      <main>
        <div className="game-config">
          <h1>Game Config</h1>
          <h2>Apply to all bots:</h2>
          <form>
            <label>
              Boolean Value
              <select
                name="booleanOperator"
                value={botsInfo.booleanOperator}
                onChange={(e) => handleChange(e)}
              >
                <option disabled hidden value="">
                  Choose Boolean Operation
                </option>
                {BOOLEAN_OPS.map((bool_ops) => (
                  <option value={bool_ops} key={bool_ops}>
                    {bool_ops}
                  </option>
                ))}
              </select>
            </label>
            <label className="speed-container">
              Speed
              <input
                type="range"
                value={botsInfo.speed}
                name="speed"
                min="1"
                max="10"
                onChange={(e) => handleChange(e)}
              />
              {botsInfo.speed}
            </label>
            <h1>Bot Info</h1>
            <label>
              1# Bot Name
              <input
                name="fBotName"
                value={botsInfo.fBotName}
                onChange={(e) => handleChange(e)}
              />
            </label>
            <label>
              Boolean Value
              <select
                name="fBoolVal"
                value={botsInfo.fBoolVal}
                onChange={(e) => handleChange(e)}
              >
                <option disabled hidden value="">
                  Choose Boolean Value
                </option>
                <option value="1">Boolean Value - 1</option>
                <option value="0">Boolean Value - 0</option>
              </select>
            </label>
            <label>
              Bot Direction
              <select
                name="fDirection"
                value={botsInfo.fDirection}
                onChange={(e) => handleChange(e)}
              >
                <option disabled hidden value="">
                  Choose Bot Direction
                </option>
                {DIRECTIONS.map((dir) => (
                  <option value={dir} key={dir}>
                    {dir}
                  </option>
                ))}
              </select>
            </label>
            <label>
              2# Bot Name
              <input
                name="sBotName"
                value={botsInfo.sBotName}
                onChange={(e) => handleChange(e)}
              />
            </label>
            <label>
              Boolean Value
              <select
                name="sBoolVal"
                value={botsInfo.sBoolVal}
                onChange={(e) => handleChange(e)}
              >
                <option disabled hidden value="">
                  Choose Boolean Value
                </option>
                <option value="1">Boolean Value - 1</option>
                <option value="0">Boolean Value - 0</option>
              </select>
            </label>
            <label>
              Bot Direction
              <select
                name="sDirection"
                value={botsInfo.sDirection}
                onChange={(e) => handleChange(e)}
              >
                <option disabled hidden value="">
                  Choose Bot Direction
                </option>
                {DIRECTIONS.map((dir) => (
                  <option value={dir} key={dir}>
                    {dir}
                  </option>
                ))}
              </select>
            </label>
          </form>
        </div>
        <div>
          <p>Arena</p>
        </div>
        <div>Leaderboard</div>
      </main>
      {/* reserved for footer */}
      {/* <footer>
        <div>Game Config</div>
        <div>Boole Arena</div>
        <div>Leader boards</div>
      </footer> 
      */}
    </>
  );
}

export default App;
