
const EventsList = [
  {
    title: "Event One",
    address: "event one adress",
    date: "12/12/1222",
    id:1
  },
  
  {
    title: "Event two",
    address: "event tow adress",
    date: "12/12/1222",
    id:2
  }
];

export const getFeaturedEvents = () => {
  return EventsList;
};


export const getEventDetailsByid = (id) =>{
  return  EventsList.find(e => e.id == id);
}