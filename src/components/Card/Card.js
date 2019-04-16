import React from 'react'

export const Card = ({name, founded, seats, titles, coatOfArms, ancestralWeapons, words}) => {

  const mappedSeats = seats.map(seat => <li>{seat}</li>)
  const mappedTitles = titles.map(title => <li>{title}</li>)
  const mappedAncestralWeapons = ancestralWeapons.map(weapon => <li>{weapon}</li>)

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