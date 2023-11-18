
import './App.css';
import data from './data'
import List from './list';
import { useState } from 'react';


export default function App() {

const [people, setPeople]= useState(data)

  return<>
  <main>
    <section className='container'>
      <h3>{people.length} birthdays today</h3>
      <List people={people}></List>
      <button onClick={()=>{setPeople([])}}>Clear all</button>

    </section>

  

  </main>
  </>
}





