* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%);
    font-family: 'Poppins', sans-serif;
}

.container {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 350px;
}

.heart {
    position: relative;
    width: 50px;
    height: 50px;
    background-color: #ff3366;
    margin: 0 auto 20px auto;
    transform: rotate(-45deg);
    animation: beat .6s infinite alternate;
}

.heart:before,
.heart:after {
    content: "";
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: #ff3366;
    border-radius: 50%;
}

.heart:before {
    top: -25px;
    left: 0;
}

.heart:after {
    top: 0;
    left: 25px;
}

@keyframes beat {
    0% {
        transform: rotate(-45deg) scale(1);
    }
    100% {
        transform: rotate(-45deg) scale(1.15);
    }
}

h1 {
    font-size: 24px;
    color: #fff;
    margin-bottom: 10px;
}

p {
    font-size: 14px;
    color: #ffe0e6;
    margin-bottom: 25px;
}

button {
    background: #fff;
    color: #ff4a75;
    border: none;
    padding: 12px 40px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 25px;
    cursor: pointer;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

button:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
}

