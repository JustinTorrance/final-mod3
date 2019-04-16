import React from 'react'

export const Card = ({name, founded, seats, titles, coatOfArms, ancestralWeapons, words}) => {

  const mappedSeats = seats.map(seat => <p>{seat}</p>)
  const mappedTitles = titles.map(title => <p>{title}</p>)
  const mappedAncestralWeapons = ancestralWeapons.map(weapon => <p>{weapon}</p>)

  return(
    <article>
      <h3>{name}</h3>
      <p>Founded: {founded}</p>
      <div>Seats: {mappedSeats}</div>
      <div>Titles: {mappedTitles}</div>
      <p>Coat of Arms: {coatOfArms}</p>
      <div>Ancestral Weapons: {mappedAncestralWeapons}</div>
      <p>Words: {words}</p>
    </article>
  )
}