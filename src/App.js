import React, {useState} from 'react'
import Data from './data.json'
import './App.css'; 




function App() {

  const [search,setSearch]=useState('')
  const [currentPage,setCurrentPage] = useState(0);
  const pages = 6;

  const handleSearch = (event) => {
    setSearch(event.target.value);
    setCurrentPage(0);
  };

  const filteredCars = Data.cars.filter((car) => 
  car.name.toLowerCase().includes(search.toLowerCase())

  );

  const totalPages = Math.ceil(filteredCars.length/pages);
  const startIndex  = currentPage*pages;
  const endIndex = startIndex+pages;
  const data = filteredCars.slice(startIndex,endIndex);

  const handlePrevious = () => {
    if (currentPage>0){
      setCurrentPage(currentPage-1);
    }
  }

  const handleNext = () => {
    if (currentPage<totalPages-1){
      setCurrentPage(currentPage+1);
    }
  };

  const handleButton = (pageNumber) =>
  {
    setCurrentPage(pageNumber-1);
  };

  const np = totalPages;
  const numbers =[...Array(np+1).keys()].slice(1);

return (
    <div>

      <div  className="search-container">

      <input type="text"
      placeholder="Search.."
      onChange={handleSearch}
      value={search}/>
      

      </div>
      


      <div className="card-container">

      {data.map((car) => (

       <div key={car.id} className="card" style={{width:'18rem'}}>

         <div class="" >
          <img src={car.image}
          alt={car.image}
          style={{width:'270px',height:'140px',borderRadius: '10px', border: '1px solid #ccc'}}
          />
          </div>

          <div className="card-info">
         



        <p style={{marginLeft:'-130px'}}>{car.name}</p>
        <p style={{marginLeft:'200px',marginTop:'-38px'}}>{car.year}</p>
        <p style={{marginLeft:'-210px'}}>{car.price}</p>

        <div className='buy'style={{marginTop:'-40px',marginLeft:'200px'}}>

        <button style={{ margin: '0px auto 10x' ,width:'60px',height:'30px'}}>
          <p style={{marginTop:'-4px',cursor: 'pointer'}}>Buy</p>
          

  
  </button>
  </div>

      
       

        




        

        
        </div>
        </div>
        
        
        
      ))

      }

      <div className='pages'>

      <button onClick={handlePrevious}
      disabled={currentPage===0}>Previous</button>

       {numbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handleButton(pageNumber)}
            className={pageNumber === currentPage + 1 ? 'active' : ''}
          >
            {pageNumber}
          </button>
        ))}

<button onClick={handleNext} disabled={currentPage === totalPages - 1}>
          Next
        </button>
      </div>
      </div>
    </div>

    
  )
}

export default App