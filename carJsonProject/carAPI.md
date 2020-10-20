# carAPI

## **getWithLicence**

Function for getting the car with given licence plate number. The licence number is unique identifier for a given car.

Function takes the licence as a papameter.

Function returns:
- if the car is found from the API, the function returns that car object 
- if no car can be found with the given licence plate number, the function returns `null`

## **getWithModel**

Function returns all car with given model.

Function takes a model as a parameter.

Function returns:
- the function returns all cars of a given model as an array of car objects 
- if no car matches the given model, an empty array is returned.
- 
