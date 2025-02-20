export default function List() {
    return (
        <div
            x-data="{}"
            x-init="$nextTick(() => {
                let ul = $refs.logos;
                ul.insertAdjacentHTML('afterend', ul.outerHTML);
                ul.nextSibling.setAttribute('aria-hidden', 'true');
            })"
            className="w-[500px] inline-flex flex-nowrap overflow-hidden 
                      [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)]"
        >
            <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll">
                <li>
                    <img src="./facebook.svg" alt="Facebook" />
                </li>
                <li>
                    <img src="./disney.svg" alt="Disney" />
                </li>
                <li>
                    <img src="./airbnb.svg" alt="Airbnb" />
                </li>
                <li>
                    <img src="./apple.svg" alt="Apple" />
                </li>
                <li>
                    <img src="./spark.svg" alt="Spark" />
                </li>
                <li>
                    <img src="./samsung.svg" alt="Samsung" />
                </li>
                <li>
                    <img src="./quora.svg" alt="Quora" />
                </li>
                <li>
                    <img src="./sass.svg" alt="Sass" />
                </li>
            </ul>
        </div>
    );
}
