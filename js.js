document.addEventListener('DOMContentLoaded', function() {
            const kuzoParent = document.querySelectorAll('[kuzo-parent="item-element"]');
        
            kuzoParent.forEach((parent) => {
                const url = parent.querySelector('[kuzo-link="link"]').href;
                const pathname = new URL(url).pathname;

                // Get The Paths to post
                const cleanPath = pathname.replace(/^\/?[A-Z]:/, ''); 

                // Get The values to fetch
                const targets = parent.querySelectorAll('[kuzo-nested]');
                const values = Array.from(targets).map(target => {
                    const parentKey = target.getAttribute('kuzo-nested'); // Get 'tags'
                    const nestedElements = target.querySelectorAll('[kuzo-nested-el]');

                    // Create an array with all kuzo-nested-el values
                    const nestedValues = Array.from(nestedElements).map(el => el.getAttribute('kuzo-nested-el'));

                    return { parent: parentKey, el: nestedValues };
                });

                // Fetch the data
                const response =  fetch(`https://abdos-sublime-site-289a60.webflow.io${cleanPath}`);
              
                console.log(response);
                       
            });
        });
