import React from 'react'
import "./services.css"
import {BiCheck} from "react-icons/bi"

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>
        <article className="service">
          <div className='service__head'>
            <h3>Cyber Security</h3>
          </div>

            <ul className='service__list'>
              <li>
                <BiCheck/>
                <p> Pentration Testing</p>
              </li>
              <li>
                <BiCheck/>
                <p> Agile Application Security</p>
              </li>
              <li>
                <BiCheck/>
                <p> Implementing Security Monitoring</p>
              </li>
            </ul>
        </article>

        <article className="service">
          <div className='service__head'>
            <h3>Cloud Integration</h3>
          </div>

            <ul className='service__list'>
              <li>
                <BiCheck/>
                <p> Cloud Architecture & Migration</p>
              </li>
              <li>
                <BiCheck/>
                <p> Zero Trust</p>
              </li>
              <li>
                <BiCheck/>
                <p> Creating CI/CD Pipeliens</p>
              </li>
            </ul>
        </article>


        <article className="service">
          <div className='service__head'>
             <h3>Software Development</h3>
          </div>


            <ul className='service__list'>
              <li>
                <BiCheck/>
                <p> A.I For Cyber Security</p>
              </li>
              <li>
                <BiCheck/>
                <p> Defensive Coding</p>
              </li>
              <li>
                <BiCheck/>
                <p> Bespoke Security Tools</p>
              </li>
            </ul>
        </article>

      </div>
    </section>
  )
}

export default Services