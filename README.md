# Various code & projects examples

All links lead to the https://haroldsp.github.io/project-showcases/ and then a listed folder.

So if you don't want to click on the link (like **01_Game_bot** etc.) you can click on the GitHub-pages tab on the right, and then manually add the folder name to the address line of your browser. 03_Layout_calculator.

Press paragraphs marked with "▶" to see the details.

## JS examples

1. [**01_Game_bot**](https://haroldsp.github.io/project-showcases/01_Game_bot/)

    A small guess-a-number game in a browser.

2. [**02_To-Do-List**](https://haroldsp.github.io/project-showcases/02_To-Do-List/)

    A simple To-Do-List demonstarting the work with localStorage.

3. [**03_Layout_Price_Calculator**](https://haroldsp.github.io/project-showcases/03_Layout_Price_Calculator/):star:
    <details>
    <summary>А straightforward layout price calculator showcasing fundamental concepts of modern JavaScript practices.</summary>
    This calculator supports two languages and stores user preferences in the localStorage. Given the project's small scale and the presence of only two 
    languages, it employs a non-localization approach, resulting in duplicated content and functions. The original project with different branches representing step-by-step development can be found in this archived [repo] 
    (https://github.com/HaroldSP/JS_course).
    </details>
4. [**04_Moving_square_with_key_arrows**](https://haroldsp.github.io/project-showcases/04_Moving_square_with_key_arrows)
    <details>
    <summary>A JS project that demonstrates OOP principles by creating a simple interactive application.</summary>
    The main focus of the project is a red square that can be moved on the screen using arrow keys. 
    The project emphasizes the use of OOP concepts such as inheritance, prototypes, constructors, and classes to achieve interactive behavior.
    </details>

5. [**05_Webclient_Entity_Manager**](https://haroldsp.github.io/project-showcases/05_Webclient_Entity_Manager)
    <details>
    <summary>A client-side web application for managing entities through a user interface.</summary>
    The application uses object-oriented principles, including inheritance, to define classes with various properties. Users can create entities by filling out a form with fields corresponding to the properties of the chosen 
    class. Upon saving, entities are created based on the selected subclass, stored in an array, and persisted in local storage. The entities are displayed in a table, and users can delete them, which removes them from the 
    array, local storage, and the table. The data is preserved across page refreshes.
    </details>

6. [**06_Moving_squares_delegation**](https://haroldsp.github.io/project-showcases/06_Moving_squares_delegation)
    <details>
    <summary>A block puzzle. Clicking on an arrow swaps numbers with adjacent blocks in the indicated direction.</summary>
    It uses event delegation to handle clicks efficiently and includes a reset button to return the blocks to their original order.
    The script also ensures valid swaps and prevents out-of-bound moves. Desktop version only.
    </details>

7. [**07_Landing_page_module_structure**](https://haroldsp.github.io/project-showcases/07_Landing_page_module_structure/dist):star:
    <details>
    <summary>A landing page - interior design studio. Built using Webpack.</summary>
    Showcasing a variety of web development techniques. The project demonstrates effective usage of modal windows, event delegation, sliders (both custom and Swiper-based), form validation with regular expressions, and diverse animations. All of these features come together to create an engaging and interactive user experience.
    </details>

8. [**08_Heroes_cards**](https://haroldsp.github.io/project-showcases/08_Heroes_cards/dist):star:
    <details>
    <summary>A landing page - super-hero picker. Desk-top version only.</summary>
    This repository features a dynamic landing page where users can explore and select hero cards. The project leverages a local database file for efficient data management. Smooth animations and event listeners enhance user interaction, while asynchronous functions ensure seamless data fetching. The use of Webpack optimizes code organization and project build
    </details>

9. [**09_Currency_converter_api**](https://haroldsp.github.io/project-showcases/09_Currency_converter_api)

    A currency converter using an API, involving various features like event listeners and asynchronous functions.

10. [**10_Admin_panel**](https://haroldsp.github.io/project-showcases/10_Admin_panel)
    <details>
    <summary>An Admin Panel application powered by JSON-Server and server-side queries.</summary>
    It offers functionalities such as user management including editing, deleting, and sorting based on attributes like having children or access privileges. The interface allows for searching user names, filtering users by those with children or access, and viewing all users. Due to GitHub Pages limitations, starting the JSON Server locally is necessary to experience its comprehensive features, which means that you need to git clone either all showcases repo or just 10_Admin_panel folder.

    `npm init -y` or `npm init` to set up environment manually

    `npm install webpack webpack-cli --save-dev` install webpack

    `npm install -g json-server` install json server

    `json-server --watch db/db.json --port=4545` start a server

    Double check paths.

    Finally, it should look like this:
    ![image](https://github.com/HaroldSP/project-showcases/assets/55085987/5dd7aead-e23e-46ae-bc85-9916ba6675bc)

    </details>

11. [**11_Landing_page_summary**](https://haroldsp.github.io/project-showcases/11_Landing_page_summary/dist):star:
    <details>
    <summary>A responsive landing page with various interactive elements.</summary>
    Users can request a call through a modal window, explore service prices, FAQs, and contact information. The page includes a dynamic slider and a carousel for services, each triggering a modal window for additional details. The FAQ section is organized as an accordion. Moreover, a scroll-to-top arrow appears when reaching the "Our Services" section. The modal forms feature AJAX-based submission, complete with validations for phone numbers and name inputs. Please note that JSONPlaceholder is used to simulate server functionality due to GitHub Pages restrictions.
    </details>

## Vue examples

1. [**12_Battle_game**](https://haroldsp.github.io/project-showcases/12_Battle_game)
    <details>
    <summary>A text-based battle game showcasing the fundamental concepts of Vue.js.</summary>
    The code represents a simple text-based battle game implemented using Vue.js. It showcases Vue's core features, including data binding to update player and monster health bars, computed properties for dynamic UI updates like special attack availability, and watchers to monitor health changes and determine the winner. This project serves as an illustrative example of Vue.js for building interactive web applications.
    </details>

2. [**13_Manage_resources**](https://haroldsp.github.io/project-showcases/13_Manage_resources/dist)
    <details>
    <summary>A simple landing page showcasing the advanced concepts of Vue.js.</summary>
    <div class="justified-text">
    The code represents a simple landing page implemented using Vue.js. It demonstrates various advanced features of Vue.js, such as Vue CLI integration, component usage, component communication, dynamic components, slot usage, and an improved folder structure. This project serves as a comprehensive example of how Vue.js can be utilized to create interactive web applications with organized and efficient code. </div><br />
    <br />
    In case you want to try the code by yourself:  

    `npm i` install dependencies.<br />
    `npm run serve` to display the project in a browser.

3. [**14_Find_a_Coach**](https://haroldsp.github.io/project-showcases/14_Find_a_Coach/dist):star:
    <details>
    <summary>Vue 3 Project Demonstration</summary>
    The "Find A Coach" repo showcases Vue 3's core features. Using Vue Router, it highlights dynamic and child routing, navigational guards, and asynchronous component loading. The project also utilizes Vuex for state management and has a clear folder structure for better maintainability. It's a practical demonstration of Vue 3's capabilities in a structured application context.<br />
    <br />
    In case you want to try the code by yourself:

    Run `npm i` to install dependencies.<br />
    Run `npm run serve` to display the project in a browser.<br />
    <br />
    Due to Github Pages' architectural structure, the project starts on a 404 page.<br /> 
    I won't go into details here as to why this happens. Just click on the home page, or visit the same project on Firebase where SPAs are set up correctly: [link](https://vue-test-7a3ca.web.app/coaches).

    </details>