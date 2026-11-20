// =============================
// REAL OR FAKE QUIZ
// =============================

const questions = [
{
    question: "You receive a text saying your bank account will be blocked unless you click a link and verify your information. What should you do?",
    answers: [
        "Click the link immediately",
        "Contact the bank through its official channel",
        "Reply with your password"
    ],
    correct: 1,
    explanation: "Unexpected links and urgent threats are warning signs. Verify through the bank's official app or contact number."
},
{
    question: "An online seller offers a phone at an unusually low price and demands full payment immediately. What is the safest action?",
    answers: [
        "Pay immediately",
        "Check the seller's credibility first",
        "Send your OTP"
    ],
    correct: 1,
    explanation: "Always check the seller's background and use a safer payment method."
},
{
    question: "Someone claiming to be your relative messages you using a new number and asks for money. What should you do?",
    answers: [
        "Send money immediately",
        "Ignore all communication",
        "Call your relative using a known number"
    ],
    correct: 2,
    explanation: "Impersonation scams use fake identities. Verify the person's identity independently."
},
{
    question: "You receive a delivery notification with an unfamiliar link asking for a redelivery fee. What should you do?",
    answers: [
        "Check the delivery using the courier's official website",
        "Enter your card details",
        "Forward the link to friends"
    ],
    correct: 0,
    explanation: "Use the courier's official app or website instead of clicking unexpected links."
},
{
    question: "A recruiter offers a guaranteed job but asks you to pay a processing fee first. What should you do?",
    answers: [
        "Pay immediately",
        "Verify the company and the job offer",
        "Send your bank details"
    ],
    correct: 1,
    explanation: "Suspicious upfront payments and unrealistic promises are warning signs."
},

// =============================
// ADDITIONAL SCAM SCENARIOS
// =============================

{
    question: `Scenario 1: GCash Account Verification
Phishing SMS Message | 9:42 AM

GCash Security Alert:
Your GCash account has been temporarily restricted due to unusual activity. Verify your account immediately to avoid permanent suspension.

Verify here: https://gcash-account-verify.example.com

Question: Is this message REAL or FAKE?`,
    answers: [
        "A. Real – GCash needs to verify accounts.",
        "B. Fake – It uses an unofficial verification link and threatens account suspension.",
        "C. Real – All account restrictions require SMS verification."
    ],
    correct: 1,
    explanation: "FAKE. Scammers impersonate GCash to steal account credentials and personal information. The suspicious link and threatening language are warning signs. Access GCash through its official application or website instead of clicking unfamiliar links."
},
{
    question: `Scenario 2: Fake Maya Reward
Phishing SMS Message | 2:15 PM

Congratulations! You have been selected to receive ₱3,000 from Maya's Anniversary Promo!

Claim your reward now. Enter your account details and OTP to receive your prize.

Question: Is this message REAL or FAKE?`,
    answers: [
        "A. Real – Maya gives promotional rewards.",
        "B. Fake – It requests sensitive account information and an OTP.",
        "C. Real – Rewards always require OTP verification."
    ],
    correct: 1,
    explanation: "FAKE. Fraudsters use fake promotions to convince victims to reveal their one-time passwords (OTPs). Never share your OTP, MPIN, or password with anyone."
},
{
    question: `Scenario 3: Budol Payment Scam
Payment Scam | Facebook Marketplace Chat

Seller: Hello po! Original iPhone 13, only ₱5,000 today!
Buyer: Available pa po?
Seller: Yes po! Marami pong interested. Send payment now through GCash para ma-reserve. No COD po. Last unit na lang!

Question: Is this message REAL or FAKE?`,
    answers: [
        "A. Real – The seller is offering a discounted price.",
        "B. Fake – The unusually low price and pressure to pay immediately are suspicious.",
        "C. Real – GCash payments are always safe."
    ],
    correct: 1,
    explanation: "FAKE. Scammers often offer products at unusually low prices and pressure buyers into making advance payments. Verify the seller and use safer payment arrangements before purchasing."
},
{
    question: `Scenario 4: Wrong Send Scam
E-Wallet Scam | SMS and Phone Call

Unknown Number: Hello po! Nagkamali po ako ng send ng ₱2,000 sa GCash number ninyo. Paki-send back na lang po sa number na ito.
You: Wala po akong nakikitang transaction.
Unknown Number: Nag-send na po ako ng screenshot. Please return it immediately.

Question: What should you do?`,
    answers: [
        "A. Immediately send ₱2,000 to the sender's number.",
        "B. Check your official transaction history and contact GCash support if necessary.",
        "C. Trust the screenshot as proof of payment."
    ],
    correct: 1,
    explanation: "VERIFY FIRST. Fake payment screenshots can be used to convince people that money was transferred. Always check your actual wallet balance and transaction history. If money genuinely arrived by mistake, use the official provider's process."
},
{
    question: `Scenario 5: Fake Parcel Delivery
Smishing SMS Message

Your parcel delivery is currently on hold due to an incomplete address. Pay ₱25 redelivery fee to receive your package.

Update delivery details here: https://phlpost-redelivery.example.com

Question: Is this message REAL or FAKE?`,
    answers: [
        "A. Real – Delivery companies collect small redelivery fees.",
        "B. Fake – It uses an unfamiliar link and requests payment through an unsolicited message.",
        "C. Real – All delayed parcels require online payment."
    ],
    correct: 1,
    explanation: "FAKE. Fake parcel messages are commonly used to steal personal and financial information. Verify parcel status using the official delivery company's website or application."
},
{
    question: `Scenario 6: Balikbayan Box Scam
Impersonation | Messenger Conversation

Unknown Person: Good day! May balikbayan box po kayo from your relative abroad.
You: Sino po ang sender?
Unknown Person: Confidential po. Pero kailangan ninyong magbayad ng ₱8,500 customs clearance fee para ma-release ang package. Send payment through GCash today.

Question: What is the biggest warning sign?`,
    answers: [
        "A. The package is coming from abroad.",
        "B. The sender refuses to provide verifiable information and demands immediate payment.",
        "C. The package contains gifts."
    ],
    correct: 1,
    explanation: "Scammers may impersonate delivery personnel or customs representatives and demand fake clearance fees. Verify the shipment with the legitimate courier and relevant authorities before paying."
},
{
    question: `Scenario 7: Online Task Job Offer
Job Scam | Telegram Message

Recruiter: Hello! We are hiring online product reviewers. Earn ₱3,000–₱5,000 daily by simply liking products and following Shopee stores.
Applicant: Do I need experience?
Recruiter: No experience needed! Just deposit ₱500 to activate your account and unlock higher-paying tasks.

Question: Is this message REAL or FAKE?`,
    answers: [
        "A. Real – Online jobs do not require experience.",
        "B. Fake – The recruiter demands an upfront payment to access employment.",
        "C. Real – Deposits are normal for online work."
    ],
    correct: 1,
    explanation: "FAKE. Task scams attract victims with promises of easy money and gradually demand deposits or additional payments. Legitimate employment should not require applicants to pay money to unlock their salaries."
},
{
    question: `Scenario 8: Legitimate Job Application
Legitimate Example | Email Message

Subject: Application Received – Junior Web Developer

Dear Applicant,
Thank you for applying to our company. Your application has been received. Please visit our official company website to review the hiring process and interview schedule.

No payment is required during the application process.

Question: Is this message likely REAL or FAKE?`,
    answers: [
        "A. Real – It provides a normal application update without requesting money or sensitive information.",
        "B. Fake – All job-related emails are scams.",
        "C. Fake – Legitimate employers should never send emails."
    ],
    correct: 0,
    explanation: "LIKELY REAL. This message contains common characteristics of a legitimate recruitment update. However, users should still verify the sender's email address and the company's official website."
},
{
    question: `Scenario 9: Palit-Tawag Scam
Social Engineering | In-Person Situation

Stranger: Ate, pwede po makitawag? Emergency lang po, wala akong load.
You: Sige po.
Stranger: Pahiram na rin po sandali. Tatawag lang ako.

The stranger attempts to replace your phone with another similar-looking device after making the call.

Question: What type of scam is illustrated?`,
    answers: [
        "A. Online shopping scam.",
        "B. Palit-Tawag scam.",
        "C. Fake parcel scam."
    ],
    correct: 1,
    explanation: "PALIT-TAWAG SCAM. In this scam, a person borrows someone else's phone under the excuse of making an emergency call and secretly switches it with another device. Keep your phone in your possession."
},
{
    question: `Scenario 10: Fake Ayuda Registration
Government Impersonation | Facebook Post

PUBLIC ANNOUNCEMENT
₱5,000 FREE AYUDA FOR ALL! Register now to receive your financial assistance. Limited slots only!

Provide your full name, address, birthday, GCash number, and OTP through the registration link.

Question: What should you do?`,
    answers: [
        "A. Register immediately before the slots run out.",
        "B. Share the post with your friends.",
        "C. Verify the announcement through official government channels and never provide your OTP."
    ],
    correct: 2,
    explanation: "VERIFY FIRST. Fake financial assistance announcements impersonate government agencies to collect personal information and steal accounts. Check official LGU or government announcements before registering."
},
{
    question: `Scenario 11: Fake Emergency Message
Impersonation | Messenger Conversation

Unknown Account: Ate, ako ito! Nasiraan ako ng phone. Pahiram muna ng ₱2,500, emergency lang. Send mo sa GCash number na ito.
You: Sino ka?
Unknown Account: Wala nang time mag-explain. Please, kailangan ko na ngayon!

Question: What is the safest action?`,
    answers: [
        "A. Send the money immediately because it might be a family emergency.",
        "B. Verify the person's identity by contacting them through a known phone number or another trusted channel.",
        "C. Send half of the requested amount."
    ],
    correct: 1,
    explanation: "VERIFY IDENTITY. Scammers may pretend to be relatives or friends using fake or compromised accounts. They use emotional pressure and urgency to convince victims to send money without verification."
},
{
    question: `Scenario 12: Free Gadget Giveaway
Freebie Scam | Facebook Messenger

Giveaway Organizer: Congratulations! You won our Samsung phone giveaway!
You: Really? I didn't join anything.
Giveaway Organizer: You were randomly selected. Pay ₱1,200 shipping and processing fees through GCash to claim your prize. Send your payment screenshot now!

Question: Is this message REAL or FAKE?`,
    answers: [
        "A. Real – Winners need to pay processing fees.",
        "B. Fake – The unexpected prize and advance payment demand are suspicious.",
        "C. Real – Facebook giveaways always require shipping payments."
    ],
    correct: 1,
    explanation: "FAKE. Fake giveaways lure victims with attractive prizes and demand advance payments or personal information. Verify the organizer and official giveaway mechanics before claiming anything."
}
];

// =============================
// QUIZ FUNCTIONS
// =============================

let currentQuestion = 0;
let totalScore = 0;
let answered = false;

function loadQuestion() {

    answered = false;

    let q = questions[currentQuestion];

    document.getElementById("questionNumber").textContent =
        "Question " + (currentQuestion + 1) +
        " of " + questions.length;

    document.getElementById("question").textContent = q.question;

    document.getElementById("feedback").textContent = "";

    document.getElementById("nextButton").disabled = true;

    document.getElementById("score").textContent =
        "Current Score: " + totalScore;

    let answerArea = document.getElementById("answers");

    answerArea.innerHTML = "";

    q.answers.forEach((answer, index) => {

        let btn = document.createElement("button");

        btn.textContent = answer;

        btn.className = "option";

        btn.onclick = function() {
            checkAnswer(index, btn);
        };

        answerArea.appendChild(btn);

    });
}

function checkAnswer(selected, selectedButton) {

    if (answered) return;

    answered = true;

    let q = questions[currentQuestion];

    let buttons = document.querySelectorAll(".option");

    buttons.forEach((btn, index) => {

        btn.disabled = true;

        if (index === q.correct) {
            btn.classList.add("correct");
        }

    });

    if (selected === q.correct) {

        totalScore++;

        document.getElementById("feedback").textContent =
            "Correct! " + q.explanation;

    } else {

        selectedButton.classList.add("wrong");

        document.getElementById("feedback").textContent =
            "Incorrect. " + q.explanation;

    }

    document.getElementById("score").textContent =
        "Current Score: " + totalScore;

    document.getElementById("nextButton").disabled = false;

}

function nextQuestion() {

    if (!answered) return;

    currentQuestion++;

    if (currentQuestion < questions.length) {

        loadQuestion();

    } else {

        document.getElementById("question").textContent =
            "Quiz Completed!";

        document.getElementById("answers").innerHTML = "";

        document.getElementById("questionNumber").textContent =
            "Final Result";

        document.getElementById("feedback").textContent =
            totalScore >= Math.ceil(questions.length * 0.8)
            ? "Great work! You understand many important online safety practices."
            : "Good effort! Review the safety guide and try again.";

        document.getElementById("score").textContent =
            "Your Final Score: " + totalScore +
            " out of " + questions.length;

        document.getElementById("nextButton").disabled = true;

    }

}

function restartQuiz() {

    currentQuestion = 0;
    totalScore = 0;

    loadQuestion();

}

loadQuestion();


// =============================
// SCAM TESTER
// =============================

function checkMessage() {

    let message = document
        .getElementById("message")
        .value.toLowerCase();

    let result = document.getElementById("result");

    if (message.trim() === "") {

        result.textContent =
            "Please enter a message first.";

        return;

    }

    let warningSigns = {

        "Urgent or threatening language": [
            "urgent", "immediately", "act now",
            "suspended", "blocked", "last chance",
            "within 10 minutes", "within 24 hours"
        ],

        "Requests for sensitive information": [
            "password", "otp", "verification code",
            "one-time pin", "bank details", "card number"
        ],

        "Suspicious payment requests": [
            "processing fee", "redelivery fee",
            "send money", "pay now", "transfer money"
        ],

        "Unexpected link instructions": [
            "click here", "verify your account",
            "claim now", "open this link"
        ]

    };

    let detected = [];

    for (let category in warningSigns) {

        let found = warningSigns[category].some(word =>
            message.includes(word)
        );

        if (found) {
            detected.push(category);
        }

    }

    result.innerHTML = "";

    let heading = document.createElement("h3");

    heading.textContent = detected.length
        ? "Possible Warning Signs Detected"
        : "No Listed Warning Signs Detected";

    heading.style.color = "var(--cyan)";

    result.appendChild(heading);

    if (detected.length > 0) {

        let list = document.createElement("ul");

        detected.forEach(item => {

            let li = document.createElement("li");

            li.textContent = item;

            list.appendChild(li);

        });

        result.appendChild(list);

    } else {

        let p = document.createElement("p");

        p.textContent =
            "This does not guarantee that the message is safe. Some scams use wording that this simple checker may not recognize.";

        result.appendChild(p);

    }

    let note = document.createElement("p");

    note.className = "small-note";

    note.textContent =
        "Reminder: This is a basic keyword checker only. It cannot verify links, identify senders, or confirm whether a message is fraudulent.";

    result.appendChild(note);

}

function clearMessage() {

    document.getElementById("message").value = "";

    document.getElementById("result").textContent =
        "Your message has been cleared. Enter another message to check.";

}