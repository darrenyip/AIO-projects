import BadDadJokes from "./BadDadJokes";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

function BadDadWapper(props) {
  return (
    <QueryClientProvider client={queryClient}>
      <BadDadJokes />
    </QueryClientProvider>
  );
}

export default BadDadWapper;
