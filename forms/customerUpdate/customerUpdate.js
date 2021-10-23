
customerUpdate.onshow=function(){
   query = "SELECT * FROM customer2"
    // Below change from my netID to yours (twice: user and database)    
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user="+netID+"&pass=" + pw + "&database="+databaseSchema+"&query=" + query)
    
    
    if (req.status == 200) { //transit trip worked.        
           // see JSON results
           console.log(`req.responseText is a JSON string that looks like this: ${req.responseText}`)
        results = JSON.parse(req.responseText)
        if (results.length == 0)    // no results were returned by the query
           lblMessage1.value = "No costumer"
        else {        // query results were returne
        // Now output the names of all the dogs into the textArea control:
        let message = ""
        for (i = 0; i < results.length; i++)
            message = message + results[i][1] + "</br>"
            lblMessage1.value = message
          } // end else
}

btnSubmit1.onclick=function(){
   let newName = inptNew.value
   let oldName = inptOld.value
    query = "SELECT * FROM customer2 WHERE `CustomerName` = '" + oldName + "'"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user="+netID+"&pass=" + pw + "&database="+databaseSchema+"&query=" + query)
    if (req.status == 200) {
        allCustomer = JSON.parse(req.responseText)
        if (allCustomer.length > 0) {
            query = "UPDATE customer2 SET `customerName` ='" + newName + "' WHERE `customerName` = '" + oldName + "'"
            req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user="+netID+"&pass=" + pw + "&database="+databaseSchema+"&query=" + query)
             
}
