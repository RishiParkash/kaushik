const express=require('express')
const app=express();
import {getEventList} from './event'
const eventList=getEventList();
//get call for all events
app.get('/events',(req,res)=>{
    return res.status(200).send({
        success:'true',
        message:'events',
        events:eventList
    })
});
//post call for adding a new event
app.post("/addEvent", (req, res) => {

    if (!req.body.name) {
      return res.status(400).send({
        success: "false",
        message: "name is required",
      });
    } else if (!req.body.session) {
      return res.status(400).send({
        success: "false",
        message: "session are required",
      });
    }
    const event = {
      id: eventList.length + 1,
      isPublic: req.body.isPublic,
      name:  req.body.name,
      session: req.body.session,
    };
    eventList.push(event);
    return res.status(201).send({
      success: "true",
      message: "event added successfully",
      event,
    });
  });
  //put call for updating the event
  app.put("/updateEvent/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);
    const eventFound=findEventById(id)
  
    if (!eventFound) {
      return res.status(404).send({
        success: 'false',
        message: 'event not found',
      });
    }
  
    const updatedEvent= {
        id: id,
        isPublic: req.body.isPublic || eventFound.body.isPublic,
        name:req.body.name || eventFound.body.name,
        session: req.body.session || eventFound.body.session,
        
    };
  
    if (!updatedEvent.name) {
      return res.status(400).send({
        success: "false",
        message: "name is required",
      });
    } else if (!updatedEvent.sessions) {
      return res.status(400).send({
        success: "false",
        message: "session is required",
      });
    }
  
    for (let i = 0; i < eventList.length; i++) {
        if (eventList[i].id === id) {
            eventList[i] = updatedEvent;
            return res.status(201).send({
              success: 'true',
              message: 'event updated successfully',
              updatedEvent
            
            });
        }
    }
    return  res.status(404).send({
              success: 'true',
              message: 'error in update'
             
       });
  });
  //delete call for deleting an event
  app.delete("/deleteEvent/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);
    for(let i = 0; i < eventList.length; i++){
        if(eventList[i].id === id){
             eventList.splice(i,1);
             return res.status(201).send({
              success: 'true',
              message: 'event deleted successfully'
            });
        }
    }
    return res.status(404).send({
                success: 'true',
                message: 'error in delete'   
      });
  });
  //delete call for deleting a session
  app.delete("/deleteSession/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);
    for(let i = 0; i < eventList.length; i++){
        if(eventList[i].session.id === id){
             delete eventList[i].session;
             return res.status(201).send({
              success: 'true',
              message: 'session  deleted successfully'
            });
        }
    }
    return res.status(404).send({
                success: 'true',
                message: 'error in delete'   
      });
  });
//post call for adding a session
  app.post("/addSession/:id", (req, res) => {
    const newSession = {
        id: req.body.id,
        name: req.body.name,
        langauge:  req.body.name,
        description: req.body.session,
        date: req.body.date,
        videoUrl:req.body.videoUrl,
      };
      const id = parseInt(req.params.id, 10);
      for(let i=0;i<eventList.length;i++){
          if(eventList[i].id==id){
              eventList[i].assign(newSession);
          }
          return res.status(201).send({
            success: "true",
            message: "session added successfully",
            session,
          });

      };
      
    });

app.listen(8000,()=>{
    console.log('Example app listening on port 8000!')
});