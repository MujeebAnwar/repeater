<!DOCTYPE html>
<?php include 'header.php';?>

    
   <div class="container m-5" >
    
    <div class="row">
    
    <div class="col-md-12">

        <label for="details">Item Informartion</label><hr>
    
    </div>
    </div>
    </div>

<form>

    <div class="container m-5" id="main-div">

        <div class="row content" id='remove-div'>

            <div class="col-md-3 mainContent">

                    <label for="Details">Item Details</label><br>
                    <textarea name="" id="textArea" cols="30" rows="1" ></textarea><br>

                </div>

                <div class="col-md-1.5 mainContent">

                    <label for="Type">Item Type</label><br>
                    <select  id=""  class="form-control type">


                        <option value="1">Project</option>
                        <option value="2">Services</option>
                    </select>


            </div>



            <div class="col-md-2 mainContent">

                <label for="Amount">Total</label><br>

                <input type="text" class="form-control"  name='total' value='0'>


            </div>

            <div class="col-md-1.5 addicon mainContent" >
                <br>

                <i class="fa fa-plus add" style="font-size:48px;color:green" ></i>




            </div>


        </div>


    </div>
</form>

    <div class="container m-5">
    <div class="row">
    <div class="col md 3">
    <input type="Button" name="" id="" class="btn btn-primary mt-2 " value="Add Item">
    </div>
    </div>

    </div>


    
 
<?php include 'footer.php';?>