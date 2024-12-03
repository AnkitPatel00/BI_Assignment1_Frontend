import { useParams } from "react-router-dom"
import useFetch from "../useFetch"
import Header from "../component/header"

const MeetupDetails = () =>
{
  const { eventId } = useParams()

  const { data, loading, error } = useFetch(`https://meetup-app-iota-black.vercel.app/meetups/${eventId}`)

  console.log(data)

  // const events = data? data.find((event=>event._id === eventId)) :`${loading}<p>Loading...</p>`

  return (
    (<>
      <Header />

      {data ? 
      
        (
         <div className="bg-body-tertiary">
        <section className="container mb-4">
     
          <div className="row row-gap-4 gx-5">
            <div className="col-md-8 gap-4">
 <h2 >{data.title}</h2>
          <span>Hoted By:</span><br/>
              <strong>{data.hostedBy}</strong>
              <img className="img-fluid pt-4" src={data.thumbnailUrl} alt={data.title} />
              <h3 className="pt-2">Details:</h3>
              <p>{data.details}</p>
               <h3 className="py-1">Additional Information:</h3>
              <p><strong>Dress Code: </strong>{data.dresscode}</p>
              <p><strong>Age Restrictions: </strong>{data.ageRestriction}</p>
             <h3 className="py-1">Event Tags:</h3>
            {data.eventTags.map((tag)=><button className="btn btn-danger ms-3">{tag}</button>)}
            </div>
            
            <div className="col-6 col-md-4 gap-4">
              <div className="card">
                <div className="card-body">
                  
                  <p>⌚ : { data.eventStartDate} to { data.eventStartDate}</p>
                  <p>📍 : { data.location}</p>
                  <p>₹ : {data.price}</p>
              </div>
              </div>
              <h3 className="pt-5 pb-2">Speakers: ({data.speaker.length})</h3>
              <div className="row">

              </div>
              {data.speaker.map((speaker) => (
                <div className="col-sm-6">
<div className="card">
                  <div className="card-body text-center">
                    <img className="img-fluid rounded-circle" src={speaker.speakerImg} width={100} height={100} />
                    <br/>
                      <strong>{speaker.name}</strong><br/>
                    <span>{speaker.position}</span>
                  </div>
                  </div>
              </div>
            ))}
            </div>
          </div>
      </section>
       </div>
        
        )
      
      : <div>{loading}<p>Loading...</p></div>}
     
      
    </>) 
    
)
}

export default MeetupDetails