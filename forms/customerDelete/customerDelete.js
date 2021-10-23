




btnDelete.onclick=function(){
  let customerName = inpName.value
    let found = false
    for (i = 0; i < allCustomer.length; i++) {
        if (customerName == allCustomer[i][1]){
            found = true
            break // if found the item in the database jump out of loop
        }
    }
      if (found == true) {
      query = "DELETE FROM customer2 WHERE customerName = '" + customerName + "'"
      alert(query)
    } // found is true
}

customerDelete.onshow=function(){
  query = "SELECT * FROM customer2"
    // Below change from my netID to yours (twice: user and database)    
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user="+netID+"&pass=" + pw + "&database="+databaseSchema+"&query=" + query)
  
  if (req.status == 200) { //transit worked.
        allCustomer = JSON.parse(req.responseText)  // parse data in an array
        console.log(allCustomer)
    }
}
