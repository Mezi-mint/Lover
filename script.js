(() => {
    const _$ = s => document.getElementById(s);
    const $ = {
        a: _$('play-button'),
        b: _$('black-overlay'),
        c: _$('corner'),
        d: _$('heart-container'),
        e: _$('messageBox'),
    };

    const nonsense = () => {
        return ((x, y) => x + y)(Math.random(), Math.random()); // chẳng ảnh hưởng gì
    };

    const base = atob("c2V0VGltZW91dCgocikgPT4gewogICAgcigpOwogfSwgMTUwMCk7"); // "setTimeout((r) => { r(); }, 1500);"
    const trigger = () => {
        $.b.classList.add('fall');
        $.c.classList.add('fall-corner');

        eval(base.replace('r()', '___heart()')); // eval gọi hàm bị mã hóa

        setTimeout(() => {
            $.e.style.display = ['f', 'l', 'e', 'x'].join('');
            $.e.style.animation = ['p', 'o', 'p', 'I', 'n'].join('') + ' 0.6s ease-out';
        }, 3000);

        setTimeout(() => {
            (((f) => {
                const a = document.querySelector('.admin');
                a.style['display'] = 'block';
                a.style.animation = 'fadeUp 1s ease-out forwards';
                f && f();
            }))(nonsense);
        }, 5000);
    };

    window.___heart = () => {
        setInterval(() => {
            const z = (tag, cls) => {
                const el = document.createElement(tag);
                el.className = cls;
                return el;
            };

            const h = z('div', 'heart'),
                w = z('div', 'wrapper'),
                c = z('div', 'core'),
                l = z('div', 'left'),
                r = z('div', 'right');

            [c, l, r].forEach(x => w.appendChild(x));
            h.appendChild(w);

            const s = 4 + Math.random() * 14;
            const t = 2 + Math.random() * 3;
            const setSize = el => ['width', 'height'].forEach(p => el.style[p] = `${s}px`);

            [w, c, l, r].forEach(setSize);

            Object.assign(h.style, {
                left: `${Math.random() * 100}vw`,
                animationDuration: `${t}s`,
                opacity: 0.4 + Math.random() * 0.6
            });

            l.style.top = `${-s / 2}px`;
            l.style.left = "0px";
            r.style.top = "0px";
            r.style.left = `${-s / 2}px`;

            const anime = [];
            Math.random() < 0.5 && anime.push(`rotateSelf ${t}s linear forwards`);
            Math.random() < 0.5 && anime.push(`tilt ${t}s ease-in-out forwards`);
            w.style.animation = anime.length ? anime.join(', ') : 'none';

            $.d.appendChild(h);
            setTimeout(() => h.remove(), t * 1000);
        }, 150);
    };

    ((btn, evt, cb) => {
        btn.addEventListener(evt, cb);
    })($.a, ['c', 'l', 'i', 'c', 'k'].join(''), trigger);
})();