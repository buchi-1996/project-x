class SideBarActions {
    constructor() {
        this.sidebarButtons = document.querySelectorAll('.sidebar_menu-item')
        this.sidebarSettingsModal = document.querySelector('.tools_sidebar')
        this.sidebarModalContents = document.querySelector('.tools_sidebar-content')
        this.closeSettingsModalBtn = document.querySelector('.settings-close-btn')
        this.settingsTitle;
        this.currentMenuItem;
        this.handleSidebarButtonClick()
        this.showSettingsModal('Door Frame', 0)
        this.closeSettingsModalBtn.addEventListener('click', this.closeSettingsModal)
    }

    handleSidebarButtonClick = () => {
        this.sidebarButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                this.sidebarButtons.forEach(btn => btn.classList.remove('active'));
                this.currentMenuItem = +button.dataset.id
                console.log(button);
                // reset active states
                this.closeSettingsModal();

                this.settingsTitle = button.children[0].lastElementChild.textContent
                button.classList.add('active')


                setTimeout(() => {
                    this.showSettingsModal(this.settingsTitle, this.currentMenuItem)
                }, 40);
            })
        })
    }

    // Sidebar Menu options
    doorFrames = () => {
        return(
            `<ul class="door-frames">
                        <li class="door-frame">
                            <span class="selected">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                  </svg>                                  
                            </span>
                            <img src="./assets/images/frames/frame-sample-1.png" width="400px" alt="">
                            <small>frame 1</small>
                        </li>
                        <li class="door-frame">
                            <img src="./assets/images/frames/frame-sample-2.png" alt="">
                            <small>frame 2</small>
                        </li>
                        <li class="door-frame">
                            <img src="./assets/images/frames/frame-sample-3.png" alt="">
                            <small>frame 3</small>
                        </li>
                        <li class="door-frame">
                            <img src="./assets/images/frames/frame-sample-4.png" alt="">
                            <small>frame 4</small>
                        </li>
                        <li class="door-frame">
                            <img src="./assets/images/frames/frame-sample-5.png" alt="">
                            <small>frame 5</small>
                        </li>
                        <li class="door-frame">
                            <img src="./assets/images/frames/frame-sample-6.png" alt="">
                            <small>frame 6</small>
                        </li>
                        <li class="door-frame">
                            <img src="./assets/images/frames/frame-sample-7.png" alt="">
                            <small>frame 7</small>
                        </li>
                        <li class="door-frame">
                            <img src="./assets/images/frames/frame-sample-8.png" alt="">
                            <small>frame 8</small>
                        </li>
                        <li class="door-frame">
                            <img src="./assets/images/frames/frame-sample-9.png" alt="">
                            <small>frame 9</small>
                        </li>
                        <li class="door-frame">
                            <img src="./assets/images/frames/frame-sample-10.png" alt="">
                            <small>frame 10</small>
                        </li>
                        <li class="door-frame">
                            <img src="./assets/images/frames/frame-sample-11.png" alt="">
                            <small>frame 11</small>
                        </li>
                     </ul>
            `
        )
    }

    housefront = () => {
        return (
            `<!-- Upload House Front -->
                    <form>
                        <label for="house-sample">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                                </svg>
                            </span>
                            Upload House Front
                            <input type="file" id="house-sample" name="house-sample">
                        </label>
                    </form>
                    <!-- House fronts -->
                    <ul class="house-fronts">
                        <li class="house-front">
                        <span class="selected">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                  </svg>                                  
                            </span>
                            <img src="./assets/images/house-front/c53a5bf9-d20c-441c-840b-114e267968cf.png" alt="">
                        </li>
                        <li class="house-front">
                            <img src="./assets/images/house-front/c5a1d5c1-4257-4c53-bbef-e975ca66ebf9.png" alt="">
                        </li>
                        <li class="house-front">
                            <img src="./assets/images/house-front/cc6b221e-9b3a-49eb-b8ec-6f4fec8c51c6.png" alt="">
                        </li>
                        <li class="house-front">
                            <img src="./assets/images/house-front/0fe4cc53-f90c-4f07-89a8-a369814d5a6d.png" alt="">
                        </li>
                        <li class="house-front">
                            <img src="./assets/images/house-front/3f2bd0a3-e074-4ce0-bfec-80d3d33d89b7.png" alt="">
                        </li>
                        <li class="house-front">
                            <img src="./assets/images/house-front/6ca6e2eb-4a8b-4e7a-ba90-74386173fc0c.png" alt="">
                        </li>
                    </ul>`
        )
    }

    doorType = () => {
        return(
            `<ul class="door-types">
                        <div class="door-type">
                        <span class="selected">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                  </svg>                                  
                            </span>
                            <img src="./assets/images/door-types/57b92214-fd08-4a49-9381-b6c2bd8a0f8c.png" alt="">
                            <small>Front door</small>
                        </div>
                        <div class="door-type">
                            <img src="./assets/images/door-types/70bae32b-aa87-47e7-b397-4a3b34a40afe.png" alt="">
                            <small>Back door</small>
                        </div>
                        <div class="door-type">
                            <img src="./assets/images/door-types/9ff9be81-e5be-4711-aa29-610a8514d7fa.png" alt="">
                            <small>Patio door</small>
                        </div>
                        
                     </ul>`
        )
    }

    color = () => {
        return(
            `<ul class="colors">
                        <li class="color">
                        <span class="selected">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                  </svg>                                  
                            </span>
                            <small>#4F3731</small>
                        </li>
                        <li class="color">
                            <small>#324035</small>
                        </li>
                        <li class="color">
                            <small>#742E30</small>
                        </li>
                        <li class="color">
                            <small>#93949E</small>
                        </li>
                        <li class="color">
                            <small>#2C3B44</small>
                        </li>
                        <li class="color">
                            <small>#3F434C</small>
                        </li>
                        <li class="color">
                            <small>#AD8C4D</small>
                        </li>
                        <li class="color">
                            <small>#742E31</small>
                        </li>
                        <li class="color">
                            <small>#324034</small>
                        </li>
                        <li class="color">
                            <small>#2B4939</small>
                        </li>
                     </ul>
            `
        )
    }

    material = () => {
        return(
            `
            <ul class="materials">
                        <li class="material">
                            <img src="./assets/images/material/8Aw_c57dQIa4odlhF0_-jg.webp" alt="">
                            <small>Wood</small>
                        </li>
                        <li class="material">
                            <img src="./assets/images/material/FzWRBCtPSzaPd4ArsyxgpQ.jpeg" alt="">
                            <small>Steel</small>
                        </li>
                        <li class="material">
                            <img src="./assets/images/material/28CFWnC0QLyhhNOuIK5pUg.webp" alt="">
                            <small>Fibre Glass</small>
                        </li>
                     </ul>
            `
        )
    }

    showSettingsModal = (title, id) => {
        // if title matches show settings for title
        this.sidebarSettingsModal.scrollTop = 0;
        this.sidebarSettingsModal.firstElementChild.firstElementChild.innerText = title
        if (id === 0) {
            this.sidebarModalContents.innerHTML = this.doorFrames()
        }else if(id === 1){
            this.sidebarModalContents.innerHTML = this.housefront()
        }else if(id === 2){
            this.sidebarModalContents.innerHTML = this.doorType()
        }else if(id === 3){
            this.sidebarModalContents.innerHTML = this.color()
        }else if(id === 4){
            this.sidebarModalContents.innerHTML = this.material()
        }else if(id === 5){
            this.sidebarModalContents.innerHTML = ''
        }else if(id === 6){
            this.sidebarModalContents.innerHTML = ''
        }


        this.sidebarSettingsModal.classList.add('showModal')
    }

    closeSettingsModal = () => {
        this.sidebarSettingsModal.classList.remove('showModal')
    }

}

let sidebarActions = new SideBarActions()