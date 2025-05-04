const questions = [
    { q: "The enemy has declared war on your kingdom. What are your thoughts?", a: [
        { text: "Here we go again. What a prick.", values: ['I'] },
        { text: "I would say 'Thank the fuck yes!' You don't see me running, do you?", values: ['E'] }
    ]},
    { q: "The war has officially begun. Rumor has it that the enemy has doubled their weapons and tripled their soldiers. What should we do now?", a: [
        { text: "Double it and give it to the next person? Haha, kidding! We've quadrupled ours, of course!", values: ['6', '2'] },
        { text: "Find out where they got the weapons from and who supports them financially. Now the real war begins.", values: ['8', '3'] },
        { text: "I need to look at the budget. Also, where is this rumor coming from?", values: ['4'] },
        { text: "I'm not risking losing this damn war. We need a solid strategy.", values: ['1'] }
    ]},
    { q: "The situation is worse than expected. We've lost over one hundred thousand troops and gained zero square meters of land. The enemy is laughing over our allies' dead bodies.", a: [
        { text: "Shouting at the sky. Aaaargh!", values: ['6'] },
        { text: "*Sitting silently in thought*", values: ['8', '2'] },
        { text: "This is injustice! There must be malice behind this absurd massacre! Why are we so weak compared to them?", values: ['E', '1'] },
        { text: "Write aggressive letters and complain to third parties.", values: ['4', '3'] }
    ]},
    { q: "To everyone's surprise, a powerful but distant kingdom decides to lend us a hand.", a: [
        { text: "Distant water can't put out a nearby fire in time. It's appreciated, but we still have much to consider.", values: ['I'] },
        { text: "Just accept it. What else could I possibly lose at this point?", values: ['E'] }
    ]},
    { q: "Our plan works, and there's a call for a ceasefire.", a: [
        { text: "No, we've just begun. I will stop at nothing.", values: ['8'] },
        { text: "A cornered enemy has nothing to lose. Let's use this time to rest and prepare a backup plan.", values: ['4', '1'] },
        { text: "We can rest, but while they're at it, I don't promise I won't bite.", values: ['2', '3'] },
        { text: "This seems like a sign that we're winning. Time to celebrate!", values: ['6'] }
    ]},
     { q: "Finally, the war has ended, and guess what? You won!", a: [
                { text: "As if there was any other outcome. Hahahaha!", values: ['2'] },
                { text: "Yes, but at what cost? I'm not unhappy, but I can't say I'm satisfied either.", values: ['4'] },
                { text: "Finally. I'm exhausted.", values: ['1', '6'] },
                { text: "Good, but we still have much to do. They can expect a massive fine at their ugly palace by next Monday.", values: ['8', '3'] }
            ]},
            { q: "The kingdom is peaceful once again, thanks to your hard work. What do you want as a reward?", a: [
                { text: "Gold! Horses! Land! The holy trinity of life.", values: ['2'] },
                { text: "I want my sweetheart. I need a hug. One more day without my baby and I'll die - and then you might too.", values: ['6', '3'] },
                { text: "First, let's see who worked hardest to win this war and ensure I get the most reward.", values: ['1', '8'] },
                { text: "We got plenty of gold from the enemy, so more gold. And since it was a tough fight, a vacation would be nice too.", values: ['4'] }
            ]},
            { q: "You're enjoying your time when a letter arrives. They're proposing an appeasement marriage! You must make a decision...", a: [
                { text: "I'm a little busy right now. Let's say I don't have to make this damn decision.", values: ['I'] },
                { text: "Who else is single? Not me, though.", values: ['E'] }
            ]},
            { q: "The marriage deal went well. Their princess married one of our kingdom's most infamous princes. It's the grandest wedding of the century, and everyone is celebrating - including you.", a: [
                { text: "Quietly enjoying the party while looking out the castle window for an escape route.", values: ['4', '8'] },
                { text: "Dancing with everybody.", values: ['1', '6'] },
                { text: "If you need me, I'll be at the main buffet table.", values: ['3'] },
                { text: "Screw the wedding. Tonight is about me and bae's 110th honeymoon.", values: ['2'] }
            ]},
            { q: "As the night draws to a close, share your life wisdom with the world.", a: [
                { text: "Viva la vida!", values: ['2'] },
                { text: "All is fair in love and war - and as you know, I win both.", values: ['8', '6'] },
                { text: "Have you seen my cat? He's been missing for three days.", values: ['1'] },
                { text: "Love people like you have nothing to lose, and you'll realize you have everything to lose. This stupid war and wedding nearly bankrupted us.", values: ['3', '4'] }
            ]}
        ];    
         

const outcomes = {
    King: { 
        img: '<img src="https://i.ibb.co/fdHVVm4F/king.png" alt="King" class="chess-piece" loading="lazy" width="200" height="200">',
        title: "You are the <strong>King</strong>!",
        desc: "Majestic and commanding, you lead with authority. Your strategic mind and decisive nature make you the natural ruler of the board.",
        sequences: [['I', '6']] 
    },
    Queen: { 
        img: '<img src="https://i.ibb.co/Lz0H2HvL/queen.png" alt="Queen" class="chess-piece" loading="lazy" width="200" height="200">',
        title: "You are the <strong>Queen</strong>!",
        desc: "Powerful and versatile, you dominate the battlefield. Your ability to adapt and influence makes you the most formidable piece on the board.",
        sequences: [['E', '8']] 
    },
    Bishop: { 
        img: '<img src="https://i.ibb.co/sv2yPG79/bishop.png" alt="Bishop" class="chess-piece" loading="lazy" width="200" height="200">',
        title: "You are the <strong>Bishop</strong>!",
        desc: "Wise and calculated, you move with purpose. Your unique perspective and strategic thinking make you invaluable to any cause.",
        sequences: [['I', '4']] 
    },
    Rook: { 
        img: '<img src="https://i.ibb.co/FqyPRFhn/rook.png" alt="Rook" class="chess-piece" loading="lazy" width="200" height="200">',
        title: "You are the <strong>Rook</strong>!",
        desc: "Strong and straightforward, you're the backbone of any strategy. Your reliability and power in direct confrontation are unmatched.",
        sequences: [['E', '3']] 
    },
    Knight: { 
        img: '<img src="https://i.ibb.co/QFGZ9Dky/knight.png" alt="Knight" class="chess-piece" loading="lazy" width="200" height="200">',
        title: "You are the <strong>Knight</strong>!",
        desc: "Unpredictable and daring, you move in mysterious ways. Your unconventional approach often catches opponents off guard.",
        sequences: [['E', '2']] 
    },
    Pawn: { 
        img: '<img src="https://i.ibb.co/604Y46MJ/pawn.png" alt="Pawn" class="chess-piece" loading="lazy" width="200" height="200">',
        title: "You are the <strong>Pawn</strong>!",
        desc: "Humble yet full of potential, you're the soul of the game. With determination, you can overcome any obstacle and even become royalty.",
        sequences: [['I', '1']] 
    }
};

let currentQuestion = 0;
let userChoices = [];
let selected = null;

function startQuiz() {
    document.querySelector('.start-screen').style.display = 'none';
    document.querySelector('.quiz-screen').style.display = 'block';
    showQuestion();
}


function shuffleArray(array) {
    
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function showQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('questionText').textContent = question.q;
    const choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = '';
    
    
    const choicesWithIndices = question.a.map((choice, idx) => ({
        ...choice,
        originalIndex: idx
    }));
    
    
    const shuffledChoices = shuffleArray(choicesWithIndices);
    
    
    shuffledChoices.forEach((choice, displayIndex) => {
        const div = document.createElement('div');
        div.className = 'choice';
        div.textContent = choice.text;
        div.onclick = () => {
            document.querySelectorAll('.choice').forEach(c => c.classList.remove('selected'));
            div.classList.add('selected');
            selected = choice.originalIndex; 
            document.getElementById('nextButton').disabled = false;
        };
        choicesContainer.appendChild(div);
    });
    
    
    
document.getElementById('nextButton').disabled = true;
document.getElementById('goBackButton').style.display = currentQuestion > 0 ? 'inline-block' : 'none';
}


function nextQuestion() {
    if (selected !== null) {
        const chosen = questions[currentQuestion].a[selected];
        userChoices = userChoices.concat(chosen.values);
        selected = null;
        currentQuestion++;
        
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            showLoadingScreen();
            setTimeout(showResult, 1500);
        }
    }
}

function goBack() {
    currentQuestion--;
    const lastChoices = questions[currentQuestion].a[selected].values;
    userChoices = userChoices.slice(0, -lastChoices.length);
    selected = null;
    showQuestion();
}

function showLoadingScreen() {
    document.querySelector('.quiz-screen').style.display = 'none';
    document.getElementById('loadingScreen').style.display = 'flex';
}

function createConfetti() {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 10 + 5 + 'px';
        confetti.style.animationDuration = Math.random() * 2 + 2 + 's';
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 3000);
    }
}

function showResult() {
    document.getElementById('loadingScreen').style.display = 'none';
    const resultScreen = document.querySelector('.result-screen');
    resultScreen.style.display = 'block';

    // Count I vs E choices
    let iCount = 0;
    let eCount = 0;
    
    // Count number sequences (1,2,3,4,6,8)
    const numberCounts = { '1': 0, '2': 0, '3': 0, '4': 0, '6': 0, '8': 0 };

    userChoices.forEach(choice => {
        if (choice === 'I') iCount++;
        if (choice === 'E') eCount++;
        if (['1','2','3','4','6','8'].includes(choice)) {
            numberCounts[choice]++;
        }
    });

    // Determine I/E dominance
    const isIDominant = iCount > eCount;
    
    // Find most frequent number
    let maxNumberCount = 0;
    let mostFrequentNumbers = [];
    
    Object.entries(numberCounts).forEach(([number, count]) => {
        if (count > maxNumberCount) {
            maxNumberCount = count;
            mostFrequentNumbers = [number];
        } else if (count === maxNumberCount) {
            mostFrequentNumbers.push(number);
        }
    });

    // Define outcome mapping
    const outcomeMap = {
        'I': {
            '1': 'Pawn',
            '4': 'Bishop',
            '6': 'King'
        },
        'E': {
            '2': 'Knight',
            '3': 'Rook',
            '8': 'Queen'
        }
    };

    // Determine final result
    let resultType = 'Pawn'; // Default fallback
    
    // First try to find exact match with dominant type
    for (const number of mostFrequentNumbers) {
        const type = isIDominant ? 'I' : 'E';
        if (outcomeMap[type][number]) {
            resultType = outcomeMap[type][number];
            break;
        }
    }
    
    // If no exact match, find closest match
    if (resultType === 'Pawn') {
        const allNumbers = ['8','6','4','3','2','1']; // Priority order
        for (const number of allNumbers) {
            if (mostFrequentNumbers.includes(number)) {
                if (isIDominant && ['1','4','6'].includes(number)) {
                    resultType = outcomeMap['I'][number];
                    break;
                } else if (!isIDominant && ['2','3','8'].includes(number)) {
                    resultType = outcomeMap['E'][number];
                    break;
                }
            }
        }
    }

    // Display result
    const result = outcomes[resultType] || outcomes['Pawn'];
    document.getElementById('resultTitle').innerHTML = result.title;
    document.getElementById('resultImage').innerHTML = result.img;
    document.getElementById('resultDescription').innerHTML = `<p>${result.desc}</p>`;
    
    createConfetti();
}

function replay() {
    currentQuestion = 0;
    userChoices = [];
    selected = null;
    document.querySelector('.result-screen').style.display = 'none';
    document.querySelector('.start-screen').style.display = 'block';
}

function share(platform) {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`I got ${document.getElementById('resultTitle').textContent} in the Chess Personality Quiz!`);
    
    switch(platform) {
        case 'facebook':
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
            break;
        case 'instagram':
            alert('To share on Instagram, please save the image and upload it manually to your story.');
            break;
        case 'x':
            window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
            break;
    }
}

// Preload images after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const imagesToPreload = [
        'https://i.ibb.co/fdHVVm4F/king.png',
        'https://i.ibb.co/Lz0H2HvL/queen.png',
        'https://i.ibb.co/sv2yPG79/bishop.png',
        'https://i.ibb.co/FqyPRFhn/rook.png',
        'https://i.ibb.co/QFGZ9Dky/knight.png',
        'https://i.ibb.co/604Y46MJ/pawn.png'
    ];
    
    imagesToPreload.forEach(url => {
        const img = new Image();
        img.src = url;
    });
});
