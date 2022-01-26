import Config from '../config/config';

class Finder {
  constructor() {}

  findSheltersWithAFreeBeds = sheltersList => {
    const sheltersWithAFreeBeds = sheltersList.filter(shelter => 
      (shelter.totalNumberOfBeds - shelter.occupiedNumberOfBeds) > 0
    );

    return sheltersWithAFreeBeds;
  }

  findEateriesWithAvailabilityMeals = eateriesList => {
    const eateriesWithAvailabilityMeals = eateriesList.filter(eatery => eatery.mealsAvailability);

    return eateriesWithAvailabilityMeals;
  }

  findClosestLocation = locationsList => {
    const currentCoordinates = Config.KIOSK_COORDINATES;

    const distancesFromKiosk = locationsList.map(location => {
      if (!location.coordinates) {
        return;
      }

      const { name, coordinates } = location;

      const lat = Math.abs(coordinates?.lat - currentCoordinates.lat);
      const lon = Math.abs(coordinates?.lon - currentCoordinates.lon);

      const distance = Math.sqrt(Math.pow(lat, 2) + Math.pow(lon, 2));

      return { 
        name,
        distance,
        coordinates, 
      }
    });

    return distancesFromKiosk.sort((a, b) => a.distance - b.distance);
  }
}

export default Finder;