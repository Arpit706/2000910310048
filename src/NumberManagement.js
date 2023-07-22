import React, { useState } from 'react';
import axios from 'axios';

const NumberManagement=()=> {
  const [urls, setUrls] = useState('');
  const [result, setResult] = useState({});

  const handleFetchNumbers = async () => {
    try {
      const response = await axios.get(`http://20.244.56.144/numbers/primes`, {
        params: {
          url: urls,
        },
      });
      setResult(response.data);
    } catch (error) {
      console.error('Error fetching numbers:', error);
    }
  };

  return (
    <div className="App">
      <h1>Number Management Service</h1>
      <input
        type="text"
        value={urls}
        onChange={(e) => setUrls(e.target.value)}
        placeholder="Enter comma-separated URLs"
      />
      <button onClick={handleFetchNumbers}>Fetch Numbers</button>
      {result && Object.keys(result).length > 0 && (
        <div>
          <h2>Prime Numbers:</h2>
          <pre>{JSON.stringify(result.primeNumbers, null, 2)}</pre>

          <h2>Fibonacci Numbers:</h2>
          <pre>{JSON.stringify(result.fiboNumbers, null, 2)}</pre>

          <h2>Odd Numbers:</h2>
          <pre>{JSON.stringify(result.oddNumbers, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default NumberManagement;


