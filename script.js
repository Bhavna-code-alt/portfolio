document.addEventListener('DOMContentLoaded', () => {
    const resume = document.getElementsByClassName('btn1')[0];
    if (resume) {
        resume.addEventListener('click', function () {
            window.open('C:/Users/user/OneDrive/Desktop/portfolio/myResume.pdf');
        })
    }
});