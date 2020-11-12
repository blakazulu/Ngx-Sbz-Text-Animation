# Floating Text Background Animation
![demo-gif](https://media.giphy.com/media/3MA6V372FmxEhZ1A71/giphy.gif)

![Current Version](https://img.shields.io/badge/Current%20Version-2.0.0-brightgreen>)   
 ![License](https://img.shields.io/badge/License-GNU%20General%20Public%20License%20v3.0-blue)

An angular 10 directive for floating text background animation

## Demo
* [Stackblitz]
 
### Installation
1. run this:
   ```shell
   npm i ngx-sbz-text-animation
   ```
2. go to app.module and add this:
   ```shell
   import {NgxSbzTextAnimationModule} from 'ngx-sbz-text-animation';
   
   @NgModule({
       imports: [
           NgxSbzTextAnimationModule
       ]
   })
   ```
3. add the css, you can do it in 2 ways:
    * add the import to the start of the main styles file inside the src folder (styles.css / styles.scss):
       ```shell
       @import "../node_modules/ngx-sbz-text-animation/styles/ngx-sbz-text-animation.css";
       ```
    * add the style to the styles array inside the angular.json file:
      ```shell
      "architect": {
        "build": {
          ...
          "options": {
            ...
            "styles": [
              "src/styles.scss",
              "node_modules/ngx-sbz-text-animation/styles/ngx-sbz-text-animation.css"
            ],
            ...
          },
          ...
        },
      }
      ```
4. use like this:
   ```shell
   <div sbzTextAnimation></div>
   ```
5. Enjoy :)

### Inputs to customize to animation

| Input            | Type              | Default        | Description                               |
| ---------------- | ------------------| -------------- | ----------------------------------------- |
| maxFontSize      | number            | 20             | max font size of the text                 |
| colorSchemeArray | string[]          | Rainbow colors | colors of the text                        |
| position         | 'left', 'right'   | 'right'        | position of the flying text on the screen |
| percentOfScreen  | number            | 30             | percent of the text on the screen         |
| zIndex           | number            | -1             | z-index of the text.                      |

#### Contribution
Want to contribute? Great!
It's open source.
1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

#### Thank you
this directive is an updated version of [g1eb]'s work.
he made this directive for angularJS.
I just updated it for Angular 10 (and added a few features)

#### License
* You can find the license here: [License]


[//]: # (
These are reference links used in the body of this note and get stripped out when the markdown processor does its job.
There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [Stackblitz]: <https://stackblitz.com/edit/ngx-sbz-text-animation?file=src/app/app.component.html>
   [g1eb]: <https://github.com/g1eb/angular-text-animation>
   [License]: <https://github.com/blakazulu/Ngx-Sbz-Text-Animation/blob/main/LICENSE>
