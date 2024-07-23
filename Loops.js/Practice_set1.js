//Random jokes
const joke = document.getElementById("joke");
const btn = document.getElementById("btn");
const jokes =[
    "sgt.: commissar!commissar! The troops are revolting! commissar: Well, youre qretty repulsive yourself."
    ,
    "I tried to write a chemistry joke, but could never get a reaction.",
    "what do you call a girl between two posts? Annette.",
    'Thanks for explaining the word "many" to me. It means a lot .',

    'why did Mozart kill all his chickens?Because when he asked them who the best composer was, they\'dall say "Bach bach bach"',
    "How many tickles does it take to tickle an octopus ? Ten-tickles!",
    "What ' s e.t.SHORT FOR ? hE ' S ONLY GOT LITTLE LEGS.",
    "A man tried to sell me a only got little legs.",
    "what did  the pirate say on his 80th brithday? Aye matey!",
    "I knew i shouldn ' t have  ate that seafood .Because now i'm feeling a little... Eel",
];
     
    const pickRandomjoke = ()=> {
        const randomNum = parseInt(Math.random() * 10); // 0 - 1
        joke.innerText = jokes [randomNum];

    };
    pickRandomjoke();
    btn.addEventListener("click", pickRandomjoke);
