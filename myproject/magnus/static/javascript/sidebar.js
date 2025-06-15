const links = document.querySelectorAll('#more a');
const mainContent = document.getElementById("main_section");

links.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const innerContent = this.innerText.trim();

    if (innerContent === 'Multiple Tabs') {
      const content = `
        <div class="flex justify-between items-center mb-4">
          <h1 class="text-2xl font-normal text-slate-800 select-none">Tabs</h1>
          <nav class="text-sm text-slate-500 select-none flex items-center space-x-1">
            <i class="fas fa-palette"></i>
            <span>Home</span><span> &gt; </span><span>More</span><span> &gt; </span>
            <span class="text-slate-400">Tabs</span>
          </nav>
        </div>
        <div class="bg-white rounded-md shadow border border-slate-200">
          <div class="flex border-b border-slate-300" id='button'>
            <button class="py-2 px-5 text-blue-600 font-normal rounded-tl-md select-none" type="button">Plan to Succeed</button>
            <button class="py-2 px-6 text-blue-600 font-normal select-none" type="button">UnLearning</button>
            <button class="py-2 px-6 text-blue-600 font-normal rounded-tr-md select-none" type="button">Ways of Unlearning</button>
          </div>
          <div class="p-5 text-slate-900 text-sm space-y-3" id='text'>
            <p>Default tab content goes here...</p>
          </div>
        </div>`;

      mainContent.innerHTML = content;

      setTimeout(() => {
        const para = document.getElementById('text');
        const btns = document.querySelectorAll('#button button');

        btns.forEach(btn => {
          btn.addEventListener('click', function () {
            const selectedTab = this.innerText.trim();

            btns.forEach(b => {
              b.classList.remove('bg-blue-600', 'text-white');
              b.classList.add('text-blue-600');
            });

            this.classList.remove('text-blue-600');
            this.classList.add('bg-blue-600', 'text-white');

            let information = '';
            if (selectedTab === 'Plan to Succeed') {
              information = `
                <p>Follow the plan for the first 45 days...</p>
                <p>This is your best chance to succeed.</p>
                <div class="flex space-x-10">
                  <input class="border border-slate-300 rounded px-3 py-2 w-48 focus:outline-none focus:ring-2 focus:ring-blue-600" type="text"/>
                  <input class="border border-slate-300 rounded px-3 py-2 w-48 focus:outline-none focus:ring-2 focus:ring-blue-600" type="text"/>
                </div>`;
            } else if (selectedTab === 'UnLearning') {
              information = `
                <p>You must UNLEARN to LEARN.</p>
                <p>Technology is changing rapidly.</p>
                <div class="flex space-x-10">
                  <input class="border border-slate-300 rounded px-3 py-2 w-48 focus:outline-none focus:ring-2 focus:ring-blue-600" type="text"/>
                  <input class="border border-slate-300 rounded px-3 py-2 w-48 focus:outline-none focus:ring-2 focus:ring-blue-600" type="text"/>
                </div>`;
            } else{
              information = `
                <p>Explore new ways of unlearning the old.</p>
                <p>Think differently and grow faster.</p>
                <div class="flex space-x-10">
                  <input class="border border-slate-300 rounded px-3 py-2 w-48 focus:outline-none focus:ring-2 focus:ring-blue-600" type="text"/>
                  <input class="border border-slate-300 rounded px-3 py-2 w-48 focus:outline-none focus:ring-2 focus:ring-blue-600" type="text"/>
                </div>`;
            }

            para.innerHTML = information;
          });
        });
      }, 100);

    }else if (innerContent === 'Menu') {
  const menuContent = `
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-normal mb-4 text-gray-800">Menu</h1>
      <nav class="text-sm text-slate-500 select-none flex items-center space-x-1">
        <i class="fas fa-palette"></i>
        <span>Home</span><span> &gt; </span><span>Menu</span><span> &gt; </span>
      </nav>
    </div>
    <div class="bg-white rounded border border-gray-300 shadow-sm max-w-4xl">
      <div class="border-b border-gray-300 flex" id="menu-tabs">
        <button class="bg-[#3b87b9] text-white px-5 py-2 rounded-t border-r border-[#2f6ea6] font-normal text-sm active" type="button">Single Menus</button>
        <button class="text-[#3b87b9] px-5 py-2 rounded-t text-sm hover:bg-blue-100 hover:text-blue-800 transition duration-200" type="button">Sub Menus</button>
      </div>
      <div class="flex p-6">
        <div>
          <ul class="w-40 text-center text-white font-normal text-base" id='list'>
            <!-- List items will be inserted dynamically -->
          </ul>
        </div>
        <div class='ml-3' id='message'><h1>Select a menu</h1></div>
      </div>
    </div>`;

  mainContent.innerHTML = menuContent;

  setTimeout(() => {
    const menuList = document.getElementById('list');
    const para = document.getElementById('message');
    const tabButtons = document.querySelectorAll('#menu-tabs button');

    // Define menu data
    const singleMenus = ['Testing', 'JAVA', '.Net', 'Database'];
    const subMenus = ['Python', 'React', 'Angular', 'NodeJS'];

    // Function to render menu items
    function renderMenu(items) {
      menuList.innerHTML = items.map(item => `
        <li class="bg-[#3b87b9] border border-[#2f6ea6] py-2 cursor-pointer hover:bg-[#2f6ea6] transition duration-200">${item}</li>
      `).join('');

      attachListListeners();
    }

    // Function to attach click listeners to menu items
    function attachListListeners() {
      const items = menuList.querySelectorAll('li');
      items.forEach(item => {
        item.addEventListener('click', function () {
          const selected = this.innerText.trim();

          items.forEach(li => {
            li.classList.remove('bg-[#2f6ea6]');
            li.classList.add('bg-[#3b87b9]');
          });

          this.classList.remove('bg-[#3b87b9]');
          this.classList.add('bg-[#2f6ea6]' );

          para.innerHTML = `<p>You selected: <strong>${selected}</strong></p>`;
        });
      });
    }

    // Initial menu load
    renderMenu(singleMenus);

    // Tab switching logic
    tabButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        tabButtons.forEach(b => b.classList.remove('bg-[#3b87b9]', 'text-white'));
        this.classList.add('bg-[#3b87b9]', 'text-white');

        const tabText = this.innerText.trim();
        if (tabText === 'Single Menus') {
          renderMenu(singleMenus);
        } else if (tabText === 'Sub Menus') {
          renderMenu(subMenus);
        }
        para.innerHTML = `<h1>Select a menu</h1>`;
      });
    });
  }, 100);

}else if(innerContent === 'Images'){
        ImageContent=`<div class="flex justify-between items-center mb-4">
                  <h1 class="text-2xl font-normal text-slate-800 select-none">Tabs</h1>
                  <nav class="text-sm text-slate-500 select-none flex items-center space-x-1">
                    <i class="fas fa-palette"></i>
                    <span>Home</span><span> &gt; </span><span>More</span><span> &gt; </span>
                    <span class="text-slate-400">Tabs</span>
                  </nav>
                </div>
                <form class="flex flex-wrap items-center space-x-6 max-w-4xl">
                  <label class="block text-sm font-normal text-gray-800" for="fileInput">
                   Select File :
                  </label>
                  <input class="border border-gray-300 rounded px-2 py-1 text-sm cursor-pointer" id="imageInput" type="file"/>
                  <label class="block text-sm font-normal text-gray-800 ml-12" for="fileName">
                   File Name :
                  </label>
                  <input class="border border-gray-300 rounded px-3 py-2 text-sm text-gray-400 placeholder-gray-400 w-64" id="fileName" placeholder="File Name" type="text"/>
                  <button class="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded" type="submit" id="button">
                   Upload
                  </button>

                 </form>
                 <button class="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 w-20  rounded self-end" type="submit" id="Remove">
                  Remove
                  </button>
                <div class="mt-8 text-lg font-normal text-gray-800" id='imageDiv'>
                  List Of Images :
                  <img id="previewImage" class="mt-4 max-w-xs rounded border" />
                </div>`

        mainContent.innerHTML = ImageContent;

        setTimeout(() => {
            const uploadBtn = document.getElementById('button');
            const removeBtn = document.getElementById('Remove');
            const input = document.getElementById('imageInput');
            const container = document.getElementById('imageDiv');

            uploadBtn.addEventListener('click', function () {
                const file = input.files[0];
                let img = document.getElementById('previewImage');

                if (img) {
                    // Replace existing image
                    if (file) {
                        const reader = new FileReader();
                        reader.onload = function (e) {
                            img.src = e.target.result;
                        };
                        reader.readAsDataURL(file);
                    }
                } else {
                    // Create new image and append
                    img = document.createElement('img');
                    img.id = 'previewImage';
                    img.className = 'w-60 h-auto mt-4 rounded border';

                    if (file) {
                        const reader = new FileReader();
                        reader.onload = function (e) {
                            img.src = e.target.result;
                        };
                        reader.readAsDataURL(file);
                    }

                    container.appendChild(img);
                }
            });

            removeBtn.addEventListener('click', () => {
                const img = document.getElementById('previewImage');
                if (img) {
                    img.remove(); // Remove the image
                }
                input.value = ''; // Clear file input
            });
        }, 100);



}else if(innerContent === 'Slider'){
    sliderContent=`
        <div class="flex justify-between items-center mb-4">
              <h1 class="text-2xl font-normal text-slate-800 select-none">Tabs</h1>
              <nav class="text-sm text-slate-500 select-none flex items-center space-x-1">
                <i class="fas fa-palette"></i>
                <span>Home</span><span> &gt; </span><span>More</span><span> &gt; </span>
                <span class="text-slate-400">Slider</span>
              </nav>
            </div>
        <div class="bg-white rounded-md shadow-sm border border-gray-200 w-100">
              <div class="border-b border-blue-500">
                <button
                  class="text-blue-600 px-5 py-3 text-sm font-normal border-b-2 border-blue-500"
                  type="button"
                >
                  Slider
                </button>

              </div>
              <div class="p-6">
                <input
                  type="range"
                  min="1"
                  max="100"
                  value="1"
                  class="w-full h-4 rounded-lg appearance-none cursor-pointer bg-blue-500"
                  id="slider"
                />
                <p class="mt-6 text-gray-900 text-sm font-normal">
                  Current Slider Value:
                  <span id="sliderValue" class="font-normal">1</span>
                </p>
              </div>
            </div>`
    mainContent.innerHTML = sliderContent;
    setTimeout(() => {
  const slider = document.getElementById("slider");
  const sliderValue = document.getElementById("sliderValue");

  const updateSliderColor = (value) => {
    sliderValue.textContent = value;

    // Change slider background color based on value
    let color = '#3b82f6'; // Default: blue-500

    if (value < 30) {
      color = '#ef4444'; // red-500
    } else if (value < 70) {
      color = '#f59e0b'; // amber-500
    } else {
      color = '#10b981'; // green-500
    }

    // Apply background to track (it affects whole slider in most browsers)
    slider.style.background = color;
  };

  if (slider && sliderValue) {
    updateSliderColor(slider.value); // Set initial state

    slider.addEventListener("input", () => {
      updateSliderColor(slider.value);
    });
  }
}, 0);


}else if (innerContent === 'Popups') {
  LinkContent = `
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-normal text-slate-800 select-none">Tabs</h1>
      <nav class="text-sm text-slate-500 select-none flex items-center space-x-1">
        <i class="fas fa-palette"></i>
        <span>Home</span><span> &gt; </span><span>More</span><span> &gt; </span>
        <span class="text-slate-400">Slider</span>
      </nav>
    </div>

    <!-- Popup Modal -->
    <div id="popup" class="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-start items-start mt-2">
      <div class="bg-white p-6 rounded shadow-lg relative w-80">
        <span class="absolute top-2 right-4 text-xl cursor-pointer text-gray-600" onclick="closePopup()">&times;</span>
        <iframe name="myFrame" class="w-full h-48 border mt-2"></iframe>
      </div>
    </div>

    <!-- Buttons -->
    <div class="flex flex-row gap-4 space-y-2 p-4 bg-white rounded shadow-md">
      <a href="https://example.com" target="myFrame" class="popup-link block text-center bg-blue-500 text-white px-4 py-2 rounded">PopUp</a>
      <a href="https://www.google.com" target="myFrame" class="popup-link bg-blue-500  text-white px-4 py-2 rounded hover:underline">PopUp</a>
      <a href="https://www.youtube.com/" class=" popup-link  bg-blue-500 text-white px-4 py-2 rounded hover:underline" target="myFrame">Popup</a>
      <a href="https://chrome.google.com/webstore?hl=en" class=" popup-link  bg-blue-500 text-white px-4 py-2 rounded hover:underline" target="myFrame">Popup</a>
      <a href="https://www.youtube.com/" class="text-blue-600 bg-blue-500 text-white px-4 py-2 rounded hover:underline" target="myFrame">Popup</a>
    </div>
  `;

  mainContent.innerHTML = LinkContent;

  // Wait for DOM to update, then add event listeners
  setTimeout(() => {
    const popupLinks = document.querySelectorAll('.popup-link');
    popupLinks.forEach(link => {
      link.addEventListener('click', () => {
        document.getElementById('popup').classList.remove('hidden');
      });
    });

    // Add global close function
    window.closePopup = function () {
      document.getElementById('popup').classList.add('hidden');
    };
  },0);
}else if(innerContent === 'Links'){
      LinkContent = `
            <div class="flex justify-between items-center mb-4">
              <h1 class="text-2xl font-normal text-slate-800 select-none">Tabs</h1>
              <nav class="text-sm text-slate-500 select-none flex items-center space-x-1">
                <i class="fas fa-palette"></i>
                <span>Home</span><span> &gt; </span><span>More</span><span> &gt; </span>
                <span class="text-slate-400">Links</span>
              </nav>
            </div>

            <!-- Buttons -->
            <div class="flex flex-col gap-2 space-y-2 p-4 bg-white rounded shadow-md">
              <a href="https://example.com" target="myFrame" class="popup-link block text-center bg-blue-500 text-white px-4 py-2 rounded">Example Link</a>
              <a href="https://www.google.com" class="popup-link bg-blue-500  text-white  text-center px-4 py-2 rounded hover:underline">Google Link</a>
              <a href="https://www.youtube.com/" class=" popup-link  bg-blue-500 text-white text-center px-4 py-2 rounded hover:underline" target="_self">YouTube</a>
              <a href="https://chrome.google.com/webstore?hl=en" class=" popup-link  bg-red-500 text-center text-white px-4 py-2 rounded hover:underline" target="_blank">Google store</a>
              <a href="https://www.github.com/" class="text-blue-600 bg-red-500 text-white px-4 py-2 text-center rounded hover:underline" target="parent">GitHub</a>
              <a href="https://www.instagram.com/" class="text-blue-600 bg-red-500 text-white px-4 py-2  text-center rounded hover:underline" target="_self">Instagram</a>
              <a href="https://www.facebook.com/" class="text-blue-600 bg-green-500 text-white px-4 py-2  text-center rounded hover:underline" >facebook</a>
              <a href="https://www.geekforgeeks.com/" class="text-blue-600 bg-green-500 text-white px-4 py-2 text-center rounded hover:underline" >GFG</a>
              <a href="https://www.tutorialpoint.com/" class="text-blue-600 bg-green-500 text-white px-4 py-2 text-center rounded hover:underline" >TP</a>
              <a href="https://www.google.com/" class="text-blue-600 bg-green-500 text-white px-4 py-2  text-center rounded hover:underline" >Main</a>

            </div>
          `;
          mainContent.innerHTML = LinkContent;

          // Wait for DOM to update, then add event listeners
}else if(innerContent === 'CSS Properties'){
       LinkContent = `
            <div class="flex justify-between items-center mb-4">
              <h1 class="text-2xl font-normal text-slate-800 select-none">Tabs</h1>
              <nav class="text-sm text-slate-500 select-none flex items-center space-x-1">
                <i class="fas fa-palette"></i>
                <span>Home</span><span> &gt; </span><span>More</span><span> &gt; </span>
                <span class="text-slate-400">Links</span>
              </nav>
            </div>
            <div class="bg-blue-300  " >

                <div class="flex gap-1 p-8 bg-green-400  rounded shadow-md hover:bg-green-500 ">
                      <!-- Small fixed-width box -->
                      <div class="bg-blue-500 text-white p-4 flex-grow">Flex box  with Blue Color Background</div>

                      <!-- Full remaining width -->
                      <div class="bg-red-500 text-Text p-4 flex-grow">Flex box  with black color Text</div>
                 </div>
                 <div class="flex gap-1 p-8 bg-yellow-500 rounded shadow-md hover:bg-yellow-300 ">
                      <!-- Small fixed-width box -->
                      <div class="bg-pink-500 text-2xl text-bold p-4 w-32 h-32">Flex box  with text Style </div>

                      <!-- Full remaining width -->
                      <div class="bg-blue-500 text-white p-4 flex-grow border border-dashed border-gray-400 rounded-md">Flex box  with border
                          <div class="border border-double border-red-500">First border</div>
                          <div class="border-4 border-yellow-500 rounded-lg mt-2 ">First border</div>
                      </div>
                 </div>
                 <div class="flex gap-1 p-8 bg-white rounded shadow-md">
                      <!-- Small fixed-width box -->
                      <div class="bg-blue-500 text-white p-4 w-60 h-60">Small Box</div>

                      <!-- Full remaining width -->
                      <div class="bg-blue-500 text-white p-4 flex-grow">Full Width Box</div>
                 </div>
            </div>
            `

       mainContent.innerHTML = LinkContent;
}
else {
      mainContent.innerHTML = `<h1 class="text-red-600 text-xl text-center py-5">Content not found</h1>`;
}
  });
});
