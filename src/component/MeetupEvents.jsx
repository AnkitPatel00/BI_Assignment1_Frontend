import { Link } from "react-router-dom"
import useFetch from "../useFetch"
import { useState } from "react"



const MeetupEvents = () =>
{
  const [eventType, setEventType] = useState('')
  const [search,setSearch] = useState('')

  const { data, loading, error } = useFetch(`https://bi-assignment1-backend-zeta.vercel.app/meetups`)
  
  const handleEventType = (e)=>
  {
setEventType(e.target.value)
  }




  const filterMeetup = eventType ? data.filter((event)=>event.eventType === eventType).filter(event=>event.eventTags.join().includes(search) || event.title.includes(search)) :  search ? data?.filter(event=>event.eventTags.join().includes(search) || event.title.includes(search)) : data
  

  const handleInput = (e) =>
  {
    setSearch(e.target.value)
  }

  return (
   
    <div className="bg-body-tertiary pb-5">
      <section className="container mb-4">
        <div className="row">

          <form className="d-flex py-3" role="search">
      <input className="form-control me-2" type="search" placeholder="Search by title and tags.." aria-label="Search" onChange={handleInput} />
 </form>

          <div className="col-md-8"><h1>Meetup Events</h1></div>
         <div className="col-md-4"><section>
          <select className="form-select" onChange={handleEventType}>
            <option value="">Select Event Type</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>
        </section></div>
          
        </div>
        
        <div className="row row-gap-5">
          
          {filterMeetup ? filterMeetup.map((event) => (
            <div key={event._id} className="col-md-4 mb-5">
              
              {/* <div className="card"> */}
                
                <Link to={`/meetupDetails/${event._id}`}> <img src={event.thumbnailUrl} className="bg-image img-fluid rounded h-100 w-100 border" alt={event.eventStartDate}/></Link>
                <div className=" text-center ">
                  
                  <h5 className="fs-6">{event.title}<br/> <span className="badge text-bg-danger text-wrap" style={{width: 60}}>{event.eventType}</span></h5>
                  <small className="text-body-secondary">{event.eventStartDate}</small>
                </div>
                
                  

              </div>
              // </div>
          )) : <div>{ loading}<p>Loading...</p></div>}
         
        </div>
      </section>
      </div>
   
    
    
)
}
export default MeetupEvents
