export const getEventList=()=>{
    return [
        {
            id:1,
            isPublic:true,
            name:'event1',
            session:{   
                   id:1,
                   name:'vedant',
                   language:'hindi',
                   description:'nice',
                   date:'4-11-2022',
                   videoUrl:'session1.youtube',
                  },
            
            
            },
            
            
        
        {
            id:2,
            isPublic:true,
            name:'moksh',
            session:{
                   
                    id:11,
                    name:'session11',
                    language:'hindi',
                    description:'nice',
                    date:'10-11-2022',
                    videoUrl:'session11.youtube',
 
 
                 },
              
               
 
                
                },
            
                
                
            
        
        {
            id:3,
            isPublic:true,
            name:'advait',
            session:
                {
                    id:21,
                    name:'session21',
                    language:'hindi',
                    description:'nice',
                    date:'10-11-2022',
                    videoUrl:'session21.youtube',
 
 
                 },
               
        } ,
           
        {
            id:4,
            isPublic:true,
            name:'advait',
            session:
                {
                    id:31,
                    name:'session31',
                    language:'hindi',
                    description:'nice',
                    date:'16-11-2022',
                    videoUrl:'session31.youtube',
 
 
                 },
               
        },
                
            
            
    ]
}
export const findEventById = (id) =>{
const events = getEventList()
   const eventFound = events.filter((event) => {
        if (event.id === id) {
             return event
        }   
    });
   if(eventFound.length>0){
        return eventFound
    }
    return false

}
