class App {
    constructor() {
        this.appCurrentMode = 'door';
        this.selectedFrameCount = 2
        this.settingsTitle;
        this.currentMenuItem = 0;
        this.currentMenuTab;
        this.sidebarSettingsModal = document.querySelector('.tools_sidebar')
        this.modalWrapper = document.querySelector('.conf_sidebar_wrapper')
        this.sidebarModalContents = document.querySelector('.tools_sidebar-content')
        this.closeSettingsModalBtn = document.querySelector('.settings-close-btn')
        this.houseFrontPreviewImg = document.querySelector('.blur')
        this.goFullScreenBtn = document.querySelector('.full-screen')
        this.getQuoteDesktop = document.querySelector('.summary');
        this.prevMenu = document.querySelector('.prev-btn');
        this.nextMenu = document.querySelector('.next-btn');
        this.desktopMenuItems = document.querySelector('.conf_sidebar_menu');
        this.modeSwitchButtonsDesktop = document.querySelectorAll('.conf_sidebar-header .product_select_button')
        this.modeSwitchButtonsMobile = document.querySelectorAll('.mobile_menu .product_select_button')
        this.setDoorModeBtn = document.querySelector('.door_tab-btn')
        this.setWindowModeBtn = document.querySelector('.window_tab-btn')



        // Mobile
        this.mobileMenuToggle = document.querySelector('.conf_mobile_menu-toggle')
        this.mobileMenu = document.querySelector('.mobile_menu')
        this.mobileModalContents = document.querySelector('.mobile_tools-bar')
        this.mobileSettingsTitle = document.querySelector('.mobile_settings_title')
        this.getQuoteMobile = document.querySelector('.summary_mobile');
        this.mobileMenuItems = document.querySelector('.mobile_menu-items');


        // Door Menus
        this.doorItemMenus = [
            {
                id: 0,
                title: 'Door Frames',
                icon: ` <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                            </svg>
                    </span>`,
                content: `<ul class="door-frames">
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
                     </ul>`
            },
            {
                id: 1,
                title: 'Dimension',
                icon: `<span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
                            </svg>
                        </span>`,
                content: `<div class="units">
                        <form class="units-form">
                            <div class="door-units unit-box">
                            <span>Door units:</span>
                                <div class="form-group">
                                    <input type="number" id="width" placeholder="Width">
                                </div>
                                <div class="form-group">
                                    <input type="number" id="height" placeholder="Height">
                                </div>
                            </div>
                            <div class="side-panel-1-units unit-box">
                            <span>Side Panel 1:</span>
                                <div class="form-group">
                                    <input type="number" id="width" placeholder="Width">
                                </div>
                            </div>
                            <div class="side-panel-1-units unit-box">
                            <span>Side Panel 2:</span>
                                <div class="form-group">
                                    <input type="number" id="width" placeholder="Width">
                                </div>
                            </div>
                            <input type="submit" id="save-units" value="Save" class="btn btn-secondary">
                         </form>    
                     </div>
                </div>`
            },
            {
                id: 2,
                title: 'House Front',
                icon: `<span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                            </svg>  
                        </span>`,
                content: `<!-- Upload House Front -->
                    <form>
                        <label for="house-sample" class="house-sample">
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
            },
            {
                id: 3,
                title: 'Catalog',
                icon: `<span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                            </svg>
                        </span>`,
                content: `<ul class="door-types">
                        <li class="door-type">
                        <span class="selected">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                  </svg>                                  
                            </span>
                            <img src="./assets/images/door-types/57b92214-fd08-4a49-9381-b6c2bd8a0f8c.png" alt="">
                            <small>Front door</small>
                        </li>
                        <li class="door-type">
                            <img src="./assets/images/door-types/70bae32b-aa87-47e7-b397-4a3b34a40afe.png" alt="">
                            <small>Back door</small>
                        </li>
                        <li class="door-type">
                            <img src="./assets/images/door-types/9ff9be81-e5be-4711-aa29-610a8514d7fa.png" alt="">
                            <small>Patio door</small>
                        </li>                     
                     </ul>`
            },
            {
                id: 4,
                title: 'Model',
                icon: `<span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                            </svg>
                        </span>`,
                content: `<div class="door_model">
                        ${this.selectedFrameCount > 1 ? `<div class="door_model-options">
                            <button class="btn btn-secondary">Door</button>
                            <button class="btn btn-outline">Side Panel</button>
                        </div>` : ''}
                        <div class="door_model-contents">
                            <!-- Dynamic content -->
                             
                            <ul class="door_model-images">
                                <li class="door_model-image">
                                    <span class="selected">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                          </svg>                                  
                                    </span>
                                    <img src="./assets/images/door-models/00c4746b-3a4f-443e-9486-c805a76ffa41.png" alt="">
                                    <small>Door model name</small>
                                </li>
                                <li class="door_model-image">
                                <span class="selected">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                          </svg>                                  
                                    </span>
                                    <img src="./assets/images/door-models/120b7cd9-e319-4856-b5fe-db819d9a03c1.png" alt="">
                                    <small>Door model name</small>
                                </li>
                                <li class="door_model-image">
                                <span class="selected">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                          </svg>                                  
                                    </span>
                                    <img src="./assets/images/door-models/371d02d9-c3c7-4743-aae6-682a7825ebf7.png" alt="">
                                    <small>Door model name</small>
                                </li>
                                <li class="door_model-image">
                                <span class="selected">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                          </svg>                                  
                                    </span>
                                    <img src="./assets/images/door-models/4d04bd76-6975-4cc2-b8dc-17539556f77d.png" alt="">
                                    <small>Door model name</small>
                                </li>
                                <li class="door_model-image">
                                <span class="selected">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                          </svg>                                  
                                    </span>
                                    <img src="./assets/images/door-models/f0a13962-4c35-41fb-8ecf-a1f83941c4b8.png" alt="">
                                    <small>Door model name</small>
                                </li>
                            </ul>
                        </div>
                     </div>`,

                subContent: `<ul class="side_panel">
                                <li class="side_panel-image">
                                    <span class="selected">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                          </svg>                                  
                                    </span>
                                    <img src="./assets/images/side-panels/98c16943-3589-4844-b034-fb204ee2bdf4.png" alt="">
                                </li>
                                <li class="side_panel-image">
                                    <img src="./assets/images/side-panels/df4d1e83-14c3-44f0-979d-af43c5d1c6d9.png" alt="">
                                </li>
                             </ul>`
            },
            {
                id: 5,
                title: 'Glasses',
                icon: `<span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
                            </svg>
                        </span>`,
                content: `<p>some glass materials displayed here</p>`
            },
            {
                id: 6,
                title: 'Colors',
                icon: `<span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z" />
                            </svg>
                        </span>`,
                content: `<ul class="colors">
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
                     </ul>`
            },
            {
                id: 7,
                title: 'Handles',
                icon: `<span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
                            </svg>
                        </span>`,
                content: `<p>different door key handles to be displayed</p>`
            },
            {
                id: 8,
                title: 'Options',
                icon: `<span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>
                        </span>`,
                content: `<p>more settings options</p>`
            },
            {
                id: 9,
                title: 'Done',
                icon: `<span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12" />
                            </svg>
                        </span>`,
                content: `<div class="summary_wrapper">
                        <div class="download_pdf">
                            <p>Get a summary of all your selections on a PDF with images included.</p>
                            <button class="btn btn-outline">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>
                                </span>
                                <p>Download PDF</p>
                            </button>
                        </div>
                        <form class="quote_form">
                            <div class="quote_form-heading">
                                <p>Request an individual offer for your model selection:</p>
                            </div>
                            <div class="row">
                                <div class="form-group">
                                    <label for="firstname">First Name</label>
                                    <input type="text" name="firstname" id="firstname" placeholder="First Name">
                                </div>
                                <div class="form-group">
                                    <label for="lastname">Last Name</label>
                                    <input type="text" name="lastname" id="lastname" placeholder="Last Name">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="address">Address</label>
                                <input type="text" name="address" id="address" placeholder="Address">
                            </div>
                            <div class="row">
                                <div class="form-group">
                                    <label for="zip-code">Zip Code</label>
                                    <input type="text" name="zip-code" id="zip-code" placeholder="Zip Code">
                                </div>
                                <div class="form-group">
                                    <label for="town">Town</label>
                                    <input type="text" name="town" id="town" placeholder="Town">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="state">State</label>
                                <input type="text" name="state" id="state" placeholder="State">
                            </div>
                            <div class="form-group">
                                <label for="phone">Phone</label>
                                <input type="number" name="phone" id="phone" placeholder="Telephone">
                            </div>
                            <div class="form-group">
                                <label for="email">Phone</label>
                                <input type="email" name="email" id="email" placeholder="Email">
                            </div>
                            <input type="submit" value="Send Quote" class="btn btn-secondary mt-2">
                        </form>
                    </div>`
            },
        ]



        // Window Menus
        this.windowItemMenus = [
            {
                id: 0,
                title: 'Window Frames',
                icon: ` <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                            </svg>
                    </span>`,
                content: `<p>window style frames</p>`
            },
            {
                id: 1,
                title: 'House Front',
                icon: `<span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                            </svg>  
                        </span>`,
                content: `<p>window style house fronts</p>`
            },
            {
                id: 2,
                title: 'Dimension',
                icon: `<span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
                            </svg>
                        </span>`,
                content: `<p>set window dimensions</p>`
            },
            {
                id: 3,
                title: 'Catalog',
                icon: `<span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                            </svg>
                        </span>`,
                content: `<p>some window catalog smaples</p>`
            },
            {
                id: 4,
                title: 'Model',
                icon: `<span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                            </svg>
                        </span>`,
                content: `<p>models specific to selected catalog</p>`
            },
            {
                id: 5,
                title: 'Glasses',
                icon: `<span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
                            </svg>
                        </span>`,
                content: `<p>window glasses</p>`
            },
            {
                id: 6,
                title: 'Colors',
                icon: `<span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z" />
                            </svg>
                        </span>`,
                content: `<ul class="colors">
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
                     </ul>`
            },

            {
                id: 7,
                title: 'Handles',
                icon: `<span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
                            </svg>
                        </span>`,
                content: `<p>window handles</p>`
            },
            {
                id: 8,
                title: 'Options',
                icon: `<span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>
                        </span>`,
                content: `<p>more windows settings option</p>`
            },
            {
                id: 9,
                title: 'Done',
                icon: `<span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12" />
                            </svg>
                        </span>`,
                content: `<div class="summary_wrapper">
                        <div class="download_pdf">
                            <p>Get a summary of all your selections on a PDF with images included.</p>
                            <button class="btn btn-outline">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>
                                </span>
                                <p>Download PDF</p>
                            </button>
                        </div>
                        <form class="quote_form">
                            <div class="quote_form-heading">
                                <p>Request an individual offer for your model selection:</p>
                            </div>
                            <div class="row">
                                <div class="form-group">
                                    <label for="firstname">First Name</label>
                                    <input type="text" name="firstname" id="firstname" placeholder="First Name">
                                </div>
                                <div class="form-group">
                                    <label for="lastname">Last Name</label>
                                    <input type="text" name="lastname" id="lastname" placeholder="Last Name">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="address">Address</label>
                                <input type="text" name="address" id="address" placeholder="Address">
                            </div>
                            <div class="row">
                                <div class="form-group">
                                    <label for="zip-code">Zip Code</label>
                                    <input type="text" name="zip-code" id="zip-code" placeholder="Zip Code">
                                </div>
                                <div class="form-group">
                                    <label for="town">Town</label>
                                    <input type="text" name="town" id="town" placeholder="Town">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="state">State</label>
                                <input type="text" name="state" id="state" placeholder="State">
                            </div>
                            <div class="form-group">
                                <label for="phone">Phone</label>
                                <input type="number" name="phone" id="phone" placeholder="Telephone">
                            </div>
                            <div class="form-group">
                                <label for="email">Phone</label>
                                <input type="email" name="email" id="email" placeholder="Email">
                            </div>
                            <input type="submit" value="Send Quote" class="btn btn-secondary mt-2">
                        </form>
                    </div>`
            },
        ]






        // onload events
        this.setAppMode()
        this.displayMenuItems()
        this.handleDynamicMenuButtonClick()
        this.showSettingsModal('Door Frame', 0)
        this.showMobileSettingsModal('Door Frame', 0)
        this.modalWrapper.classList.add('showModal')
        // set menu active state onload for both desktop and mobile
        this.loadActiveStates()
        this.getCurrentToolsBarContent()


        // Event Listeners
        this.closeSettingsModalBtn.addEventListener('click', this.closeSettingsModal)
        this.mobileMenuToggle.addEventListener('click', this.handleMobilemenuToggle)
        this.prevMenu.addEventListener('click', this.handlePrevClick)
        this.nextMenu.addEventListener('click', this.handleNextClick)
        this.getQuoteMobile.addEventListener('click', () => {
            this.showMobileSettingsModal('Done', 9)
            this.showSettingsModal('Done', 9)
        })
        this.getQuoteDesktop.addEventListener('click', () => {
            this.showSettingsModal('Done', 9)
            this.showMobileSettingsModal('Done', 9)
            this.sidebarSettingsModal.classList.remove('showModal')

            setTimeout(() => {
                this.modalWrapper.classList.add('showModal')
                this.sidebarSettingsModal.classList.add('showModal')

            }, 40)
            const desktopActiveItems = this.desktopMenuItems.querySelectorAll('.sidebar_menu-item');
            desktopActiveItems.forEach(btn => btn.classList.remove('active'));
            desktopActiveItems[9].classList.add('active')
            this.currentMenuItem = 9;

        })

        this.goFullScreenBtn.addEventListener('click', this.requestFullScreen)

    }


    // Methods
    setAppMode = () => {
        if (this.appCurrentMode === 'door') {
            this.modeSwitchButtonsDesktop[0].classList.add('active');
            this.modeSwitchButtonsMobile[0].classList.add('active');
        } else if (this.appCurrentMode === 'window') {
            this.modeSwitchButtonsDesktop[1].classList.add('active');
            this.modeSwitchButtonsMobile[1].classList.add('active');
        }

        const switchMode = (mode, index) => {
            this.modeSwitchButtonsDesktop.forEach(btn => btn.classList.remove('active'));
            this.modeSwitchButtonsMobile.forEach(btn => btn.classList.remove('active'));

            this.appCurrentMode = mode.toLowerCase();

            this.modeSwitchButtonsDesktop[index].classList.add('active');
            this.modeSwitchButtonsMobile[index].classList.add('active');

            // Update the menu items based on the current mode
            this.displayMenuItems();

            // Reapply the active class to the first menu item
            const desktopMenuItems = document.querySelectorAll('.sidebar_menu-item');
            desktopMenuItems[this.currentMenuItem].classList.add('active');
            // Update Settings title for desktop
            const currentDesktopSettingsTitle = desktopMenuItems[this.currentMenuItem].firstElementChild.children[1].textContent;
            this.showSettingsModal(currentDesktopSettingsTitle, this.currentMenuItem)
            this.modalWrapper.classList.add('showModal')


            const mobileMenuItems = document.querySelectorAll('.mobile_menu-item');
            mobileMenuItems[this.currentMenuItem].classList.add('active');
            // Update settings title for mobile
            const currentMobileSettingsTitle = mobileMenuItems[this.currentMenuItem].firstElementChild.children[1].textContent;
            this.showMobileSettingsModal(currentMobileSettingsTitle, this.currentMenuItem)
        };

        this.modeSwitchButtonsDesktop.forEach((button, index) => {
            button.addEventListener('click', (e) => {
                switchMode(e.target.textContent, index);
            });
        });

        this.modeSwitchButtonsMobile.forEach((button, index) => {
            button.addEventListener('click', (e) => {
                switchMode(e.target.textContent, index);
            });
        });
    };


    loadActiveStates = () => {
        console.log('loaded');
        this.desktopMenuButtons = this.desktopMenuItems.querySelectorAll('.sidebar_menu-item');
        this.mobileMenuButtons = this.mobileMenu.querySelectorAll('.mobile_menu-item');
        this.desktopMenuButtons[this.currentMenuItem].classList.add('active')
        this.mobileMenuButtons[this.currentMenuItem].classList.add('active')
    }



    displayMenuItems = () => {
        console.log('yes')
        // check if you are in door or window mode to know menu to be displayed
        // By checking current mode - this.appCurrentMode
        // If door mode use the Door Item menus
        // Listen for clicks on the menu items
        if (this.appCurrentMode === 'door') {
            this.desktopMenuItems.innerHTML = this.doorItemMenus.map(menu => (
                `<li class="sidebar_menu-item" data-id="${menu.id}">
                        <div>
                            ${menu.icon}
                            <span>${menu.title}</span>
                        </div>
                        <span class="point-svg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </span>
                    </li>`
            )).join('')

            this.mobileMenuItems.innerHTML = this.doorItemMenus.map(menu => (
                `<li class="mobile_menu-item" data-id="${menu.id}">
                        <div>
                            ${menu.icon}
                            <span>${menu.title}</span>
                        </div>
                        <span class="point-svg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </span>
                    </li>`
            )).join('')
        } else if (this.appCurrentMode === 'window') {
            this.desktopMenuItems.innerHTML = this.windowItemMenus.map(menu => (
                `<li class="sidebar_menu-item" data-id="${menu.id}">
                        <div>
                            ${menu.icon}
                            <span>${menu.title}</span>
                        </div>
                        <span class="point-svg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </span>
                    </li>`
            )).join('')

            this.mobileMenuItems.innerHTML = this.windowItemMenus.map(menu => (
                `<li class="mobile_menu-item" data-id="${menu.id}">
                        <div>
                            ${menu.icon}
                            <span>${menu.title}</span>
                        </div>
                        <span class="point-svg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </span>
                    </li>`
            )).join('')
        }
    }


    handleDynamicMenuButtonClick = () => {
        this.desktopMenuItems.addEventListener('click', (e) => {

            let button = e.target;

            // Traverse up the DOM to find the nearest element with the class 'sidebar_menu-item'
            while (button && !button.classList.contains('sidebar_menu-item')) {
                button = button.parentElement;
            }

            if (button) {
                // Remove the 'active' class from all currently active menu items
                const desktopActiveItems = this.desktopMenuItems.querySelectorAll('.sidebar_menu-item');
                desktopActiveItems.forEach(item => item.classList.remove('active'));


                this.currentMenuItem = +button.dataset.id;
                this.closeSettingsModal();

                this.settingsTitle = button.children[0].lastElementChild.textContent;
                button.classList.add('active');
                this.modalWrapper.classList.add('showModal');


                setTimeout(() => {
                    this.showSettingsModal(this.settingsTitle, this.currentMenuItem);
                    this.showMobileSettingsModal(this.settingsTitle, this.currentMenuItem);
                    this.getCurrentToolsBarContent()
                }, 40);
                // Change active states for desktop responsive screens
                const mobileActiveItems = this.mobileMenu.querySelectorAll('.mobile_menu-item');
                mobileActiveItems.forEach(item => item.classList.remove('active'));
                mobileActiveItems[this.currentMenuItem].classList.add('active')

            }
        });

        this.mobileMenu.addEventListener('click', (e) => {
            let button = e.target;

            // Traverse up the DOM to find the nearest element with the class 'sidebar_menu-item'
            while (button && !button.classList.contains('mobile_menu-item')) {
                button = button.parentElement;
            }

            if (button) {
                // Remove the 'active' class from all currently active menu items
                this.handleMobilemenuToggle()
                const mobileActiveItems = this.mobileMenu.querySelectorAll('.mobile_menu-item');
                mobileActiveItems.forEach(item => item.classList.remove('active'));

                this.currentMenuItem = +button.dataset.id;

                this.settingsTitle = button.children[0].lastElementChild.textContent;
                button.classList.add('active');

                this.showMobileSettingsModal(this.settingsTitle, this.currentMenuItem)
                this.showSettingsModal(this.settingsTitle, this.currentMenuItem)

                // Change active states for desktop responsive screens
                const desktopActiveItems = this.desktopMenuItems.querySelectorAll('.sidebar_menu-item');
                desktopActiveItems.forEach(item => item.classList.remove('active'));
                desktopActiveItems[this.currentMenuItem].classList.add('active')


                this.modalWrapper.classList.add('showModal')
            }
        });
    }




    handleMobilemenuToggle = (e) => {
        console.log('yes');
        this.mobileMenu.classList.toggle('show_mobile_menu')
    }

    handlePrevClick = () => {
        const desktopActiveItems = this.desktopMenuItems.querySelectorAll('.sidebar_menu-item');

        if (this.currentMenuItem <= 0) return;
        this.currentMenuItem--
        this.settingsTitle = desktopActiveItems[this.currentMenuItem].children[0].lastElementChild.textContent
        this.sidebarSettingsModal.classList.remove('showModal')


        setTimeout(() => {
            this.showSettingsModal(this.settingsTitle, this.currentMenuItem)
            this.showMobileSettingsModal(this.settingsTitle, this.currentMenuItem)
        }, 40);

        desktopActiveItems.forEach(item => item.classList.remove('active'));
        desktopActiveItems[this.currentMenuItem].classList.add('active')

        // Change active states for mobile responsive screens
        const mobileActiveItems = this.mobileMenu.querySelectorAll('.mobile_menu-item');
        mobileActiveItems.forEach(item => item.classList.remove('active'));
        mobileActiveItems[this.currentMenuItem].classList.add('active')


    }


    handleNextClick = () => {
        const desktopActiveItems = this.desktopMenuItems.querySelectorAll('.sidebar_menu-item');
        const menuLength = desktopActiveItems.length - 1
        if (this.currentMenuItem >= menuLength) return;
        this.currentMenuItem++
        console.log(this.currentMenuItem);
        this.settingsTitle = desktopActiveItems[this.currentMenuItem].children[0].lastElementChild.textContent

        this.sidebarSettingsModal.classList.remove('showModal')

        setTimeout(() => {
            this.showSettingsModal(this.settingsTitle, this.currentMenuItem)
            this.showMobileSettingsModal(this.settingsTitle, this.currentMenuItem)
        }, 40);

        desktopActiveItems.forEach(item => item.classList.remove('active'));
        desktopActiveItems[this.currentMenuItem].classList.add('active')

        // Change active states for mobile responsive screens
        const mobileActiveItems = this.mobileMenu.querySelectorAll('.mobile_menu-item');
        mobileActiveItems.forEach(item => item.classList.remove('active'));
        mobileActiveItems[this.currentMenuItem].classList.add('active')
    }



    showSettingsModal = (title, id) => {
        // if title matches show settings for title
        // loop through the Sidebar menu items
        // if the id passed matches the id of the menu item to display, show that item
        // Try to make this
        this.sidebarModalContents.scrollTop = 0;
        this.sidebarSettingsModal.firstElementChild.firstElementChild.innerText = title
        if (this.appCurrentMode === 'door') {
            this.doorItemMenus.forEach((menu) => {
                if (menu.id === id) {
                    this.sidebarModalContents.innerHTML = menu.content
                }
            })
        } else if (this.appCurrentMode === 'window') {
            this.windowItemMenus.forEach((menu) => {
                if (menu.id === id) {
                    this.sidebarModalContents.innerHTML = menu.content
                }
            })
        }


        this.sidebarSettingsModal.classList.add('showModal')
    }



    showMobileSettingsModal = (title, id) => {
        this.mobileModalContents.scrollTop = 0;
        this.mobileSettingsTitle.innerText = title

        if (this.appCurrentMode === 'door') {
            this.doorItemMenus.forEach((menu) => {
                if (menu.id === id) {
                    this.mobileModalContents.innerHTML = menu.content
                }
            })
        } else if (this.appCurrentMode === 'window') {
            this.windowItemMenus.forEach((menu) => {
                if (menu.id === id) {
                    this.mobileModalContents.innerHTML = menu.content
                }
            })
        }

    }




    closeSettingsModal = () => {
        document.querySelectorAll('.sidebar_menu-item').forEach(btn => btn.classList.remove('active'));

        this.sidebarSettingsModal.classList.remove('showModal')
        this.modalWrapper.classList.remove('showModal')
    }


    requestFullScreen = () => {
        if (this.houseFrontPreviewImg.requestFullscreen) {
            this.houseFrontPreviewImg.requestFullscreen();
        } else if (this.houseFrontPreviewImg.webkitRequestFullscreen) { // Safari
            this.houseFrontPreviewImg.webkitRequestFullscreen();
        } else if (this.houseFrontPreviewImg.msRequestFullscreen) { // IE11
            this.houseFrontPreviewImg.msRequestFullscreen();
        }
        // let arr = []
        // let create1 = new CreateSelection('door 1', '4x4', 'myimage.jpg')
        // arr.push({name: create1._name, dimension: create1._dimension, image: create1._image})
        // console.log(arr)
        // // localStorage.setItem('selection', JSON.stringify(arr))
        // try {
        //     localStorage.setItem('ITEM', JSON.stringify(arr));
        //     console.log('Item stored in localStorage:', localStorage.getItem('ITEM'));
        // } catch (e) {
        //     console.error('Error setting localStorage:', e);
        // }

    }

    getCurrentToolsBarContent = () => {
        let id;
        this.doorItemMenus.forEach((menu) => {
            if (this.currentMenuItem === menu.id) {
                this.currentMenuTab = menu
                id = menu.id
            }
        })
        this.handleModelSelection()
    }

    handleModelSelection = () => {
        // Access first element child if it exists
        // console.log('First Child:', this.sidebarModalContents.firstChild);
        // console.log('First Element Child:', this.sidebarModalContents.firstElementChild);
        // console.log('All Child Nodes:', this.sidebarModalContents.childNodes);
        // console.log('All Element Children:', this.sidebarModalContents.children);

        if (this.sidebarModalContents) {
            // console.log('First element child exists:', this.sidebarModalContents.firstElementChild.children[1]);
            // console.log('element', document.querySelectorAll('.door_model-image'));

            const doorModels = document.querySelectorAll('.door_model-image');
            // doorModels[0].classList.add('active');
            doorModels.forEach((door, index) => {
                door.addEventListener('click', () => {
                    // effect changes
                    // Remove "active" class from all items
                    doorModels.forEach(door => door.classList.remove('active'));

                    // Add "active" class to the clicked item
                    door.classList.add('active');

                    console.log(door, index)
                })
            })
        }


    }

}

// class CreateSelection extends App{
//     constructor(name, dimension, image){
//         super()
//         this._name  = name;
//         this._dimension = dimension;
//         this._image = image;
//         console.log(this.appCurrentMode)
//     }
// }



let configuratorApp = new App()