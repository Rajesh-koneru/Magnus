document.getElementById('expand').addEventListener('click',()=>{
        let field=document.getElementById('hidden')
        let down =document.getElementById('down')
        if (field.classList.contains('hidden')) {
                field.classList.remove('hidden');
                field.classList.add('block');

                // Change icon to down
                down.classList.remove('fa-chevron-right');
                down.classList.add('fa-chevron-down');
              } else {
                field.classList.remove('block');
                field.classList.add('hidden');

                // Change icon to right
                down.classList.remove('fa-chevron-down');
                down.classList.add('fa-chevron-right');
              }
        });


    //script for making employee side bar toggle

document.getElementById('employee').addEventListener('click',()=>{
        let field=document.getElementById('show')
        let down =document.getElementById('right')
        if (field.classList.contains('hidden')) {
                field.classList.remove('hidden');
                field.classList.add('block');

                // Change icon to down
                down.classList.remove('fa-chevron-right');
                down.classList.add('fa-chevron-down');
              } else {
                field.classList.remove('block');
                field.classList.add('hidden');

                // Change icon to right
                down.classList.remove('fa-chevron-down');
                down.classList.add('fa-chevron-right');
              }
        });
