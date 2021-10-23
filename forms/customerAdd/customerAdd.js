
btnSumbit.onclick=function(){
  let name = inptName.value
  let street = inptStreet.value
  let city = inptCity.value
  let state = inptState.value
  let zipcode = inptZipcode.value
  let query = "INSERT INTO customer2 (`name`, `street`, `city`, `state`, `zipcode`) VALUES (" + name + "','" + street + "','" + city + "','" + state + "','" + zipcode + ")"
  alert(query)
}
