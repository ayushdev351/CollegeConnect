import Auth from "./components/auth";
import Dashboard from "./components/dashboard";
import styled from "styled-components";
import { useUserContext } from "./context/userContext";

function App() {
  const { user, loading, error } = useUserContext();

  return (
    <div className="App">
      {error && <p className="error">{error}</p>}

      {loading ? (
        <LoadingStyle>
          <h2>Loading.....</h2>{" "}
        </LoadingStyle>
      ) : (
        <>{user ? <Dashboard /> : <Auth />}</>
      )}
    </div>
  );
}

export default App;

const LoadingStyle = styled.div`
  position: fixed;
  font-weight: bold;
  font-family: cursive;
  font-size: 1.7rem;
  top: 40%;
  left: 44%;
`;
