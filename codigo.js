$(document).ready(function(){     
  $("#myTable").dynamicTable({
        //definimos las columnas iniciales    
        columns: [{
              text: "Name",
              key: "name"
          },
          {
              text: "Age",
              key: "age"
          },
          {
              text: "gender",
              key: "gender"
          },
        //   {
        //       text: "País",
        //       key: "pais"
        //   },        
        ],
 
        //carga de datos
        data: [{
              name: 'Mr.Sandeep Reddy',
              age: 24,
              gender: 'M',
            //   pais: 'Brasil'
          },
          {
              name: 'Mr.Vinod Kumar',
              age: 23,
              gender: 'M',
            //   pais: 'Perú'
          },
          {
              name: 'Mr.Nikit',
          age: 24,
          gender: 'M',
        //   pais: 'Colombia'    
      },

        ],

        //definición de botones
        buttons: {
            addButton: '<input type="button" value="Add" class="btn btn-success" />',
            cancelButton: '<input type="button" value="Cancel" class="btn btn-primary" />',
            deleteButton: '<input type="button" value="Delet" class="btn btn-danger" />',
            editButton: '<input type="button" value="Edit" class="btn btn-primary" />',
            saveButton: '<input type="button" value="Save" class="btn btn-success" />',
        },
        showActionColumn: true,
        //condicionales
        getControl: function (columnKey) {
            if (columnKey == "age") {
              return '<input type="number" class="form-control" />';
            }

            if (columnKey == "gender") {
              return '<select class="form-control"><option value="M">Male</option><option value="F">Femle</option></select>';
            }

            return '<input type="text" class="form-control" />';
        }

    });	    
});    