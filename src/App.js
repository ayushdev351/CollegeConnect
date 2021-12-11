import Auth from "./components/auth";
import Dashboard from "./components/dashboard";
import styled, { keyframes } from "styled-components";
import { useUserContext } from "./context/userContext";

function App() {
  const { user, loading, error } = useUserContext();

  return (
    <div className="App">
      {error && <p className="error">{error}</p>}

      {loading ? (
        <LoadingStyle>
          <LoadingCircle />
        </LoadingStyle>
      ) : (
        <>{user ? <Dashboard /> : <Auth />}</>
      )}
    </div>
  );
}

export default App;

const loadingAnimatiion = keyframes`
   0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingCircle = styled.div`
  border: 10px solid black; /* Light grey */
  border-top: 16px solid #b91372; /* Blue */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
  animation-name: ${loadingAnimatiion};
  margin-left: auto;
  margin-right: auto;
  margin-top: 18%;
`;

const LoadingStyle = styled.div`
  margin-left: auto;
  margin-right: auto;
`;
