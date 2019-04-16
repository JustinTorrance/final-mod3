import React from 'react'
import shortid from 'shortid'

export const Card = ({name, founded, seats, titles, coatOfArms, ancestralWeapons, words}) => {

  const mappedSeats = seats.map(seat => <li key={shortid.generate()} >{seat}</li>)
  const mappedTitles = titles.map(title => <li key={shortid.generate()} >{title}</li>)
  const mappedAncestralWeapons = ancestralWeapons.map(weapon => <li key={shortid.generate()} >{weapon}</li>)

  return(
    <article>
      <h3>{name}</h3>
      <p>Founded: {founded}</p>
      <ul>Seats: {mappedSeats}</ul>
      <ul>Titles: {mappedTitles}</ul>
      <p>Coat of Arms: {coatOfArms}</p>
      <ul>Ancestral Weapons: {mappedAncestralWeapons}</ul>
      <p>Words: {words}</p>
    </article>
  )
}