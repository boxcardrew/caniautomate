import { BuildListProvider } from "../components/build-context";

function App({ Component, pageProps }) {
  return (
    <BuildListProvider>
      <Component {...pageProps} />
    </BuildListProvider>
  );
}

export default App;
