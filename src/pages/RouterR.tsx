import { BrowserRouter as Router, Route,Routes } from "react-router-dom"
import { Models } from "./models"
import { Home } from "./Home"
import { Products } from "./products"
import { Events } from "./events"
import { Photos } from "./photos"
import { Header } from "../components/header"
import { Memberships } from "./memberships"
import { Login } from "./login"
import { Contact } from "./contact"
export const RouterR = () => {
    return (
      <>
      <Router>
        <Header/>
            <Routes>

              <Route path="/" element={<Home/>}/>
              <Route path="/models" element={<Models/>}/>
              <Route path="/makeup-products" element={<Products/>}/>
              <Route path="/events" element={<Events/>}/>
              <Route path="/photos" element={<Photos/>}/>
              <Route path="/memberships" element={<Memberships/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/login" element={<Login/>}/>
          </Routes>
      </Router>
      </>
    )
  }