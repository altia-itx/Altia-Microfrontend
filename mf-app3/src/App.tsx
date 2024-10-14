import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import QueryComponent from './QueryComponent';

const queryClient = new QueryClient();
const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <QueryComponent />
      </div>
    </QueryClientProvider>
  );
};

export default App;
