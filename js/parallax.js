


window.onload = function() {
    const parallax = document.querySelector ('.parallax');
    if (parallax) {
        const content = document.querySelector('.parallax__list li');
        const body = document.querySelector('.parallax__bg');
        const trench = document.querySelector('.parallax__img');

        const forContent = 40;
        const forBody = 20;
        const forTrench = 10;

        const speed = 0.05;

        let positionX = 0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 0;
        
        function setMouseParallaxStyle () {
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;

            positionX = positionX + (distX + speed);
            positionY = positionY + (distY + speed);

            content.style.cssText = `transform: translate (${positionX / forContent}%,${positionY / forContent}%);`;
            body.style.cssText = `transform: translate (${positionX / forBody}%,${positionY / forBody}%);`;
            trench.style.cssText = `transform: translate (${positionX / forTrench}%,${positionY / forTrench}%);`;
            
            requestAnimationFrame(setMouseParallaxStyle);
        }
        setMouseParallaxStyle();

        parallax. addEventListener ("mousemove", function(e) {

            const parallaxWidth = parallax.offsetWidth;
            const parallaxHeight = parallax.offseHeight;

            const coordX = e.pageX - parallaxWidth / 2;
            const coordY = e.pageX - parallaxHeight/ 2;

            coordXprocent = coordX / parallaxWidth * 100;
            coordXprocent = coordY / parallaxHeight * 100;

        });
    }
}