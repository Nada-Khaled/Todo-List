var tableRows, newValue, table = document.getElementById("myTable"),
    tableSize,row,cell,selectedElement,
    selectedRowIndex;

//for addButton
function addNewValue()
{
     newValue = document.getElementById("mainInput").value;
    
    if(newValue != "")
        {     
            tableSize = table.rows.length;

            row = table.insertRow(tableSize);
            
            cell = row.insertCell(0);
            cell.innerHTML=newValue;
        }
    
    tableSize = table.rows.length;
    tableRows = table.getElementsByTagName("tr");
}

//for closeButton
function closeLayer()
{
    document.getElementById("layer").style.visibility="hidden";
    document.getElementById("newMessage").style.visibility="hidden";
    document.getElementById("message").style.visibility="hidden";
}

//for editButton
function showNewMessage()
{
    document.getElementById("message").style.visibility="hidden";
    document.getElementById("message").style.display="none";
        
    document.getElementById("newMessage").style.visibility="visible";
    document.getElementById("newMessage").style.display="inline-block";  
    
}

// for newEditButton
function editRow()
{
    newValue=document.getElementById("newInput").value;
    
    tableRows[selectedRowIndex].getElementsByTagName("td")[0].innerHTML=newValue;
}


function getRowIndex(event)
{
     selectedElement = event.target;
    
    if(selectedElement.tagName == "TD")
        {
            selectedRowIndex = selectedElement.closest("tr").rowIndex;
        }
}


table.onclick = function(){
    
    document.getElementById("layer").style.visibility="visible";
    
    document.getElementById("message").style.visibility="visible";
    document.getElementById("message").style.display="inline-block";
    
    document.getElementById("newMessage").style.visibility="hidden";
    document.getElementById("newMessage").style.display="none";
}


//for delButton
function deleteRow()
{
    table.deleteRow(selectedRowIndex);
    
    closeLayer();
}