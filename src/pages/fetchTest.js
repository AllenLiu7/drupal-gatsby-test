import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../components/layout'

const FetchTest = () => {

  const [data, setData] = useState({ });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://dev-allendrupal.pantheonsite.io/jsonapi/node/article',
      );

      setData(result.data);
    };

    fetchData();
  }, []);

 //console.log(data)

  return (
    <Layout pageTitle="My Blog Posts">
      <pre id="json">{JSON.stringify(data, undefined, 2)}</pre>
    </Layout>
  )
}

export default FetchTest