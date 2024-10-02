# Jade Coming Soon Template

### [Demo](https://templates.studiogeek.com.mx/presentation)

## Initialize project

To initialize project just install node.js and run

```sh
npm install
```

Now, you just need to copy .env.example in .env file and change
your date project and the effect that you want.

For example: 
````
PUBLIC_DATE=2024-12-31
# It can be stars|bubbles|dots
PUBLIC_EFFECT=bubbles
````
## Generate build
Now we use the command <code>npm build</code> of astro for 
generate our personalized app in <code>dist</code> folder.

## Personalize template

If you want to change details of template are in src folder, you have the next:

- **react folder:** Contains all react components, its works itself, 
but if you want some custom behavior you can modify there.
- **pages folder:** Only contain the main structure, all the code is joined here.
- **layouts folder:** Its contain only the layout, you don't 
need someone of here
- **components folder:** All components used in the html template are here, 
if your want to modify something this is the place.
