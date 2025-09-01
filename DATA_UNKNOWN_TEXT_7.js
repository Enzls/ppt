

                if (window.two_page_loaded) {
                    console.log("dispatching events");console.log("Dispatching DOMContentLoaded event");document.dispatchEvent(new Event("DOMContentLoaded"));console.log("Dispatching Load event");window.dispatchEvent(new Event("load"));console.log("Dispatching ClickOrTouch event");two_loading_events(two_event);
                }
                else {
                    console.log("waiting for page to load");
                    window.addEventListener("load", function() {
                        console.log("dispatching events");
                        document.dispatchEvent(new Event("DOMContentLoaded"));
                    });
                }
                