class Event {
  constructor(
    id,
    name,
    imageUrl,
    place,
    date,
    timeSlot,
    reportingTime,
    instructions,
    mealsOnWheels, // boolean
    description
  ) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.place = place;
    this.date = date;
    this.timeSlot = timeSlot;
    this.reportingTime = reportingTime;
    this.instructions = instructions;
    this.volunteersEnrolled = [];
    this.mealsOnWheels = mealsOnWheels; // boolean
    this.description = description;
  }
}

export default Event;
