export function preloadImages(array, waitForOtherResources, timeout) {
    let loaded = false, list = preloadImages.list, imgs = array.slice(0), t = timeout || 15*1000, timer;
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    if (!waitForOtherResources || document.readyState === 'complete') {
        loadNow();
    } else {
        window.addEventListener("load", function() {
            clearTimeout(timer);
            loadNow();
        });

        timer = setTimeout(loadNow, t);
    }

function loadNow() {
        if (!loaded) {
            loaded = true;
            for (let i = 0; i < imgs.length; i++) {
                let img = new Image();
                img.onload = img.onerror = img.onabort = function() {
                    let index = list.indexOf(this);
                    if (index !== -1) {

                        list.splice(index, 1);
                    }
                }
                list.push(img);
                img.src = imgs[i];
            }
        }
    }
}
