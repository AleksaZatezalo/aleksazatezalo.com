
import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import {useContext, useState} from "react";
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';

export default function CreatePost() {


  return (
    <div className="content-wrap">
          <Navbar/>
          <h1>Hello</h1>
      <Footer/>
    </div>
  );
}