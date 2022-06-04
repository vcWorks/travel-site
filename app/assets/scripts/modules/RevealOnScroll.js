import  throttle  from "lodash/throttle";
import  debounce  from "lodash/debounce";

class RevealOnScroll {
    constructor(els, thresholdPercent) {
        this.itemsToReveal = els;
        this.thresholdPercent = thresholdPercent;
        this.winHeight = window.innerHeight;
        this.hideInitially();
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
        this.events();
    }

    events() {
        window.addEventListener("scroll", this.scrollThrottle);
        window.addEventListener("resize", debounce(() => {
            this.winHeight =  window.innerHeight;
        }, 333));
    }

    calcCaller() {
        this.itemsToReveal.forEach( el => {
            if(el.isRevealed == false) {
                this.calculateIfScrolledTo(el);
            }
        });
    }

    calculateIfScrolledTo(el) {
        let winScrollY = window.scrollY;
        if((winScrollY + this.winHeight) > el.offsetTop) {
            let bounding = el.getBoundingClientRect().top;
            let scrollPercent = (bounding / this.winHeight) * 100;
            if(scrollPercent < this.thresholdPercent) {
                el.classList.add("reveal-item--is-visible");
                el.isRevealed = true;
                if(el.isLastItem) {
                    window.removeEventListener("scroll", this.scrollThrottle);
                }
            }
        }
    }

    hideInitially() {
        this.itemsToReveal.forEach(el => {
            el.classList.add("reveal-item");
            el.isRevealed = false;
        });
        this.itemsToReveal[this.itemsToReveal.length-1].isLastItem = true;
    }
}

export default RevealOnScroll;