import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Main from "./components/characters/Main";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="font-rubik w-full h-full">
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <h1 className="text-3xl text-gray-600 font-semibold px-8 py-4 text-center">
          Rick and Morty
          <span className="font-dancing ml-4 text-xl">By Samith</span>
        </h1>
        {/* <Characters /> */}
        <Main />
      </QueryClientProvider>
    </div>
  );
}

export default App;
