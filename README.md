# Bootstrap-ultra-buttons-system
Highly customisable Bootstrap 4's button system, change a few values, compile sass and get customs styled bootstrap buttons.

##Story behind this project
Here is the deal, bootstrap provides 6 default button classes: `Primary, Secondary, Info, Success, Warning, Danger` but what if you want name them diffrently? what if you don't want 6 classes at all? for example in a project i only want 3 button classes: `Primary, Secondary, Tertiary`, it becomes very tedious to implement this, overriding the correct css rules, structuring css files just like bootstrap structures theirs, then deleting not-so-usefull classes.

Bootstrap ultra buttons systems does this for you, sass-script(maps) can solve this very gracefully. Just edit the main sass map(sort-of variable), compile your sass and you are Done! 

##Instruction
Include one of the precompiled css files in css/ folder, to get a custom build follow below instructions:

Clone or download this respository, and run
    npm install
Edit scss map and run grunt:
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
That's it, your compiled css will be available in css/ folder.
