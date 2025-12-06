/* ========================================== */
/* BIRTHDAY WEBSITE FOR KHYATI - SCRIPT.JS */
/* ========================================== */

// ==========================================
// GLOBAL VARIABLES
// ==========================================

// Audio elements
let bgMusic = null;
let voiceMessage = null;
let isMusicPlaying = false;

// Love Letter Machine
let loveMessages = [
    "I love the way your eyes light up when you talk about things you're passionate about ✨",
    "You make every ordinary day feel extraordinary just by being in it 💖",
    "Your smile is my favorite thing in the whole world 😊",
    "I'm so proud of everything you've accomplished and who you've become 🌟",
    "You have the kindest heart of anyone I've ever met 💝",
    "I fall in love with you more every single day ❤️",
    "Your laughter is the most beautiful sound I know 🎶",
    "You make me want to be a better person 🌈",
    "I love how you care about everyone around you 💗",
    "You're my safe place, my home 🏡",
    "I admire your strength and courage in everything you do 💪",
    "You understand me like no one else ever has 🤝",
    "I love your sense of humor and how you make me laugh 😂",
    "You're the most beautiful person, inside and out 🌹",
    "I promise to always support your dreams 🌠",
    "You inspire me to chase my own dreams too ⭐",
    "I love how passionate you are about the things you believe in 🔥",
    "You make the world a better place just by being you 🌍",
    "I'm grateful for every moment we spend together 🙏",
    "You're my best friend and my love 👫",
    "I promise to always be there for you, no matter what 🤗",
    "You deserve all the happiness in the world 🎁",
    "I love your unique perspective on everything 👁️",
    "You make me feel loved and appreciated every day 💕",
    "I can't imagine my life without you 💫",
];

let currentMessageIndex = 0;

// Puzzle Game
let puzzleImage = "assets/us/Screenshot 2025-12-06 180356.png";
let puzzleOrder = [];
let correctOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let selectedPiece = null;
let isPuzzleComplete = false;

// Slideshow
let slideshowImages = [
    { src: "assets/us/photo1.jpg", caption: "Our smile" },
    { src: "assets/us/photo2.jpg", caption: "Our silliness" },
    { src: "assets/us/photo3.jpg", caption: "Our peace" },
    { src: "assets/us/photo4.jpg", caption: "Our adventure" },
    { src: "assets/us/photo5.jpg", caption: "Our love" },
];
let currentSlideIndex = 0;
let slideshowInterval = null;
let isSlideshowPlaying = true;

// Wish Wall Balloons
let wishMessages = [
    "You make my world magical ✨",
    "I'm proud of you every single day 🌟",
    "I fell in love with your soul 💫",
    "You're my safe place 🏡",
    "You inspire me to be better 🌈",
    "Your happiness is my happiness 😊",
    "I'll always protect your heart 🛡️",
    "You're my forever person ♾️",
    "I believe in all your dreams 🌠",
    "You deserve the world 🌍",
    "I cherish every memory with you 📸",
    "You're my greatest adventure 🗺️",
    "I'll love you in every lifetime 🔄",
    "You're my missing piece 🧩",
    "I promise to make you smile every day 😄",
    "You're my favorite hello and hardest goodbye 👋",
    "I'm so lucky you chose me 🍀",
    "You complete me in every way 💞",
    "I'll never stop choosing you 💝",
    "You're my everything ❤️",
];

// Love Wheel
let wheelSegments = [
    { text: "A Tight Hug", emoji: "🥺" },
    { text: "10 Kisses", emoji: "😘" },
    { text: "Chocolate Treat", emoji: "🍫" },
    { text: "Movie Night", emoji: "🎬" },
    { text: "Forever With Me", emoji: "💍" },
    { text: "Stargazing Date", emoji: "🌙" },
    { text: "Dinner Date", emoji: "🍽️" },
    { text: "Handwritten Letter", emoji: "💌" },
];
let isSpinning = false;
let wheelRotation = 0;

// ==========================================
// INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    console.log("Birthday Website Loaded! 🎉");
    
    // Initialize audio objects
    bgMusic = new Audio('assets/audio/45951.mp3');
    bgMusic.loop = true;
    bgMusic.volume = 0.3;
    
    voiceMessage = new Audio('assets/audio/voice-message.mp3');
    
    // Set up event listeners
    setupEventListeners();
    
    // Initialize Love Wheel Canvas
    initWheel();
});

// ==========================================
// EVENT LISTENERS SETUP
// ==========================================

function setupEventListeners() {
    // Gate Button
    const gateBtn = document.getElementById('gateBtn');
    if (gateBtn) {
        gateBtn.addEventListener('click', openLandingPage);
    }
    
    // Continue Buttons
    const continueButtons = document.querySelectorAll('.btn-continue');
    continueButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            if (target) {
                navigateToSection(target);
            }
        });
    });
    
    // Love Letter Machine
    const revealLoveBtn = document.getElementById('revealLoveBtn');
    if (revealLoveBtn) {
        revealLoveBtn.addEventListener('click', revealLoveMessage);
    }
    
    // Music Control
    const musicToggle = document.getElementById('musicToggle');
    if (musicToggle) {
        musicToggle.addEventListener('click', toggleMusic);
    }
    
    // Puzzle
    initPuzzle();
    
    // Skip Puzzle Button
    const skipPuzzleBtn = document.getElementById('skipPuzzleBtn');
    if (skipPuzzleBtn) {
        skipPuzzleBtn.addEventListener('click', function() {
            navigateToSection('wish-wall');
        });
    }
    
    // Slideshow Controls
    const startSlideshowBtn = document.getElementById('startSlideshowBtn');
    if (startSlideshowBtn) {
        startSlideshowBtn.addEventListener('click', startSlideshow);
    }
    
    const skipSlideshowBtn = document.getElementById('skipSlideshowBtn');
    if (skipSlideshowBtn) {
        skipSlideshowBtn.addEventListener('click', skipSlideshow);
    }
    
    const closeSlideshowBtn = document.getElementById('closeSlideshowBtn');
    if (closeSlideshowBtn) {
        closeSlideshowBtn.addEventListener('click', closeSlideshow);
    }
    
    const prevSlide = document.getElementById('prevSlide');
    if (prevSlide) {
        prevSlide.addEventListener('click', () => changeSlide(-1));
    }
    
    const nextSlide = document.getElementById('nextSlide');
    if (nextSlide) {
        nextSlide.addEventListener('click', () => changeSlide(1));
    }
    
    const pauseSlideshow = document.getElementById('pauseSlideshow');
    if (pauseSlideshow) {
        pauseSlideshow.addEventListener('click', toggleSlideshowPause);
    }
    
    // Wish Wall
    initWishWall();
    
    const closeWishBtn = document.getElementById('closeWishBtn');
    if (closeWishBtn) {
        closeWishBtn.addEventListener('click', closeWishModal);
    }
    
    // Love Wheel
    const spinBtn = document.getElementById('spinBtn');
    if (spinBtn) {
        spinBtn.addEventListener('click', spinWheel);
    }
    
    // Final Replay Button
    const replayBtn = document.getElementById('replayBtn');
    if (replayBtn) {
        replayBtn.addEventListener('click', replayExperience);
    }
}

// ==========================================
// SECTION NAVIGATION
// ==========================================

function navigateToSection(sectionId) {
    // Hide all sections
    const allSections = document.querySelectorAll('.section');
    allSections.forEach(section => {
        section.classList.remove('active');
        section.classList.add('hidden');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.remove('hidden');
        setTimeout(() => {
            targetSection.classList.add('active');
        }, 10);
        
        // Scroll to top of section
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Reinitialize puzzle if navigating to puzzle section
        if (sectionId === 'puzzle') {
            setTimeout(() => {
                initPuzzle();
            }, 100);
        }
    }
}

// ==========================================
// GATE SCREEN
// ==========================================

function openLandingPage() {
    // Play heart pop sound (optional - add audio file)
    // const popSound = new Audio('assets/audio/pop.mp3');
    // popSound.play();
    
    // Hide gate section
    const gateSection = document.getElementById('gate');
    gateSection.classList.remove('active');
    
    setTimeout(() => {
        gateSection.classList.add('hidden');
        
        // Show landing section
        const landingSection = document.getElementById('landing');
        landingSection.classList.remove('hidden');
        
        setTimeout(() => {
            landingSection.classList.add('active');
            
            // Start background music
            startBackgroundMusic();
            
            // Show music control
            const musicControl = document.getElementById('musicControl');
            musicControl.classList.remove('hidden');
        }, 100);
    }, 600);
}

// ==========================================
// BACKGROUND MUSIC
// ==========================================

function startBackgroundMusic() {
    if (bgMusic && !isMusicPlaying) {
        // Set volume and loop
        bgMusic.volume = 0.4;
        bgMusic.loop = true;
        
        // Try to play with better error handling
        const playPromise = bgMusic.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                // Audio started successfully
                isMusicPlaying = true;
                updateMusicButton();
                console.log("🎵 Background music playing!");
            }).catch(err => {
                console.log("Autoplay prevented. Trying again after user interaction...", err);
                // Try again after a short delay (user has already clicked the button)
                setTimeout(() => {
                    bgMusic.play().then(() => {
                        isMusicPlaying = true;
                        updateMusicButton();
                    }).catch(e => console.log("Music play failed:", e));
                }, 100);
            });
        }
    }
}

function toggleMusic() {
    if (!bgMusic) return;
    
    if (isMusicPlaying) {
        bgMusic.pause();
        isMusicPlaying = false;
    } else {
        bgMusic.play();
        isMusicPlaying = true;
    }
    updateMusicButton();
}

function updateMusicButton() {
    const musicToggle = document.getElementById('musicToggle');
    if (musicToggle) {
        musicToggle.textContent = isMusicPlaying ? '🎵' : '🔇';
    }
}

// ==========================================
// LOVE LETTER MACHINE
// ==========================================

function revealLoveMessage() {
    const messageElement = document.getElementById('loveMessage');
    
    // Get next message
    const message = loveMessages[currentMessageIndex];
    
    // Clear current message
    messageElement.textContent = '';
    
    // Typewriter effect
    let charIndex = 0;
    const typeInterval = setInterval(() => {
        if (charIndex < message.length) {
            messageElement.textContent += message[charIndex];
            charIndex++;
        } else {
            clearInterval(typeInterval);
        }
    }, 30);
    
    // Create floating hearts
    createFloatingHearts();
    
    // Move to next message
    currentMessageIndex++;
    if (currentMessageIndex >= loveMessages.length) {
        currentMessageIndex = 0; // Loop back
        // Optionally show a special message
        setTimeout(() => {
            const revealBtn = document.getElementById('revealLoveBtn');
            revealBtn.textContent = "I love you endlessly ❤️ (Click for more)";
        }, 1000);
    }
}

function createFloatingHearts() {
    const container = document.getElementById('heartsContainer');
    const heartEmojis = ['❤️', '💖', '💗', '💕', '💝'];
    
    // Create 5 hearts
    for (let i = 0; i < 5; i++) {
        const heart = document.createElement('span');
        heart.className = 'floating-heart';
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        
        // Random horizontal offset
        const xOffset = (Math.random() - 0.5) * 100; // -50 to 50
        heart.style.setProperty('--x-offset', `${xOffset}px`);
        heart.style.left = `${50 + (Math.random() - 0.5) * 40}%`;
        
        container.appendChild(heart);
        
        // Remove after animation
        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}

// ==========================================
// PUZZLE GAME
// ==========================================

function initPuzzle() {
    // Reset puzzle state
    isPuzzleComplete = false;
    selectedPiece = null;
    
    // Create shuffled order
    puzzleOrder = [...correctOrder];
    shuffleArray(puzzleOrder);
    
    // Make sure it's actually shuffled (not already solved)
    let attempts = 0;
    while (puzzleOrder.every((piece, index) => piece === correctOrder[index]) && attempts < 10) {
        shuffleArray(puzzleOrder);
        attempts++;
    }
    
    console.log('Puzzle initialized with order:', puzzleOrder);
    console.log('Puzzle image path:', puzzleImage);
    
    // Generate puzzle pieces
    const container = document.getElementById('puzzleContainer');
    if (!container) {
        console.error('Puzzle container not found!');
        return;
    }
    
    container.innerHTML = '';
    
    // Preload the image first
    const img = new Image();
    img.onload = function() {
        console.log('Puzzle image loaded successfully!');
        generatePuzzlePieces();
    };
    img.onerror = function() {
        console.error('Failed to load puzzle image:', puzzleImage);
        // Show error message to user
        container.innerHTML = '<p style="color: #ffb3d9; text-align: center;">Image failed to load. Please click "Skip Puzzle & Continue" below.</p>';
    };
    img.src = puzzleImage;
    
    function generatePuzzlePieces() {
        puzzleOrder.forEach((pieceIndex, position) => {
            const piece = document.createElement('div');
            piece.className = 'puzzle-piece';
            piece.dataset.position = position;
            piece.dataset.piece = pieceIndex;
            
            // Calculate background position
            const col = pieceIndex % 3;
            const row = Math.floor(pieceIndex / 3);
            piece.style.backgroundImage = `url('${puzzleImage}')`;
            piece.style.backgroundPosition = `-${col * 130}px -${row * 130}px`;
            piece.style.backgroundSize = '390px 390px';
            
            piece.addEventListener('click', handlePieceClick);
            
            container.appendChild(piece);
        });
        
        console.log('Puzzle pieces generated successfully!');
    }
}

function handlePieceClick(e) {
    if (isPuzzleComplete) {
        console.log('Puzzle already complete!');
        return;
    }
    
    const piece = e.currentTarget;
    
    if (!selectedPiece) {
        // First piece selected
        selectedPiece = piece;
        piece.classList.add('selected');
        console.log('Selected piece:', piece.dataset.piece);
    } else if (selectedPiece === piece) {
        // Clicked same piece - deselect
        selectedPiece.classList.remove('selected');
        selectedPiece = null;
        console.log('Deselected piece');
    } else {
        // Second piece selected - swap them
        console.log('Swapping pieces:', selectedPiece.dataset.piece, 'and', piece.dataset.piece);
        swapPieces(selectedPiece, piece);
        selectedPiece.classList.remove('selected');
        selectedPiece = null;
        
        // Check if puzzle is complete
        checkPuzzleComplete();
    }
}

function swapPieces(piece1, piece2) {
    const pos1 = parseInt(piece1.dataset.position);
    const pos2 = parseInt(piece2.dataset.position);
    
    const pieceIndex1 = parseInt(piece1.dataset.piece);
    const pieceIndex2 = parseInt(piece2.dataset.piece);
    
    // Swap in array
    [puzzleOrder[pos1], puzzleOrder[pos2]] = [puzzleOrder[pos2], puzzleOrder[pos1]];
    
    // Update DOM
    piece1.dataset.piece = pieceIndex2;
    piece2.dataset.piece = pieceIndex1;
    
    // Update background positions
    updatePieceBackground(piece1, pieceIndex2);
    updatePieceBackground(piece2, pieceIndex1);
}

function updatePieceBackground(piece, pieceIndex) {
    const col = pieceIndex % 3;
    const row = Math.floor(pieceIndex / 3);
    piece.style.backgroundPosition = `-${col * 130}px -${row * 130}px`;
}

function checkPuzzleComplete() {
    const isComplete = puzzleOrder.every((piece, index) => piece === correctOrder[index]);
    
    console.log('Checking puzzle... Current order:', puzzleOrder);
    console.log('Is complete?', isComplete);
    
    if (isComplete && !isPuzzleComplete) {
        isPuzzleComplete = true;
        console.log('🎉 PUZZLE COMPLETED! 🎉');
        
        // Add completion effect to all pieces
        const allPieces = document.querySelectorAll('.puzzle-piece');
        allPieces.forEach(piece => {
            piece.style.border = '3px solid #00ff88';
            piece.style.boxShadow = '0 0 40px rgba(0, 255, 136, 0.8)';
            piece.style.pointerEvents = 'none';
        });
        
        // Update hint text
        const hintText = document.querySelector('.puzzle-hint');
        if (hintText) {
            hintText.textContent = '🎉 Puzzle Completed! Well done! 🎉';
            hintText.style.color = '#00ff88';
            hintText.style.fontSize = '1.5rem';
        }
        
        // Show modal
        setTimeout(() => {
            showPuzzleCompleteModal();
        }, 800);
        
        // Show continue button
        const continueBtn = document.getElementById('puzzleContinueBtn');
        if (continueBtn) {
            setTimeout(() => {
                continueBtn.style.display = 'block';
                continueBtn.style.animation = 'fadeIn 0.5s ease-in-out';
            }, 1000);
        }
    }
}

function showPuzzleCompleteModal() {
    const modal = document.getElementById('puzzleModal');
    modal.classList.remove('hidden');
    modal.classList.add('active');
    
    // Play confetti
    playConfetti();
    
    // Play voice message
    if (voiceMessage) {
        voiceMessage.play().catch(err => {
            console.log("Voice message play error:", err);
        });
    }
}

// ==========================================
// CONFETTI EFFECT
// ==========================================

function playConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const colors = ['#ff6fa9', '#ff3b6b', '#ffa6c9', '#ff1744', '#ff80ab'];
    
    // Create particles
    for (let i = 0; i < 150; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 2,
            d: Math.random() * 150 + 10,
            color: colors[Math.floor(Math.random() * colors.length)],
            tilt: Math.random() * 10 - 10,
            tiltAngleIncremental: Math.random() * 0.07 + 0.05,
            tiltAngle: 0
        });
    }
    
    let animationFrame;
    
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach((p, index) => {
            ctx.beginPath();
            ctx.lineWidth = p.r / 2;
            ctx.strokeStyle = p.color;
            ctx.moveTo(p.x + p.tilt + p.r / 4, p.y);
            ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 4);
            ctx.stroke();
            
            p.tiltAngle += p.tiltAngleIncremental;
            p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
            p.tilt = Math.sin(p.tiltAngle) * 15;
            
            if (p.y > canvas.height) {
                particles[index] = {
                    x: Math.random() * canvas.width,
                    y: -20,
                    r: p.r,
                    d: p.d,
                    color: p.color,
                    tilt: p.tilt,
                    tiltAngleIncremental: p.tiltAngleIncremental,
                    tiltAngle: p.tiltAngle
                };
            }
        });
        
        animationFrame = requestAnimationFrame(draw);
    }
    
    draw();
    
    // Stop after 5 seconds
    setTimeout(() => {
        cancelAnimationFrame(animationFrame);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, 5000);
}

// ==========================================
// SLIDESHOW
// ==========================================

function startSlideshow() {
    // Hide puzzle modal
    const modal = document.getElementById('puzzleModal');
    modal.classList.remove('active');
    setTimeout(() => modal.classList.add('hidden'), 300);
    
    // Show slideshow
    const overlay = document.getElementById('slideshowOverlay');
    overlay.classList.remove('hidden');
    overlay.classList.add('active');
    
    // Start from first image
    currentSlideIndex = 0;
    showSlide(currentSlideIndex);
    
    // Start auto-play
    startSlideshowAutoplay();
}

function skipSlideshow() {
    // Hide puzzle modal
    const modal = document.getElementById('puzzleModal');
    modal.classList.remove('active');
    setTimeout(() => modal.classList.add('hidden'), 300);
    
    // Make sure continue button is visible
    const continueBtn = document.getElementById('puzzleContinueBtn');
    if (continueBtn) {
        continueBtn.style.display = 'block';
    }
}

function showSlide(index) {
    const image = document.getElementById('slideshowImage');
    const caption = document.getElementById('slideshowCaption');
    
    if (slideshowImages[index]) {
        // Remove animation class
        image.style.animation = 'none';
        
        // Trigger reflow
        void image.offsetWidth;
        
        // Add animation class
        image.style.animation = 'slideIn 0.5s ease-in-out';
        
        image.src = slideshowImages[index].src;
        caption.textContent = slideshowImages[index].caption;
    }
}

function changeSlide(direction) {
    currentSlideIndex += direction;
    
    if (currentSlideIndex < 0) {
        currentSlideIndex = slideshowImages.length - 1;
    } else if (currentSlideIndex >= slideshowImages.length) {
        currentSlideIndex = 0;
    }
    
    showSlide(currentSlideIndex);
}

function startSlideshowAutoplay() {
    if (slideshowInterval) {
        clearInterval(slideshowInterval);
    }
    
    slideshowInterval = setInterval(() => {
        if (isSlideshowPlaying) {
            changeSlide(1);
        }
    }, 4000); // 4 seconds per slide
}

function toggleSlideshowPause() {
    isSlideshowPlaying = !isSlideshowPlaying;
    const pauseBtn = document.getElementById('pauseSlideshow');
    pauseBtn.textContent = isSlideshowPlaying ? '⏸️' : '▶️';
}

function closeSlideshow() {
    const overlay = document.getElementById('slideshowOverlay');
    overlay.classList.remove('active');
    
    // Stop autoplay
    if (slideshowInterval) {
        clearInterval(slideshowInterval);
    }
    
    // Just hide the overlay, stay in puzzle section
    setTimeout(() => {
        overlay.classList.add('hidden');
        // Show the continue button if not already visible
        const continueBtn = document.getElementById('puzzleContinueBtn');
        if (continueBtn) {
            continueBtn.style.display = 'block';
        }
    }, 300);
}

// ==========================================
// WISH WALL
// ==========================================

function initWishWall() {
    const container = document.getElementById('balloonsGrid');
    if (!container) return;
    
    container.innerHTML = '';
    
    const balloonEmojis = ['🎈', '🎈', '🎈', '🎈', '🎈'];
    const balloonColors = ['filter: hue-rotate(0deg)', 'filter: hue-rotate(300deg)', 
                           'filter: hue-rotate(280deg)', 'filter: hue-rotate(320deg)',
                           'filter: hue-rotate(340deg)'];
    
    wishMessages.forEach((message, index) => {
        const balloon = document.createElement('div');
        balloon.className = 'wish-balloon';
        balloon.textContent = '🎈';
        balloon.style.cssText = balloonColors[index % balloonColors.length];
        balloon.style.animationDelay = `${Math.random() * 2}s`;
        balloon.dataset.message = message;
        
        balloon.addEventListener('click', handleBalloonClick);
        
        container.appendChild(balloon);
    });
}

function handleBalloonClick(e) {
    const balloon = e.currentTarget;
    const message = balloon.dataset.message;
    
    // Pop animation
    balloon.classList.add('popped');
    
    // Show message modal
    setTimeout(() => {
        showWishMessage(message);
        balloon.style.visibility = 'hidden';
    }, 500);
}

function showWishMessage(message) {
    const modal = document.getElementById('wishModal');
    const messageText = document.getElementById('wishMessage');
    
    messageText.textContent = message;
    modal.classList.remove('hidden');
    modal.classList.add('active');
}

function closeWishModal() {
    const modal = document.getElementById('wishModal');
    modal.classList.remove('active');
    
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

// ==========================================
// LOVE WHEEL
// ==========================================

function initWheel() {
    const canvas = document.getElementById('wheelCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 220; // Increased from 150 to 220 for larger wheel
    
    drawWheel(ctx, centerX, centerY, radius);
}

function drawWheel(ctx, centerX, centerY, radius, rotation = 0) {
    const numSegments = wheelSegments.length;
    const anglePerSegment = (2 * Math.PI) / numSegments;
    
    // Colors for segments
    const colors = ['#ff6fa9', '#ff3b6b', '#ffa6c9', '#ff1744', 
                   '#ff80ab', '#ff6fa9', '#ff3b6b', '#ffa6c9'];
    
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(rotation);
    
    // Draw segments
    for (let i = 0; i < numSegments; i++) {
        const startAngle = i * anglePerSegment;
        const endAngle = startAngle + anglePerSegment;
        
        // Draw segment
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, radius, startAngle, endAngle);
        ctx.closePath();
        ctx.fillStyle = colors[i % colors.length];
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 3;
        ctx.stroke();
        
        // Draw text
        ctx.save();
        ctx.rotate(startAngle + anglePerSegment / 2);
        ctx.textAlign = 'center';
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 22px Quicksand';
        ctx.fillText(wheelSegments[i].emoji, radius * 0.7, 5);
        ctx.font = 'bold 16px Quicksand';
        ctx.fillText(wheelSegments[i].text, radius * 0.7, 25);
        ctx.restore();
    }
    
    // Draw center circle
    ctx.beginPath();
    ctx.arc(0, 0, 40, 0, 2 * Math.PI);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.strokeStyle = '#ff3b6b';
    ctx.lineWidth = 4;
    ctx.stroke();
    
    ctx.restore();
}

function spinWheel() {
    if (isSpinning) return;
    
    isSpinning = true;
    const spinBtn = document.getElementById('spinBtn');
    spinBtn.disabled = true;
    spinBtn.style.opacity = '0.5';
    
    // Random spin
    const minSpins = 5;
    const extraRotation = Math.random() * 2 * Math.PI;
    const totalRotation = minSpins * 2 * Math.PI + extraRotation;
    
    const duration = 4000; // 4 seconds
    const startTime = Date.now();
    const canvas = document.getElementById('wheelCanvas');
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 220; // Match the larger wheel size
    
    function animate() {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentRotation = easeOut * totalRotation;
        
        wheelRotation = currentRotation;
        drawWheel(ctx, centerX, centerY, radius, currentRotation);
        
        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            // Spin complete
            isSpinning = false;
            spinBtn.disabled = false;
            spinBtn.style.opacity = '1';
            
            // Determine which segment won
            const normalizedRotation = (currentRotation % (2 * Math.PI));
            const segmentAngle = (2 * Math.PI) / wheelSegments.length;
            // The pointer is at the top, so we need to account for that
            const adjustedRotation = (2 * Math.PI - normalizedRotation + Math.PI / 2) % (2 * Math.PI);
            const winningIndex = Math.floor(adjustedRotation / segmentAngle);
            
            showWheelResult(winningIndex);
        }
    }
    
    animate();
}

function showWheelResult(index) {
    const result = wheelSegments[index];
    const resultDiv = document.getElementById('wheelResult');
    const resultText = document.getElementById('wheelResultText');
    
    resultText.textContent = `You won: ${result.emoji} ${result.text}!\nI owe you this, and I'll pay in full! 💕`;
    resultDiv.classList.remove('hidden');
    resultDiv.classList.add('active');
    
    // Hide after 5 seconds
    setTimeout(() => {
        resultDiv.classList.remove('active');
    }, 5000);
}

// ==========================================
// FINAL SCREEN
// ==========================================

function replayExperience() {
    // Reload page or scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    location.reload();
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// ==========================================
// RESPONSIVE ADJUSTMENTS
// ==========================================

window.addEventListener('resize', () => {
    // Adjust confetti canvas
    const confettiCanvas = document.getElementById('confettiCanvas');
    if (confettiCanvas) {
        confettiCanvas.width = window.innerWidth;
        confettiCanvas.height = window.innerHeight;
    }
    
    // Redraw wheel if needed
    const wheelCanvas = document.getElementById('wheelCanvas');
    if (wheelCanvas && !isSpinning) {
        const ctx = wheelCanvas.getContext('2d');
        const centerX = wheelCanvas.width / 2;
        const centerY = wheelCanvas.height / 2;
        const radius = Math.min(wheelCanvas.width, wheelCanvas.height) / 2 - 25;
        drawWheel(ctx, centerX, centerY, radius, wheelRotation);
    }
});

// ==========================================
// LOG
// ==========================================

console.log("%c🎂 Happy Birthday Khyati! 🎂", "font-size: 24px; color: #ff6fa9; font-weight: bold;");
console.log("%cMade with ❤️ by your boyfriend", "font-size: 16px; color: #ff3b6b;");
