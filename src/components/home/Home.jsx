import React from "react"
import { About } from "../pages/About"
import { Blog } from "../pages/Blog"
import { Contact } from "../pages/Contact"
import { Counter } from "../pages/Counter"
import { Portfolio } from "../pages/Portfolio"
import { Services } from "../pages/Services"
import { Testimonials } from "../pages/Testimonials"
import { Hero } from "./Hero"

export const Home = () => {
  return (
    <>
    <div className="home">
    <Hero />
      <About />
      <Services />   
      <Portfolio />
      <Blog />
      <Contact />
    </div>
   
    </>
  )
}
