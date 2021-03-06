const divInstall = document.getElementById('installContainer');
const butInstall = document.getElementById('butInstall');

/* Put code here */



/* Only register a service worker if it's supported */
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js');
}


window.addEventListener('beforeinstallprompt', (event) => {
    // console.log('👍', 'beforeinstallprompt', event);
    event.preventDefault();
    // Stash the event so it can be triggered later.
    window.deferredPrompt = event;
    // Remove the 'hidden' class from the install button container

    document.getElementById("installContainer").removeAttribute("hidden");
});

butInstall.addEventListener('click', () => {
    // console.log('👍', 'butInstall-clicked');
    const promptEvent = window.deferredPrompt
    if (!promptEvent) {
        // The deferred prompt isn't available.
        return;
    }
    // Show the install prompt.
    promptEvent.prompt();
    // Log the result
    promptEvent.userChoice.then((result) => {
        // console.log('👍', 'userChoice', result);
        // Reset the deferred prompt variable, since 
        // prompt() can only be called once.
        window.deferredPrompt = null;
        // Hide the install button.
        divInstall.classList.toggle('hidden', true);
    });
});

function instalarWebApp() {
    // console.log('👍', 'butInstall-clicked');
    const promptEvent = window.deferredPrompt
    if (!promptEvent) {
        // The deferred prompt isn't available.
        return;
    }
    // Show the install prompt.
    promptEvent.prompt();
    // Log the result
    promptEvent.userChoice.then((result) => {
        // console.log('👍', 'userChoice', result);
        // Reset the deferred prompt variable, since 
        // prompt() can only be called once.
        window.deferredPrompt = null;
        // Hide the install button.
        divInstall.classList.toggle('hidden', true);
    });
}

window.addEventListener('appinstalled', (event) => {
    console.log('👍', 'appinstalled', event);
});