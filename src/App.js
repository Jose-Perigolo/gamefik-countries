import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Cards from './components/Cards';
import Header from './components/Header';

const REGIONS = gql`
  {
    Country{
      name
      nativeName
      capital
      flag {
        svgFile
      }
    }
  }
`;

function App() {
  const [search, setSearch] = useState('')
  const { loading, error, data } = useQuery(REGIONS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const list = (data && data.Country) || [];

  const filteredCountries = list.filter(name => {
    return name.name.toLowerCase().includes(search.toLocaleLowerCase())
  })

  return (
    <div className="container-fluid mx-auto">

      <Header />

      <input className="form-control form-control-lg my-3" onChange={e => setSearch(e.target.value)} type="text" placeholder="Procurar país..." />

      <div className="row mx-auto">
        {filteredCountries.map(({ name, nativeName, capital, flag }) => (
          <Cards
            title={name}
            text1={nativeName}
            text2={capital}
            image={flag}
          />
        ))}
      </div>
    </div>
  )
}

export default App;
