import './App.css'
import {Link, Route, Routes, useParams, Outlet} from 'react-router-dom'

   const Home = () =><h1>Home</h1>

  const Busqueda = () =>  {

    const tacos =[
      "Uñas",
      "Dedos",
      "Pie",
      "Mano"
    ]
 return(
  <div>
    
    <h1>Busqueda</h1>
    <ul>
    {tacos.map(taco => (
   <li key={taco}><Link to={`/tacos/${taco}`}>{taco}</Link></li>

    ))}

</ul>
  </div>
  )
}

const Tacos = () =>{
const {name} = useParams()

return (
<div>
 <h1>Tacos</h1>
     {name}
     <Link to='details'> Detalles</Link>
     <Outlet />
 </div>

)
}


const TacoDetails = () => {
  const {name} = useParams()

  return(
    <>
    <h1> Taco Details {name} </h1>
    </>
  )
}

function App() {
 return (
   <div className='App'>
     <header>
      <h1> Hola </h1>
      <nav>
        <ul>
         <li><Link to='/'>Home Jhonson</Link></li>
         <li><Link to='/busqueda'>Busqueda</Link></li>
        </ul>
      </nav>
    </header>
      
      <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/busqueda' element={<Busqueda />} />
       <Route path='/tacos/:name' element={<Tacos />}>
       <Route path='details' element={<TacoDetails/>}  /> 
       </Route>
       <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>

       
      </div>
     
  )
}

export default App
