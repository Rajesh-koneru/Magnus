const employLinks = document.querySelectorAll('#employ a');
const Content = document.getElementById("main_section");
console.log(links)
//function for accessing register page from different pages
async function load_register(){
        const response = await fetch('/employee/register_page');  // Match the URL in urls.py
        const html = await response.text();
        console.log(html)
        console.log('html received...')
        Content.innerHTML = html;
      //sending form data
      function getCSRFToken() {
          const csrfToken = document.querySelector('meta[name="csrf-token"]');
          return csrfToken ? csrfToken.getAttribute('content') : '';
      }
      async function SendData() {
          const firstName = document.getElementById('firstName').value;
          const lastName = document.getElementById('lastName').value;
          const mail = document.getElementById('email').value;
          const phone = document.getElementById('mobile').value;
          const dob = document.getElementById('dob').value;
          const selectedGender = document.querySelector('input[name="gender"]:checked')?.value || '';
          const address = document.getElementById('address').value;
          const country = document.getElementById('country').value;
          const city = document.getElementById('city').value;

          const skillElements = document.querySelectorAll('input[name="skills"]:checked');
          const skills = Array.from(skillElements).map(el => el.value);

          const data = {
            fName: firstName,
            lName: lastName,
            mail: mail,
            phone: phone,
            dob: dob,
            Gender: selectedGender,
            address: address,
            country: country,
            city: city,
            skills: skills
          };

          const response = await fetch('/Employee/register',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-CSRFToken': getCSRFToken()// Make sure this function exists
            },
            body: JSON.stringify(data)
          });
            const output = await response.json();
            alert(output['message'])
      }
      setTimeout(() => {
          document.getElementById('submit')?.addEventListener('click', SendData);
      }, 10);
    }

employLinks.forEach(link => {
  link.addEventListener("click", async function (e) {
    e.preventDefault();
    const innerContent = this.innerText.trim();
    console.log(innerContent);
    if (innerContent ==='Create Employees') {
        const response = await fetch('/employee/register_page');  // Match the URL in urls.py
        const html = await response.text();
        console.log(html)
        console.log('html received...')
        Content.innerHTML = html;
//      const content = `<div class="bg-blue-50 border-b border-blue-300 px-6 py-4 flex flex-wrap items-center gap-2">
//                 <h1 class="text-2xl font-normal text-slate-900">
//                  Employee
//                 </h1>
//                 <span class="text-sm text-blue-300 font-light">
//                  Create
//                 </span>
//                 <nav class="ml-auto text-sm text-slate-600 flex items-center gap-1 select-none">
//                  <i class="fas fa-palette">
//                  </i>
//                  <a class="hover:underline" href="#">
//                   Home
//                  </a>
//                  <span>
//                   &gt;
//                  </span>
//                  <a class="hover:underline" href="#">
//                   Employee
//                  </a>
//                  <span>
//                   &gt;
//                  </span>
//                  <span class="text-slate-400">
//                   Create
//                  </span>
//                 </nav>
//                </div>
//                <form class="bg-white m-6 rounded-md shadow-sm border border-gray-200">
//                     <fieldset class="border-t-4 border-blue-400 p-6">
//                          <legend class="text-lg font-semibold mb-4 px-1">
//                           Employee Details
//                          </legend>
//                          <div class="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4">
//                           <div>
//                            <label class="block font-semibold text-sm mb-1" for="firstName">
//                             First Name
//                            </label>
//                            <input class="w-full border border-gray-300 rounded px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400" id="firstName" placeholder="First Name" type="text"/>
//                           </div>
//                           <div>
//                            <label class="block font-semibold text-sm mb-1" for="lastName">
//                             Last Name
//                            </label>
//                            <input class="w-full border border-gray-300 rounded px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400" id="lastName" placeholder="Last Name" type="text"/>
//                           </div>
//                           <div>
//                            <label class="block font-semibold text-sm mb-1" for="email">
//                             Email
//                            </label>
//                            <input class="w-full border border-gray-300 rounded px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400" id="email" placeholder="Email Id" type="email"/>
//                           </div>
//                           <div>
//                            <label class="block font-semibold text-sm mb-1" for="mobile">
//                             Mobile Number
//                            </label>
//                            <input class="w-full border border-gray-300 rounded px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400" id="mobile" placeholder="Mobile No" type="tel"/>
//                           </div>
//                           <div class="relative">
//                            <label class="block font-semibold text-sm mb-1" for="dob">
//                             Date Of Birth
//                            </label>
//                            <input class="w-full border border-gray-300 rounded px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400" id="dob" placeholder="dd/mm/yyyy" type="date"/>
//                            <i aria-hidden="true" class="fas fa-calendar-alt absolute right-3 top-9 text-gray-400 pointer-events-none">
//                            </i>
//                           </div>
//                           <div class="flex items-center gap-2 pt-6 text-sm">
//                            <label class="font-semibold">
//                             Gender :
//                            </label>
//                            <label class="flex items-center gap-1">
//                             <input checked="" name="gender" type="radio" value='Male'/>
//                             Male
//                            </label>
//                            <label class="flex items-center gap-1">
//                             <input name="gender" type="radio" value='Female'/>
//                             Female
//                            </label>
//                           </div>
//                           <div class="md:col-span-3">
//                            <label class="block font-semibold text-sm mb-1" for="address">
//                             Address
//                            </label>
//                            <textarea class="w-full border border-gray-300 rounded px-3 py-2 text-sm placeholder:text-gray-400 resize-none focus:outline-none focus:ring-1 focus:ring-blue-400" id="address" placeholder="Address" rows="3"></textarea>
//                           </div>
//                           <div>
//                            <label class="block font-semibold text-sm mb-1" for="country">
//                             Country
//                            </label>
//                            <select class="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-400" id="country">
//                             <option>
//                              India
//                             </option>
//                             <option>
//                              America
//                             </option>
//                             <option>
//                              England
//                             </option>
//                            </select>
//                           </div>
//                           <div class="flex items-center gap-3">
//                            <div>
//                             <label class="block font-semibold text-sm mb-1" for="city">
//                              City
//                             </label>
//                             <select class="w-48 border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-400" id="city">
//                              <option>
//                               Hyderabad
//                              </option>
//                              <option>
//                               Bengulor
//                              </option>
//                              <option>
//                               delhi
//                              </option>
//                             </select>
//                            </div>
//                            <label class="flex items-center gap-2 mt-6 text-sm select-none">
//                             <input type="checkbox"/>
//                             Other City
//                            </label>
//                           </div>
//                          </div>
//                         </fieldset>
//                         <fieldset class="border-t border-gray-200 p-6">
//                          <legend class="text-lg font-semibold mb-6 px-1">
//                           Skiils
//                          </legend>
//                          <div class="grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-2 text-sm">
//                           <label class="flex items-center gap-2">
//                            <input type="checkbox" value="AWS" name="skills"/>
//                            AWS
//                           </label>
//                           <label class="flex items-center gap-2">
//                            <input type="checkbox" value="DevOps" name="skills"/>
//                            DevOps
//                           </label>
//                           <label class="flex items-center gap-2">
//                            <input type="checkbox" value="Full Stack Developer" name="skills"/>
//                            Full Stack Developer
//                           </label>
//                           <label class="flex items-center gap-2">
//                            <input type="checkbox" value="Middleware" name="skills"/>
//                            Middleware
//                           </label>
//                           <label class="flex items-center gap-2">
//                            <input type="checkbox" value="QA-Automation" name="skills"/>
//                            QA-Automation
//                           </label>
//                           <label class="flex items-center gap-2">
//                            <input type="checkbox" value="WebServices" name="skills"/ >
//                            WebServices
//                           </label>
//                          </div>
//                     </fieldset>
//                         <div class="flex justify-end gap-3 p-6 border-t border-gray-200">
//                          <button class="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded" type="submit" id='submit'>
//                           Save
//                          </button>
//                          <button class="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded" type="button">
//                           Cancel
//                          </button>
//                         </div>
//                </form>`
//      Content.innerHTML = content;
      setTimeout(() => {
          document.getElementById('submit')?.addEventListener('click', SendData);
        }, 10);
      //sending form data
      function getCSRFToken() {
          const csrfToken = document.querySelector('meta[name="csrf-token"]');
          return csrfToken ? csrfToken.getAttribute('content') : '';
      }
      async function SendData() {
          const firstName = document.getElementById('firstName').value;
          const lastName = document.getElementById('lastName').value;
          const mail = document.getElementById('email').value;
          const phone = document.getElementById('mobile').value;
          const dob = document.getElementById('dob').value;
          const selectedGender = document.querySelector('input[name="gender"]:checked')?.value || '';
          const address = document.getElementById('address').value;
          const country = document.getElementById('country').value;
          const city = document.getElementById('city').value;

          const skillElements = document.querySelectorAll('input[name="skills"]:checked');
          const skills = Array.from(skillElements).map(el => el.value);

          const data = {
            fName: firstName,
            lName: lastName,
            mail: mail,
            phone: phone,
            dob: dob,
            Gender: selectedGender,
            address: address,
            country: country,
            city: city,
            skills: skills
          };

          const response = await fetch('/Employee/register',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-CSRFToken': getCSRFToken()// Make sure this function exists
            },
            body: JSON.stringify(data)
          });
            const output = await response.json();
            alert(output['message'])
      }

        // Better DOM-safe binding
    }else if (innerContent === 'Search Employees') {
          let searchContent = `
            <div class="border-b border-blue-400">
              <div class="flex items-center gap-2 px-6 py-3">
                <h1 class="text-2xl font-light">Employee</h1>
                <span class="text-gray-500 font-normal text-sm">Search</span>
              </div>
            </div>
            <div id="popup" class="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center mt-2">
                  <div class="bg-white p-6 rounded shadow-lg relative w-80">
                    <span class="absolute top-2 right-4 text-xl cursor-pointer text-gray-600" onclick="closePopup()">&times;</span>
                    <h1 id="popup-message" class="text-green-600 text-center font-medium text-lg">
                      <!-- Message goes here -->
                    </h1>
                  </div>
            </div>
            <div class="p-6 space-y-6">
              <div class="flex justify-between items-center border border-blue-400 rounded-t px-4 py-2">
                <h2 class="text-lg font-normal">Search Employee</h2>
                <button
                  class="bg-blue-400 text-white px-4 py-1 rounded text-sm hover:bg-blue-500 transition"
                  onclick="load_register()"
                >
                  Add Employee
                </button>
              </div>

              <form id="searchForm" class="flex flex-wrap gap-4 px-4 py-4 border border-t-0 border-blue-400 rounded-b">
                <div class="flex flex-col w-full sm:w-72">
                  <label for="name" class="text-sm font-normal mb-1">Name</label>
                  <input type="text" id="name" placeholder="Employee Name"
                    class="border border-gray-300 rounded px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                <div class="flex flex-col w-full sm:w-72">
                  <label for="mobile" class="text-sm font-normal mb-1">Mobile No</label>
                  <input type="text" id="mobile" placeholder="Mobile No"
                    class="border border-gray-300 rounded px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                <div class="flex items-end gap-2">
                  <button type="submit"
                    class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded" id="search">
                    Search
                  </button>
                  <button type="reset"
                    class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
                    Clear
                  </button>
                </div>
              </form>

              <div class="overflow-x-auto">
                <table class="min-w-full border-collapse border border-gray-200 text-sm">
                  <thead class="bg-gray-50 text-gray-700 font-semibold">
                    <tr>
                      <th class="border px-3 py-2">First Name</th>
                      <th class="border px-3 py-2">Last Name</th>
                      <th class="border px-3 py-2">Mobile No</th>
                      <th class="border px-3 py-2">Email Id</th>
                      <th class="border px-3 py-2">Gender</th>
                      <th class="border px-3 py-2">Birth Date</th>
                      <th class="border px-3 py-2">Country</th>
                      <th class="border px-3 py-2">City</th>
                      <th class="border px-3 py-2">Action</th>
                    </tr>
                  </thead>
                  <tbody id="tableBody" class="text-gray-900"></tbody>
                </table>
              </div>
            </div>`;

          Content.innerHTML = searchContent;

          // Utility: Get CSRF Token
          function getCSRFToken() {
            const csrfToken = document.querySelector('meta[name="csrf-token"]');
            return csrfToken ? csrfToken.getAttribute('content') : '';
          }

          // Load initial data
          async function TableData() {
            const tableBody = document.getElementById('tableBody');
            const response = await fetch('/employee/details');
            const result = await response.json();

            tableBody.innerHTML = '';
            result.forEach(item => {
              const row = document.createElement('tr');
              row.className = 'rowData border-b border-yellow-400';

              row.innerHTML = `
                <td class="p-2 text-center">${item[0]}</td>
                <td class="p-2 text-center">${item[1]}</td>
                <td class="p-2 text-center">${item[2]}</td>
                <td class="p-2 text-center">${item[3]}</td>
                <td class="p-2 text-center">${item[4]}</td>
                <td class="p-2 text-center">${item[5]}</td>
                <td class="p-2 text-center">${item[7]}</td>
                <td class="p-2 text-center">${item[8]}</td>
                <td class="px-3 py-2 flex gap-1 justify-center">
                  <button class="edit-btn bg-green-600 hover:bg-green-700 text-white px-2 rounded text-xs">Edit</button>
                  <button class="delete-btn bg-red-600 hover:bg-red-700 text-white px-2 rounded text-xs">Delete</button>
                </td>`;
              tableBody.appendChild(row);
            });
          }
          function showPopup(message) {
                const popup = document.getElementById('popup');
                const popupMessage = document.getElementById('popup-message');
                popupMessage.innerText = message;
                popup.classList.remove('hidden');

                // Auto-close after 3 seconds
                setTimeout(() => {
                  popup.classList.add('hidden');
                }, 3000);
          }

          function closePopup() {
            document.getElementById('popup').classList.add('hidden');
          }

          // Attach Filter Form Submit Handler
          document.getElementById('searchForm').addEventListener('submit', async (event) => {
            event.preventDefault();
            const tableBody = document.getElementById('tableBody');
            const name = document.getElementById('name').value;
            const phone = document.getElementById('mobile').value;

            const response = await fetch('/employee/SearchEmployee', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCSRFToken()
              },
              body: JSON.stringify({ name, phone })
            });

            const result = await response.json();
            tableBody.innerHTML = '';
            result.forEach(item => {
              const row = document.createElement('tr');
              row.className = 'rowData border-b border-yellow-400';
              row.innerHTML = `
                <td class="p-2 text-center">${item[0]}</td>
                <td class="p-2 text-center">${item[1]}</td>
                <td class="p-2 text-center">${item[2]}</td>
                <td class="p-2 text-center">${item[3]}</td>
                <td class="p-2 text-center">${item[4]}</td>
                <td class="p-2 text-center">${item[5]}</td>
                <td class="p-2 text-center">${item[7]}</td>
                <td class="p-2 text-center">${item[8]}</td>
                <td class="px-3 py-2 flex gap-1 justify-center">
                  <button class="edit-btn bg-green-600 hover:bg-green-700 text-white px-2 rounded text-xs">Edit</button>
                  <button class="delete-btn bg-red-600 hover:bg-red-700 text-white px-2 rounded text-xs">Delete</button>
                </td>`;
              tableBody.appendChild(row);
            });
          });

          // ✅ Event Delegation for Delete Buttons (works on dynamically loaded rows)
          document.getElementById('tableBody').addEventListener('click', async (e) => {
            if (e.target.classList.contains('delete-btn')) {
              const tr = e.target.closest('tr');
              const cells = tr.querySelectorAll('td');
              const popup=document.getElementById('popup')
              const rowData = Array.from(cells).slice(0, -1).map(td => td.textContent.trim());

              try {
                const response = await fetch('/employee/delete', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': getCSRFToken()
                  },
                  body: JSON.stringify({ rows: rowData })
                });

                const result = await response.json();
                console.log("Deleted row result:", result);

                if (result['Status']==='Success'){
                       showPopup(result['message']);
                }
                  tr.remove(); // Remove row on success
              } catch (error) {
                console.error("Delete failed:", error);
              }
            }
          });

          // Initial table data load
          TableData();
    }

  });
});