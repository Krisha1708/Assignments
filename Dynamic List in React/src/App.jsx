export function App(){
  const items = ["React","Javascript","CSS"]

  return (
    <div>
      <h1>My Favorites Technology</h1>
      <ul>
        {items.map((item,index)=>(
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
