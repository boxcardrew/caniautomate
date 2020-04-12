import React from 'react'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Products from './products'
import Table from '../components/table'
import Layout from '../components/layout'


const Home = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    async function getData() {
      const res = await fetch('/api')
      const newData = await res.json()
      setData(newData)
    }
    getData()
  }, [])

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
      {data.length > 0 ? (
        data.map(d => (
          <Table 
            key={d.data.brand}
            brand={d.data.brand}
            item={d.data.item}
            description={d.data.description}
            image={d.data.image}
          />
        ))
      ) : (
        <>
        <Table loading />
        </>
      )}
      </Layout>

      <style jsx>{`

        :global(body) {
          background: #EDF1F7;  
        }
        :global(*) {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }


      `}</style>
    </div>
  )
}


export default Home
