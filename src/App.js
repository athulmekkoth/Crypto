import React from "react"
import ReactDom from "react-dom"
import { Switch, Route, Link, Routes } from "react-router-dom"
import { Layout, Typography, Space } from 'antd';
import { Navbar, Exchange, Homepage, Cryptocurrency, Cryptodetails, News } from "./components"
import "./App.css"
export default function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout />
        <div className="routes">
          <Routes>
            <Route path="/Exchange" element={<Exchange />}>

            </Route>
            <Route path="/" element={<Homepage />}>

            </Route>
            <Route path="/Cryptocurrency" element={<Cryptocurrency />}>

            </Route>
            <Route path="/Cryptodetails" element={<Cryptodetails />}>

            </Route>
            <Route path="/News" element={<News />}>

            </Route>
          </Routes>




        </div>
        <div className="footer">
        <Typography.Title level={5} style={{ color: "white", textAlign: 'center' }}>
          Cryptopunk
          All right reserved
        </Typography.Title>
        <Space>
          <Link to="/ ">Home</Link>
          <Link to="/Exchange ">Exchange</Link>
          <Link to="/News ">News</Link>
        </Space>
      </div>
    

      </div>
    </div>
  )
}

