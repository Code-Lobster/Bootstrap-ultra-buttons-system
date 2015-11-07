# Bootstrap-ultra-buttons-system
Highly customisable Bootstrap 4's button system, change a few values, compile sass and get customs styled bootstrap buttons.

##Story behind this project
Here is the deal, bootstrap provides 6 default button classes: `Primary, Secondary, Info, Success, Warning, Danger` but what if you want name them diffrently? what if you don't want 6 classes at all? for example in a project i only want 3 button classes: `Primary, Secondary, Tertiary`, it becomes very tedious to implement this, overriding the correct css rules, structuring css files just like bootstrap structures theirs, then deleting not-so-usefull classes.

Bootstrap ultra buttons systems does this for you, sass-script(maps) can solve this very gracefully. Just edit the main sass map(sort-of variable), compile your sass and you are Done! 

##Instruction

Clone or download this respository, and run
```npm install```
Edit scss map and run grunt:

Below you can see the main properties map, add/delete catagories, edit properties etc.You now have full control :)
```
  //main scss map that holds all button classes
  $buttons-properties: (
    // Primary class
    primary :(
        color : #fff,
        bg : $brand-primary,
        border : $brand-primary
    ),
    // Secondary class
    secondary :(
        color : $gray-dark,
        bg : #fff ,
        border : #ccc
    ),
    // Info class
    info :(
        color : #fff,
        bg : $brand-info,
        border : $brand-info
    ),
    // Success class
    success :(
        color : #fff,
        bg : $brand-success,
        border : $brand-success
    ),
    // Warning class
    warning :(
        color : #fff,
        bg : $brand-warning,
        border : $brand-warning
    ),
    // Danger class
    danger:(
        color : #fff,
        bg : $brand-danger,
        border : $brand-danger
    )
  ) !default;
```
That's it, your compiled css will be available in css/ folder after you run grunt.

##Included
* Standard Bootstrap button group classes: .btn-group, .btn-toolbar, etc.
* Standard Bootstrap button styling classes: .btn-lg, .btn-primary, etc.

##What's not included:
Pretty much everything else. It's really up to you. No styles, no javascript - not even a CSS reset.

##Giving Credit
Thanks to Bootstrap team, it's all their work, i wrote a few extra sass loop. While making this respository i had to read every line of code, and it was a good learning experience. I would suggest everyone go through it, it's totally worth it!

