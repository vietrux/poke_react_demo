export default function Card(props){
  return (
    <div className="card">
      <p className="card_title">{props.pokemon.name}</p>
      <img className="card_img" src={props.pokemon.sprites.other.dream_world.front_default} />
    </div>
  )
}