import React from 'react'
import '../App.css';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import NavBar from '../components/NavBar';
import Performancem from '../components/Performancem';
import Projectandblogsection from '../components/Projectandblogsection';
import Teamandclients from '../components/Teamandclients';
import Appbasedsol from '../components/Appbasedsol';
import Cards from '../components/Cards';
import AdMo from '../components/AdMo';



function Home() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <Cards/>
      <AdMo/>
      <Appbasedsol/>
      <Performancem/>
      <Teamandclients/>
      <Projectandblogsection/>
      <Footer/>
    </>
  )
}

export default Home