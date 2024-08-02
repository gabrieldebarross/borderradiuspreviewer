function escopo(){
    const root = document.documentElement;
    const form = document.querySelector('form');
    const button = document.querySelector('button');

    const input_topleft = document.querySelector('#input-topleft');
    const input_topright = document.querySelector('#input-topright');
    const input_bottomleft = document.querySelector('#input-bottomleft');
    const input_bottomright = document.querySelector('#input-bottomright');

    function inputUpdate(){
        input_topleft.addEventListener('change', () => {
            root.style.setProperty('--border-top-left-radius', input_topleft.value + 'px');
            console.log(`Top-left-radius: ${input_topleft.value}px`);
        })

        input_topright.addEventListener('change', () => {
            root.style.setProperty('--border-top-right-radius', input_topright.value + 'px');
            console.log(`Top-right-radius: ${input_topright.value}px`);
        })

        input_bottomleft.addEventListener('change', () => {
            root.style.setProperty('--border-bottom-left-radius', input_bottomleft.value + 'px');
            console.log(`Bottom-left-radius: ${input_bottomleft.value}px`);
        })

        input_bottomright.addEventListener('change', () => {
            root.style.setProperty('--border-bottom-right-radius', input_bottomright.value + 'px');
            console.log(`Bottom-right-radius: ${input_bottomright.value}px`);
        })
    }

    function reset(){
        button.addEventListener('click', () => {
            root.style.setProperty('--border-top-left-radius', 0);
            root.style.setProperty('--border-top-right-radius', 0);
            root.style.setProperty('--border-bottom-left-radius', 0);
            root.style.setProperty('--border-bottom-right-radius', 0);

        })
    }

    reset();
    inputUpdate();
}

escopo();