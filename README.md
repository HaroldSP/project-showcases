# Various code & projects examples

All links lead to the https://haroldsp.github.io/project-showcases/ and then a listed folder.

So if you don't want to click on the link (like **01_Game_bot** etc.) you can click on the GitHub-pages tab on the right, and then manually add the folder name to the address line of your browser. 03_Layout_calculator

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
