import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache, useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import { BlogPosts } from './components/blogPosts/BlogPosts';
import { Routing } from './components/routing/Routing';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Bamboo Daily</h1>
        <Routing />
      </div>
    </ApolloProvider>
  );
}

const EVERYTHING_ABOUT_PANDAS = gql`
  query Pandas {
  pandas{
  	id
    name
    favouriteShows {
      title
      numberOfEpisodes
    }
    favouriteNonBambooFood
  }
}
`;

function Panda() {
  const { loading, error, data } = useQuery(EVERYTHING_ABOUT_PANDAS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data);
  return <p>Done</p>
}

export default App;
