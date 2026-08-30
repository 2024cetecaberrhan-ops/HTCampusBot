/* =========================================================
   HTCampusBot - Main JavaScript
========================================================= */


/* =========================================================
   CHATBOT ELEMENTS
========================================================= */

const chatbotWindow =
    document.getElementById("chatbotWindow");

const floatingChat =
    document.getElementById("floatingChat");

const headerChatBtn =
    document.getElementById("headerChatBtn");

const closeChatBtn =
    document.getElementById("closeChatBtn");

const askBotBtn =
    document.getElementById("askBotBtn");

const learnMoreBtn =
    document.getElementById("learnMoreBtn");

const sendButton =
    document.getElementById("sendButton");

const messageInput =
    document.getElementById("messageInput");

const chatBody =
    document.getElementById("chatBody");

const quickButtons =
    document.querySelectorAll(".quick-links button");


/* =========================================================
   LOGIN ELEMENTS
========================================================= */

const userLoginBtn =
    document.getElementById("userLoginBtn");

const loginModal =
    document.getElementById("loginModal");

const loginBackdrop =
    document.getElementById("loginBackdrop");

const closeLoginBtn =
    document.getElementById("closeLoginBtn");

const googleLoginBtn =
    document.getElementById("googleLoginBtn");

const userLoginForm =
    document.getElementById("userLoginForm");

const userLoginMessage =
    document.getElementById("userLoginMessage");


/* =========================================================
   CHATBOT FUNCTIONS
========================================================= */

function openChatbot() {

    if (!chatbotWindow) {
        return;
    }

    chatbotWindow.style.display = "flex";

    if (floatingChat) {
        floatingChat.style.display = "none";
    }
}


function closeChatbot() {

    if (!chatbotWindow) {
        return;
    }

    chatbotWindow.style.display = "none";

    if (floatingChat) {
        floatingChat.style.display = "flex";
    }
}


/* HEADER CHAT BUTTON */

if (headerChatBtn) {

    headerChatBtn.addEventListener(
        "click",
        function () {

            openChatbot();

        }
    );

}


/* FLOATING CHAT */

if (floatingChat) {

    floatingChat.addEventListener(
        "click",
        function () {

            openChatbot();

        }
    );

}


/* GET STARTED */

if (askBotBtn) {

    askBotBtn.addEventListener(
        "click",
        function () {

            openChatbot();

        }
    );

}


/* CLOSE CHAT */

if (closeChatBtn) {

    closeChatBtn.addEventListener(
        "click",
        function () {

            closeChatbot();

        }
    );

}


/* LEARN MORE */

if (learnMoreBtn) {

    learnMoreBtn.addEventListener(
        "click",
        function () {

            const features =
                document.querySelector(".features");

            if (features) {

                features.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

}


/* =========================================================
   BOT RESPONSES
========================================================= */

function getBotResponse(message) {

    const text =
        message.toLowerCase();


    if (
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("hey")
    ) {

        return (
            "Hello! 👋 Welcome to HTCampusBot. " +
            "How can I help you with Holy Trinity College information?"
        );

    }


    if (
        text.includes("enrollment") ||
        text.includes("enroll")
    ) {

        return (
            "For enrollment information, please check the " +
            "current Holy Trinity College enrollment requirements " +
            "and procedures or contact the appropriate school office."
        );

    }


    if (
        text.includes("admission") ||
        text.includes("apply") ||
        text.includes("application")
    ) {

        return (
            "For admission concerns, please refer to the current " +
            "admission requirements and procedures of Holy Trinity College."
        );

    }


    if (
        text.includes("tuition") ||
        text.includes("fee") ||
        text.includes("fees")
    ) {

        return (
            "For current tuition and school fee information, " +
            "please contact the appropriate HTC office for the latest details."
        );

    }


    if (
        text.includes("scholarship") ||
        text.includes("financial aid")
    ) {

        return (
            "For scholarship and financial assistance information, " +
            "please check the latest HTC requirements and announcements."
        );

    }


    if (
        text.includes("office hours") ||
        text.includes("office schedule") ||
        text.includes("open")
    ) {

        return (
            "Office schedules may vary by department. " +
            "Please check the latest official HTC information."
        );

    }


    if (
        text.includes("program") ||
        text.includes("course") ||
        text.includes("degree")
    ) {

        return (
            "HTCampusBot can provide information about academic " +
            "programs offered by Holy Trinity College."
        );

    }


    if (
        text.includes("policy") ||
        text.includes("policies") ||
        text.includes("rules")
    ) {

        return (
            "For school policies and regulations, please refer " +
            "to current official Holy Trinity College guidelines " +
            "and announcements."
        );

    }


    return (
        "Thank you for your question! HTCampusBot is a prototype " +
        "for providing school information about Holy Trinity College."
    );

}


/* =========================================================
   ADD CHAT MESSAGE
========================================================= */

function addMessage(message, sender) {

    if (!chatBody) {
        return;
    }


    const messageElement =
        document.createElement("div");


    if (sender === "user") {

        messageElement.className =
            "user-message";

    } else {

        messageElement.className =
            "bot-message";

    }


    messageElement.textContent =
        message;


    chatBody.appendChild(
        messageElement
    );


    chatBody.scrollTop =
        chatBody.scrollHeight;
}


/* =========================================================
   SEND MESSAGE
========================================================= */

function sendMessage() {

    if (!messageInput) {
        return;
    }


    const message =
        messageInput.value.trim();


    if (message === "") {
        return;
    }


    addMessage(
        message,
        "user"
    );


    messageInput.value = "";


    setTimeout(
        function () {

            const response =
                getBotResponse(message);


            addMessage(
                response,
                "bot"
            );

        },
        450
    );
}


/* SEND BUTTON */

if (sendButton) {

    sendButton.addEventListener(
        "click",
        sendMessage
    );

}


/* ENTER KEY */

if (messageInput) {

    messageInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                event.preventDefault();

                sendMessage();

            }

        }
    );

}


/* =========================================================
   QUICK QUESTIONS
========================================================= */

quickButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                const question =
                    button.textContent.trim();


                addMessage(
                    question,
                    "user"
                );


                setTimeout(
                    function () {

                        const response =
                            getBotResponse(question);


                        addMessage(
                            response,
                            "bot"
                        );

                    },
                    450
                );

            }
        );

    }
);


/* =========================================================
   USER LOGIN POPUP
========================================================= */

function openUserLogin() {

    if (!loginModal) {
        return;
    }


    loginModal.classList.add("show");

    document.body.style.overflow =
        "hidden";


    if (userLoginMessage) {
        userLoginMessage.textContent = "";
    }


    const emailInput =
        document.getElementById("userEmail");


    if (emailInput) {

        setTimeout(
            function () {

                emailInput.focus();

            },
            150
        );

    }
}


function closeUserLogin() {

    if (!loginModal) {
        return;
    }


    loginModal.classList.remove("show");

    document.body.style.overflow =
        "";
}


/* LOGIN BUTTON */

if (userLoginBtn) {

    userLoginBtn.addEventListener(
        "click",
        openUserLogin
    );

}


/* CLOSE LOGIN */

if (closeLoginBtn) {

    closeLoginBtn.addEventListener(
        "click",
        closeUserLogin
    );

}


/* BACKDROP */

if (loginBackdrop) {

    loginBackdrop.addEventListener(
        "click",
        closeUserLogin
    );

}


/* =========================================================
   GOOGLE BUTTON
========================================================= */

if (googleLoginBtn) {

    googleLoginBtn.addEventListener(
        "click",
        function () {

            userLoginMessage.textContent =
                "Google Sign-In is currently a prototype.";

            userLoginMessage.style.color =
                "#087b22";

        }
    );

}


/* =========================================================
   USER LOGIN FORM
========================================================= */

if (userLoginForm) {

    userLoginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const email =
                document.getElementById(
                    "userEmail"
                ).value.trim();


            const password =
                document.getElementById(
                    "userPassword"
                ).value;


            const remember =
                document.getElementById(
                    "rememberUser"
                ).checked;


            /*
                DEMO USER ACCOUNT

                Email:
                student@htcampusbot.com

                Password:
                student123
            */


            if (
                email ===
                "student@htcampusbot.com"
                &&
                password === "student123"
            ) {


                const userSession = {

                    email: email,

                    loggedIn: true,

                    loginTime:
                        new Date().toISOString()

                };


                sessionStorage.setItem(
                    "htcampusUserSession",
                    JSON.stringify(userSession)
                );


                if (remember) {

                    localStorage.setItem(
                        "htcampusRememberUser",
                        "true"
                    );

                } else {

                    localStorage.removeItem(
                        "htcampusRememberUser"
                    );

                }


                userLoginMessage.textContent =
                    "Sign in successful!";

                userLoginMessage.style.color =
                    "#087b22";


                setTimeout(
                    function () {

                        closeUserLogin();

                    },
                    700
                );


            } else {

                userLoginMessage.textContent =
                    "Invalid email or password.";

                userLoginMessage.style.color =
                    "#c62828";

            }

        }
    );

}


/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeChatbot();

            closeUserLogin();

        }

    }
);

/* =========================================================
   FORM 1 & FORM 2
========================================================= */


/* FORM 1 ELEMENTS */

const openInquiryForm =
    document.getElementById("openInquiryForm");

const inquiryFormModal =
    document.getElementById("inquiryFormModal");

const closeInquiryForm =
    document.getElementById("closeInquiryForm");

const studentInquiryForm =
    document.getElementById("studentInquiryForm");

const inquiryFormMessage =
    document.getElementById("inquiryFormMessage");


/* FORM 2 ELEMENTS */

const openInformationForm =
    document.getElementById("openInformationForm");

const informationFormModal =
    document.getElementById("informationFormModal");

const closeInformationForm =
    document.getElementById("closeInformationForm");

const informationRequestForm =
    document.getElementById("informationRequestForm");

const informationFormMessage =
    document.getElementById("informationFormMessage");


/* =========================================================
   OPEN FORM 1
========================================================= */

if (openInquiryForm) {

    openInquiryForm.addEventListener(
        "click",
        function () {

            inquiryFormModal.classList.add("show");

            document.body.style.overflow = "hidden";

        }
    );

}


/* =========================================================
   CLOSE FORM 1
========================================================= */

if (closeInquiryForm) {

    closeInquiryForm.addEventListener(
        "click",
        function () {

            inquiryFormModal.classList.remove("show");

            document.body.style.overflow = "";

        }
    );

}


/* =========================================================
   OPEN FORM 2
========================================================= */

if (openInformationForm) {

    openInformationForm.addEventListener(
        "click",
        function () {

            informationFormModal.classList.add("show");

            document.body.style.overflow = "hidden";

        }
    );

}


/* =========================================================
   CLOSE FORM 2
========================================================= */

if (closeInformationForm) {

    closeInformationForm.addEventListener(
        "click",
        function () {

            informationFormModal.classList.remove("show");

            document.body.style.overflow = "";

        }
    );

}


/* =========================================================
   FORM 1 SUBMIT
========================================================= */

if (studentInquiryForm) {

    studentInquiryForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            inquiryFormMessage.textContent =
                "Inquiry submitted successfully!";

            inquiryFormMessage.style.color =
                "#087b22";

            studentInquiryForm.reset();

        }
    );

}


/* =========================================================
   FORM 2 SUBMIT
========================================================= */

if (informationRequestForm) {

    informationRequestForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            informationFormMessage.textContent =
                "Information request submitted successfully!";

            informationFormMessage.style.color =
                "#087b22";

            informationRequestForm.reset();

        }
    );

}


/* =========================================================
   CLOSE FORMS WITH ESCAPE
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            if (inquiryFormModal) {

                inquiryFormModal.classList.remove("show");

            }

            if (informationFormModal) {

                informationFormModal.classList.remove("show");

            }

            document.body.style.overflow = "";

        }

    }
);