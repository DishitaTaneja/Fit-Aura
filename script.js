// FitAura Dashboard JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // BMI Calculator
    const bmiForm = document.querySelector('.bmi-form');
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const calculateBtn = document.querySelector('.calculate-btn');
    const bmiValue = document.querySelector('.bmi-value');
    const bmiCategory = document.querySelector('.bmi-category');
    const scaleItems = document.querySelectorAll('.scale-item');

    calculateBtn.addEventListener('click', function() {
        const height = parseFloat(heightInput.value) / 100; // Convert cm to meters
        const weight = parseFloat(weightInput.value);
        
        if (height > 0 && weight > 0) {
            const bmi = weight / (height * height);
            bmiValue.textContent = bmi.toFixed(1);
            
            // Update BMI category
            let category, categoryClass;
            if (bmi < 18.5) {
                category = 'Underweight';
                categoryClass = 'underweight';
            } else if (bmi < 25) {
                category = 'Healthy Weight';
                categoryClass = 'healthy';
            } else if (bmi < 30) {
                category = 'Overweight';
                categoryClass = 'overweight';
            } else {
                category = 'Obese';
                categoryClass = 'obese';
            }
            
            bmiCategory.textContent = category;
            bmiCategory.className = `bmi-category ${categoryClass}`;
            
            // Update scale indicators
            scaleItems.forEach(item => item.classList.remove('active'));
            document.querySelector(`.scale-item.${categoryClass}`).classList.add('active');
            
            // Animate the result
            bmiValue.style.transform = 'scale(1.1)';
            setTimeout(() => {
                bmiValue.style.transform = 'scale(1)';
            }, 200);
        }
    });

    // Water Bottle Interaction
    const waterBottles = document.querySelectorAll('.water-bottle');
    const currentIntake = document.querySelector('.current-intake');
    let filledCount = 5; // Starting with 5 filled bottles

    waterBottles.forEach((bottle, index) => {
        bottle.addEventListener('click', function() {
            if (index < filledCount) {
                // Remove water
                if (filledCount > 0) {
                    filledCount--;
                    updateWaterBottles();
                }
            } else {
                // Add water
                if (filledCount < 8) {
                    filledCount++;
                    updateWaterBottles();
                }
            }
        });
    });

    function updateWaterBottles() {
        waterBottles.forEach((bottle, index) => {
            if (index < filledCount) {
                bottle.classList.add('filled');
            } else {
                bottle.classList.remove('filled');
            }
        });
        currentIntake.textContent = `${filledCount}/8 glasses`;
        
        // Animate the change
        currentIntake.style.transform = 'scale(1.1)';
        setTimeout(() => {
            currentIntake.style.transform = 'scale(1)';
        }, 200);
    }

    // Mood Tracker
    const moodBtns = document.querySelectorAll('.mood-btn');
    
    moodBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            moodBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Animate the selection
            this.style.transform = 'scale(1.2)';
            setTimeout(() => {
                this.style.transform = 'scale(1.1)';
            }, 200);
        });
    });

    // Dynamic Motivational Quotes
    const motivationalQuotes = [
        "The only bad workout is the one that didn't happen. Every step forward is progress.",
        "Your body can stand almost anything. It's your mind you have to convince.",
        "The difference between try and triumph is just a little umph!",
        "Take care of your body. It's the only place you have to live.",
        "Fitness is not about being better than someone else. It's about being better than you used to be.",
        "The only person you are destined to become is the person you decide to be.",
        "Don't wish for it. Work for it.",
        "Success isn't always about greatness. It's about consistency."
    ];

    const motivationalQuote = document.querySelector('.motivational-quote');
    let quoteIndex = 0;

    function changeQuote() {
        quoteIndex = (quoteIndex + 1) % motivationalQuotes.length;
        motivationalQuote.style.opacity = '0';
        
        setTimeout(() => {
            motivationalQuote.textContent = motivationalQuotes[quoteIndex];
            motivationalQuote.style.opacity = '1';
        }, 300);
    }

    // Change quote every 10 seconds
    setInterval(changeQuote, 10000);

    // Health Tips
    const healthTips = [
        "Drink a glass of water first thing in the morning to kickstart your metabolism and hydrate your body after sleep.",
        "Take a 5-minute break every hour to stretch and move around. Your body and mind will thank you.",
        "Eat slowly and mindfully. It takes about 20 minutes for your brain to register that you're full.",
        "Get at least 7-8 hours of sleep each night. Quality sleep is essential for recovery and overall health.",
        "Practice deep breathing exercises for 5 minutes daily to reduce stress and improve focus.",
        "Include protein in every meal to help maintain muscle mass and keep you feeling full longer.",
        "Take the stairs instead of the elevator whenever possible. Every bit of movement counts!",
        "Spend at least 10 minutes outdoors daily to get natural vitamin D and fresh air."
    ];

    const healthTipText = document.querySelector('.health-tip p');
    let tipIndex = 0;

    function changeHealthTip() {
        tipIndex = (tipIndex + 1) % healthTips.length;
        healthTipText.style.opacity = '0';
        
        setTimeout(() => {
            healthTipText.textContent = healthTips[tipIndex];
            healthTipText.style.opacity = '1';
        }, 300);
    }

    // Change health tip every 15 seconds
    setInterval(changeHealthTip, 15000);

    // Calendar Navigation
    const calendarNavLeft = document.querySelector('.calendar-nav:first-of-type');
    const calendarNavRight = document.querySelector('.calendar-nav:last-of-type');
    const calendarMonth = document.querySelector('.calendar-header h3');
    
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    let currentMonth = 11; // December
    let currentYear = 2024;

    calendarNavLeft.addEventListener('click', function() {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        updateCalendar();
    });

    calendarNavRight.addEventListener('click', function() {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        updateCalendar();
    });

    function updateCalendar() {
        calendarMonth.textContent = `${months[currentMonth]} ${currentYear}`;
        
        // Animate the change
        calendarMonth.style.transform = 'scale(1.1)';
        setTimeout(() => {
            calendarMonth.style.transform = 'scale(1)';
        }, 200);
    }

    // Progress Bar Animations
    const progressBars = document.querySelectorAll('.progress');
    
    function animateProgressBars() {
        progressBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0%';
            
            setTimeout(() => {
                bar.style.width = width;
            }, 500);
        });
    }

    // Animate progress bars on page load
    setTimeout(animateProgressBars, 1000);

    // Sleep Chart Interaction
    const sleepBars = document.querySelectorAll('.sleep-bar');
    
    sleepBars.forEach(bar => {
        bar.addEventListener('click', function() {
            // Show detailed sleep info (you could expand this)
            const hours = this.querySelector('.sleep-hours').textContent;
            showNotification(`Sleep duration: ${hours} on ${getDayFromIndex(Array.from(sleepBars).indexOf(this))}`);
        });
    });

    function getDayFromIndex(index) {
        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        return days[index];
    }

    // Notification System
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #4ade80;
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(74, 222, 128, 0.3);
            z-index: 1000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Add some CSS transitions
    const style = document.createElement('style');
    style.textContent = `
        .motivational-quote,
        .health-tip p {
            transition: opacity 0.3s ease;
        }
        
        .notification {
            font-family: 'Inter', sans-serif;
            font-weight: 500;
        }
    `;
    document.head.appendChild(style);

    // Initialize tooltips for better UX
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.getAttribute('data-tooltip');
            tooltip.style.cssText = `
                position: absolute;
                background: #1e293b;
                color: white;
                padding: 8px 12px;
                border-radius: 6px;
                font-size: 0.8rem;
                z-index: 1000;
                pointer-events: none;
                white-space: nowrap;
                opacity: 0;
                transition: opacity 0.3s ease;
            `;
            
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
            
            setTimeout(() => {
                tooltip.style.opacity = '1';
            }, 100);
            
            this.tooltip = tooltip;
        });
        
        element.addEventListener('mouseleave', function() {
            if (this.tooltip) {
                this.tooltip.style.opacity = '0';
                setTimeout(() => {
                    if (this.tooltip.parentNode) {
                        this.tooltip.parentNode.removeChild(this.tooltip);
                    }
                }, 300);
                this.tooltip = null;
            }
        });
    });

    // Add some data-tooltip attributes to elements
    document.querySelectorAll('.water-bottle').forEach((bottle, index) => {
        bottle.setAttribute('data-tooltip', `Click to ${index < 5 ? 'remove' : 'add'} water`);
    });

    document.querySelectorAll('.sleep-bar').forEach((bar, index) => {
        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        bar.setAttribute('data-tooltip', `Click to see ${days[index]} sleep details`);
    });

    // Welcome message
    setTimeout(() => {
        showNotification('Welcome to FitAura! 🎉 Start your wellness journey today.');
    }, 1000);

    console.log('FitAura Dashboard loaded successfully! 🌱✨');
}); 